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
import { useTranslations } from 'next-intl';

export const Auth: FC<{ closeAction: Dispatch<SetStateAction<boolean>> }> = ({
  closeAction,
}) => {
  const t = useTranslations("Auth");
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const login = Login({
    onError: (error) => {
      setLoginError(error.message || t("login_error"));
    },
    onSuccess: () => {
      toast.success(t("login_success"), {
        description: t("login_success_desc"),
      });
      closeAction(false);
      router.push('/profile');
    },
  });

  const register = Register({
    onError: (error) => {
      setRegisterError(error.message || t("register_error"));
    },
    onSuccess: () => {
      toast.success(t("register_success"), {
        description: t("register_success_desc"),
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
      setLoginError(t("validation_required"));
      return;
    }

    const loginPromise = login.mutateAsync({ email, password });

    toast.promise(loginPromise, {
      loading: t("logging_in"),
      success: () => {
        closeAction(false);
        return t("login_success");
      },
      error: t("login_error"),
    });
  }

  function handleRegister(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fullname = form.fullname.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!fullname || !email || !password) {
      setRegisterError(t("validation_required"));
      return;
    }

    if (password.length < 6) {
      setRegisterError(t("password_length_error"));
      return;
    }

    setRegisterError(null);

    const registerPromise = register.mutateAsync({ fullname, email, password });

    toast.promise(registerPromise, {
      loading: t("creating_account"),
      success: () => {
        setActiveTab("login");
        return t("register_success");
      },
      error: t("register_error"),
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
      <TabsList className="grid w-full grid-cols-2 bg-blue-100 text-[#134E9B] rounded-xl p-1 shadow-md">
        <TabsTrigger
          value="login"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-colors duration-300"
        >
          {t("login_tab")}
        </TabsTrigger>
        <TabsTrigger
          value="register"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-colors duration-300"
        >
          {t("register_tab")}
        </TabsTrigger>
      </TabsList>

      {/* Login */}
      <TabsContent value="login">
        <Card className="bg-gradient-to-b from-blue-50 to-white border border-blue-200 shadow-xl rounded-2xl">
          <CardHeader className="text-blue-800">
            <CardTitle className="text-2xl">{t("login_title")}</CardTitle>
            <CardDescription>{t("login_description")}</CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              {loginError && (
                <div className="text-sm text-red-500 px-2 py-1.5 rounded-md bg-red-100 border border-red-300 shadow-sm">
                  {loginError}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">{t("email_label")}</Label>
                <Input
                  name="email"
                  autoComplete="email"
                  id="email"
                  type="email"
                  placeholder={t("email_placeholder")}
                  required
                  className="focus-visible:ring-2 focus-visible:ring-[#134E9B] rounded-md border-blue-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t("password_label")}</Label>
                <Input
                  name="password"
                  autoComplete="current-password"
                  type="password"
                  id="password"
                  placeholder={t("password_placeholder")}
                  required
                  minLength={6}
                  className="focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md border-blue-300"
                />
              </div>
              <div className="text-right text-sm">
                <button
                  type="button"
                  className="text-blue-600 hover:underline font-medium"
                  onClick={() => {
                    toast.info(t("reset_password_toast"), {
                      description: t("reset_password_desc"),
                    });
                  }}
                >
                  {t("forgot_password")}
                </button>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-[#134E9B] hover:bg-[#134e9b82] duration-500 cursor-pointer text-white font-semibold shadow-lg rounded-md"
                disabled={login.isPending}
              >
                {login.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("logging_in")}
                  </>
                ) : t("login_button")}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      {/* Register */}
      <TabsContent value="register">
        <Card className="bg-gradient-to-b from-blue-50 to-white border border-blue-200 shadow-xl rounded-2xl">
          <CardHeader className="text-blue-800">
            <CardTitle className="text-2xl">{t("register_title")}</CardTitle>
            <CardDescription>{t("register_description")}</CardDescription>
          </CardHeader>
          <form onSubmit={handleRegister}>
            <CardContent className="space-y-4">
              {registerError && (
                <div className="text-sm text-red-500 px-2 py-1.5 rounded-md bg-red-100 border border-red-300 shadow-sm">
                  {registerError}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="fullname">{t("fullname_label")}</Label>
                <Input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder={t("fullname_placeholder")}
                  required
                  className="focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md border-blue-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("email_label")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("email_placeholder")}
                  required
                  className="focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md border-blue-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t("password_label")}</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t("password_placeholder")}
                  required
                  minLength={6}
                  className="focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md border-blue-300"
                />
                <p className="text-xs text-muted-foreground">
                  {t("password_requirement")}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button
                type="submit"
                className="w-full bg-[#134E9B] hover:bg-[#134e9b82] duration-500 cursor-pointer text-white font-semibold shadow-lg rounded-md"
                disabled={register.isPending}
              >
                {register.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("creating_account")}
                  </>
                ) : t("register_button")}
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                {t("already_have_account")}{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:underline font-medium"
                  onClick={() => setActiveTab("login")}
                >
                  {t("sign_in_link")}
                </button>
              </p>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
