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
import { Login, Register } from "@/service/Auth";
import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { useRouter } from 'next/navigation';

export const Auth: FC<{ closeAction: Dispatch<SetStateAction<boolean>> }> = ({
  closeAction,
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const login = Login({
    onError: (error) => {
      setLoginError(error.message || "Login failed. Please try again.");
    },
    onSuccess: () => {
      toast.success("Login successful", {
        description: "You have been logged in successfully.",
      });
      closeAction(false);
      router.push('/profile');
    },
  });

  const register = Register({
    onError: (error) => {
      setRegisterError(error.message || "Registration failed. Please try again.");
    },
    onSuccess: () => {
      toast.success("Registration successful", {
        description: "Your account has been created. Please login.",
      });
      setActiveTab("login");
      setRegisterError(null);
    },
  });

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginError(null);
    const form = e.target as HTMLFormElement;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      setLoginError("Please fill in all fields");
      return;
    }

    const loginPromise = login.mutateAsync({ email, password });
    
    toast.promise(loginPromise, {
      loading: "Logging in...",
      success: () => {
        closeAction(false);
        return "Logged in successfully!";
      },
      error: "Failed to login. Please try again.",
    });
  }

  function handleRegister(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fullname = form.fullname.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!fullname || !email || !password) {
      setRegisterError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters");
      return;
    }

    setRegisterError(null);
    
    const registerPromise = register.mutateAsync({ fullname, email, password });
    
    toast.promise(registerPromise, {
      loading: "Creating account...",
      success: () => {
        setActiveTab("login");
        return "Account created successfully!";
      },
      error: "Failed to create account. Please try again.",
    });
  }

  return (
    <Tabs 
      defaultValue="login" 
      value={activeTab}
      onValueChange={(value) => {
        setActiveTab(value as "login" | "register");
        setLoginError(null);
        setRegisterError(null);
      }}
      className="w-[400px]"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>

      {/* Login */}
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              {loginError && (
                <div className="text-sm text-red-500 px-2 py-1.5 rounded-md bg-red-50">
                  {loginError}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  autoComplete="email"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  autoComplete="current-password"
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
              <div className="text-right text-sm">
                <button 
                  type="button" 
                  className="text-primary hover:underline"
                  onClick={() => {
                    toast.info("Password reset", {
                      description: "A password reset link has been sent to your email.",
                    });
                  }}
                >
                  Forgot password?
                </button>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full"
                disabled={login.isPending}
              >
                {login.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : "Login"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      {/* Register */}
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Fill in your details to create a new account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleRegister}>
            <CardContent className="space-y-4">
              {registerError && (
                <div className="text-sm text-red-500 px-2 py-1.5 rounded-md bg-red-50">
                  {registerError}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Palonchiyev Pistonchi"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <p className="text-xs text-muted-foreground">
                  Password must be at least 6 characters
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button 
                type="submit" 
                className="w-full"
                disabled={register.isPending}
              >
                {register.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : "Register"}
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <button 
                  type="button" 
                  className="text-primary hover:underline"
                  onClick={() => setActiveTab("login")}
                >
                  Sign in
                </button>
              </p>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  );
};