import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ActivityIndicator } from "../components/ActivityIndicator/ActivityIndicator";
import { ActivityIndicatorLogin } from "../components/ActivityIndicator/ActivityIndicatorLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { LoginSchema } from "../schema/LoginSchema";
import styles from "../styles/Login.module.css";
import Layout from "../components/Layout/Layout";
import { useContext } from "react";
import UserContext from "../lib/UserContext";
import { FormValues } from "../models/FormValues";
const baseURL = "https://blog-api-gilt.vercel.app/api";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>("");
  const { user, saveUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      // if global state has user data:
      // redirect to welcome page
      console.log("When user already login, will redirect to welcome page", user);
      router.push("./welcome");
      return;
    } else {
      // if global state doesn't have user data:
      // show login page
      console.log("No saved user found, now in login page");
    }
    setIsLoading(false);
  }, [router, user]);

  const onSubmit = async (data: FormValues) => {
    setIsLoginLoading(true);
    try {
      // call the endpoint /login passing the form values
      const response = await axios.post(`${baseURL}/login`, {
        email: data.email, //"test@demo.com"
        password: data.password, //"pass123"
      });
      // If the authentication is successful:
      // save the authenticated user data to grobal state
      saveUser(response.data);
    } catch (err) {
      setIsLoginLoading(false);
      // if the authentication is failed:
      // display the error
      setLoginErrorMessage(
        "Sorry, we can't find an account with this email address. Please try again or create a new account."
      );
      console.error("login error", err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(LoginSchema),
  });
  const onError = (errors: any) => console.log(errors);

  if (isLoading) return <ActivityIndicator />;
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <>
            <h1 className={styles.pageTitle}>Log In</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              {loginErrorMessage && (
                <p className={styles.auchenticationErrorMessage}>{loginErrorMessage}</p>
              )}
              <Input label={"Email"} name={"email"} register={register} errors={errors.email} />
              <Input
                label={"Password"}
                name={"password"}
                register={register}
                errors={errors.password}
              />
              {isLoginLoading && <ActivityIndicatorLogin />}
              <Button onClick={undefined} text={"Log In"} />
            </form>
          </>
        </div>
      </div>
    </Layout>
  );
}
