// contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "binar/pages/api/v1";
import { loginData } from "binar/types/data";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/router";

interface AuthContextType {
  user: any;
  token: string | null;
  login: (credentials: loginData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  googleLogin: () => void;
  googleRegister: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null
  );
  const queryClient = useQueryClient();

  const fetchUser = async () => {
    try {
      const { data } = await axiosInstance.get("/api/v1/users/me");
      console.log(data);
      return data;
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
        router.push("/"); // Pindah halaman setelah register berhasil
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
        await registerGoogleMutation.mutateAsync({ email, fullname: name });
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        googleLogin,
        googleRegister,
        isLoading,
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
