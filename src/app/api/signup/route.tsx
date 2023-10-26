import { NextResponse } from "next/server";

import { signUpSchema } from "@/schema/schema";
import { ZodError } from "zod";
export const POST = async (request: Request) => {
  const body: unknown = await request.json();
  const result = signUpSchema.safeParse(body);
};
