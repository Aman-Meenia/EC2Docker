"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    setIsSubmitting(true);
    console.log("Data is ", data);
    const response = await signIn("github", {});
    // const response = await signIn("credentials", {
    //   name: data.name,
    //   password: data.password,
    //   redirect: false,
    // });
    //
    // if (response?.error) {
    //   toast.error("Invalid Credentials");
    // } else {
    //   router.replace("/"); // Navigate to the home page on successful login
    // }

    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <Card className="w-1/3 bg-slate-100">
        <form onSubmit={onSubmit}>
          <CardHeader>
            <CardTitle className="text-2xl flex justify-center">
              Login Page
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-md">
                Username
              </label>
              <Input
                type="text"
                placeholder="username"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <label htmlFor="password" className="text-md">
                Password
              </label>
              <Input
                type="password"
                placeholder="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col justify-center items-center w-full gap-1">
              <Button
                variant="default"
                className="w-1/2"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
              <span className="text-lg">or</span>
              <Button variant="default" className="w-1/2">
                Login with Google
              </Button>
              <span>
                Dont have an account?
                <Link href="/signup" className="text-blue-500">
                  Sign up{" "}
                </Link>
              </span>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
