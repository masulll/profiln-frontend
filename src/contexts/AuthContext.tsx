// contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "binar/pages/api/v1";
import { loginData } from "binar/types/data";
// import jwt_decode from "jwt-decode";

interface AuthContextType {
  user: any;
  token: string | null;
  login: (credentials: loginData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  //   email: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null
  );
  const [email, setEmail] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const fetchUser = async () => {
    const { data } = await axiosInstance.get("/api/v1/me");
    return data;
  };

  const { data: user, isLoading } = useQuery("user", fetchUser, {
    enabled: !!token,
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
        setToken(data.token);
        // const decoded: any = jwt_decode(data.token);
        // setEmail(decoded.email);
        queryClient.invalidateQueries("user");
      },
    }
  );

  const logout = () => {
    Cookies.remove("token");
    setToken(null);
    setEmail(null);
    queryClient.invalidateQueries("user");
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

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
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
