"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Signin } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
const page = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/profile");
      toast({
        description: "You have login successfully !",
      })
    }
  }, [sessionStatus, router]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Signin>();
  const onSubmit = async (data: Signin) => {
    // console.log(data);
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/profile");
    } else {
      setError("");
    }
  };
  return (
    sessionStatus !== "authenticated" && (
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border bg-white rounded-md w-96"
        >
          <h1 className="text-2xl font-bold text-center py-6">Sigup</h1>
          <div className="p-4">
            <Input
              type="email"
              placeholder="Email"
              className="bg-gray-100"
              {...register("email", { required: true })}
            />
            {errors && errors.email && (
              <p className="text-red-500">Email is required</p>
            )}
          </div>

          <div className="p-4">
            <Input
              type="password"
              placeholder="Password"
              className="bg-gray-100"
              {...register("password", { required: true })}
            />
            {errors && errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
          </div>
          <div>
            <Button type="submit" className="my-2 ml-4">
              {" "}
              SigIn
            </Button>
            <Link
              className="float-right my-2 mr-4 text-sm border-b"
              href="/sign-up"
            >
              Signup
            </Link>
          </div>
          <div className="text-center w-96">
            <button
              className="w-56 my-3 bg-black text-white py-2 rounded-full hover:bg-gray-800"
              onClick={() => {
                signIn("github");
              }}
            >
              Sign In with Github
            </button>
            <button className="w-56 mb-3 text-base rounded-full border-black border-solid bg-white text-black border py-2 hover:bg-gray-400">
              {" "}
              Sign In with Google
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default page;
