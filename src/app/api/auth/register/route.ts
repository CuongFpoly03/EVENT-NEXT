import { connectDB } from "@/lib/database";
import User from "@/lib/database/models/user.model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password, firstName, lastName, username } = await request.json();
  await connectDB();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    username,
    firstName,
    lastName,
    password: hashedPassword,

  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};