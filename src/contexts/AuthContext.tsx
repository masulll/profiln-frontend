// contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "binar/pages/api/v1";
import { loginData } from "binar/types/data";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/router";
import { userData } from "binar/types/userData";
import { registerData } from "binar/types/data";
interface AuthContextType {
  user: any;
  token: string | null;
  login: (credentials: loginData) => Promise<void>;
  errorMessage: string | null;
  logout: () => void;
  isLoading: boolean;
  googleLogin: () => void;
  googleRegister: () => void;
  registerManual: (userData: registerData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const queryClient = useQueryClient();

  const fetchUser = async () => {
    try {
      const { data } = await axiosInstance.get("/api/v1/users/me");

      const { fullname } = data.data;
      const [firstname, lastname] = fullname.split(" ");

      const capitalizedFirstname =
        firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
      const capitalizedLastname =
        lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();

      const updatedUserData: userData = {
        ...data.data,
        firstname: capitalizedFirstname,
        lastname: capitalizedLastname,
      };

      return updatedUserData;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };

  const { data: user, isLoading } = useQuery("user", fetchUser, {
    enabled: !!token,
    retry: false,
    onError: (error: any) => {
      console.error("Error in fetching user:", error);
      if (error.response?.status === 401) {
        logout();
      }
    },
  });

  const loginMutation = useMutation(
    async (credentials: loginData) => {
      const response = await axiosInstance.post(
        "/api/v1/login?type=app",
        credentials
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        Cookies.set("token", data.data?.token, {
          sameSite: "strict",
          secure: true,
          expires: 7,
        });
        setToken(data.data?.token);
        queryClient.invalidateQueries("user");
        router.push("/");
      },
    }
  );

  const googleLoginMutation = useMutation(
    async (userData: loginData) => {
      const response = await axiosInstance.post(
        "/api/v1/login?type=sso",
        userData
      );
      console.log(response.data);
      return response.data;
    },
    {
      onSuccess: (data) => {
        Cookies.set("token", data.data?.token, {
          sameSite: "strict",
          secure: true,
          expires: 7,
        });
        setToken(data.data?.token);
        queryClient.invalidateQueries("user");
        router.push("/");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const registerGoogleMutation = useMutation(
    async (userData: loginData) => {
      const response = await axiosInstance.post("/api/v1/register?oauth=true", {
        email: userData.email,
        fullname: userData.fullname?.toString(),
      });
      console.log(response);
      return response.data;
    },
    {
      onSuccess: (data) => {
        Cookies.set("token", data.token, {
          sameSite: "strict",
          secure: true,
          expires: 7,
        });
        setToken(data.token);
        queryClient.invalidateQueries("user");
        router.push("/info_data");
      },
      onError: (error: any) => {
        if (error.response?.status === 401) {
          console.error("Error 401: Unauthorized");
        } else {
          console.log(error);
        }
      },
    }
  );

  const registerManualMutation = useMutation(
    async (userData: registerData) => {
      const response = await axiosInstance.post(
        "/api/v1/register?oauth=false",
        userData
      );
      console.log(response);
      return response.data;
    },
    {
      onSuccess: (data) => {
        router.push({
          pathname: "/auth/register/verification",
          query: { email: data?.data?.email },
        });
      },
    }
  );

  const logout = () => {
    Cookies.remove("token");
    setToken(null);
    queryClient.invalidateQueries("user");
    router.reload();
  };

  useEffect(() => {
    if (!token) {
      queryClient.setQueryData("user", null);
    }
  }, [token, queryClient]);

  const login = async (credentials: loginData) => {
    try {
      await loginMutation.mutateAsync(credentials);
    } catch (error) {
      throw error;
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse;
      console.log(access_token);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${access_token}` } }
      );

      const { email } = userInfo.data;
      await googleLoginMutation.mutateAsync({ email });
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const googleRegister = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse;
      console.log(access_token);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${access_token}` } }
      );

      const { email, name } = userInfo.data;
      if (userInfo) {
        try {
          await registerGoogleMutation.mutateAsync({ email, fullname: name });
        } catch (error: any) {
          if (error.response?.status === 401) {
            // Tampilkan pesan kesalahan tetapi biarkan fungsi berlanjut
            console.error("Error 401: Unauthorized");
            setErrorMessage("Email telah terdaftar");
          } else {
            throw error;
          }
        }
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const registerManual = async (userData: registerData) => {
    try {
      await registerManualMutation.mutateAsync(userData);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        googleLogin,
        googleRegister,
        registerManual,
        isLoading,
        errorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
