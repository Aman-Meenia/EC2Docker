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

const SignupPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-400">
        {/* <Card className="w-1/3 bg-black"> */}
        <Card className="m-auto w-1/3 bg-zinc-50 rounded-md p-5 ">
          <form>
            <CardHeader>
              <CardTitle className="text-2xl flex justify-center ">
                Signup Page
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-md">
                  Username
                </label>
                <Input type="text" placeholder="username" />

                <label htmlFor="name" className="text-md">
                  Name
                </label>
                <Input type="name" placeholder="name" />

                <label htmlFor="password" className="text-md">
                  Password
                </label>
                <Input type="password" placeholder="password" />

                <label htmlFor="password" className="text-md">
                  Confirm Password
                </label>
                <Input type="password" placeholder="confirm password" />
                <label htmlFor="gender" className="text-md">
                  Gender
                </label>
                <div className="flex  gap-2">
                  <div className="mr-5 ">
                    <label htmlFor="Male" className="">
                      Male
                    </label>
                    <input type="checkbox" className="ml-1 h-4 w-4 " />
                  </div>
                  <div>
                    <label htmlFor="Female">Female</label>
                    <input type="checkbox" className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* </div> */}
            </CardContent>
            <CardFooter>
              <div className="flex flex-col justify-center items-center w-full gap-1">
                <Button type="submit" variant="default" className="w-1/2">
                  Signup
                </Button>
                <span className="text-lg">or</span>

                <Button variant="default" className="w-1/2">
                  Sign up with Google
                </Button>

                <span>
                  Already have an account?
                  <Link href="/login" className="text-blue-500">
                    Login
                  </Link>
                </span>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
};

export default SignupPage;
