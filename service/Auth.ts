import { instance } from "@/hooks/instance"
import { useMutation } from "@tanstack/react-query"
// import { useMutation } from "@tanstack/react-query"
import { setCookie } from "cookies-next"


interface LoginType {
    email:string,
    password:string
}

export const Login = () => {
    return useMutation({
        mutationFn:(data:LoginType) => instance().post("/auth/login", data).then(res => {
            setCookie("TOKEN", res.data.accessToken)
        })
    }) 
}