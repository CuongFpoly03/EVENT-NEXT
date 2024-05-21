"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Signup } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/profile");
    }
  }, [sessionStatus, router]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Signup>();

  const onSubmit = async (data: Signup) => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        
        router.push("/sign-in");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border bg-white rounded-md w-full"
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
            type="text"
            placeholder="Username"
            className="bg-gray-100"
            {...register("username", { required: true })}
          />
          {errors && errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
        </div>
        <div className="flex p-4">
          <div>
            <Input
              type="text"
              placeholder="First Name"
              className="bg-gray-100 mr-2"
              {...register("firstName", { required: true })}
            />
            {errors && errors.firstName && (
              <p className="text-red-500">First Name is required</p>
            )}
          </div>
          <div>
            <Input
              type="text"
              placeholder="Last Name"
              className="bg-gray-100"
              {...register("lastName", { required: true })}
            />
            {errors && errors.lastName && (
              <p className="text-red-500">Last Name is required</p>
            )}
          </div>
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
        <Button  className="my-2 ml-4">Sigup</Button>
        <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
      </form>
    </div>
  );
};

export default Register;
