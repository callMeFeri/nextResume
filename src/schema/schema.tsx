import { z, ZodType } from "zod";
export type DataForm = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export const signUpSchema: ZodType<DataForm> = z
  .object({
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6).max(15),
    confirmPassword: z.string().min(6).max(15),
    username: z.string().min(2),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
