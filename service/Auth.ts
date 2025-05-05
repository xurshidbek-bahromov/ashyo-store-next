import { instance } from "@/hooks/instance";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";

interface LoginType {
  email: string;
  password: string;
}

interface RegisterType {
  fullname: string;
  email: string;
  password: string;
}

export const Login = (p0: { onError: (error: any) => void; onSuccess: () => void; }) => {
  return useMutation({
    mutationFn: (data: LoginType) =>
      instance().post("/auth/login", data).then((res) => {
        setCookie("TOKEN", res.data.accessToken);
      }),
  });
};

export const Register = (p0: { onError: (error: any) => void; onSuccess: () => void; }) => {
  return useMutation({
    mutationFn: (data: RegisterType) =>
      instance().post("/auth/register", data).then((res) => {
        setCookie("TOKEN", res.data.accessToken);
      }),
  });
};
