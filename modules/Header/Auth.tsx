import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Login } from "@/service/Auth";
import { Dispatch, FC, FormEvent, SetStateAction } from "react";

export const Auth:FC<{closeAction:Dispatch<SetStateAction<boolean>>}> = ({closeAction}) => {
  const mutate = Login()
    function handleLogin (e:FormEvent){
        e.preventDefault()
        const data = {
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value
        }
        mutate.mutate(data)
        closeAction(false)
        
    }
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input name="password" autoComplete="off" id="email" placeholder="Email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  autoComplete="off"
                  type="password"
                  id="password"
                  placeholder="********"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="fullname">Enter Your Fullname</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Enter Your Fullname"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Enter Your Email</Label>
              <Input id="email" type="text" placeholder="Enter Your Email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Enter Your Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Register</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
