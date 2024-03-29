import { z } from "zod";
export const signUpSchema = z
  .object({
    firstname: z.string().min(3).max(20),
    lastname: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6).max(15),
    confirmPassword: z.string().min(6).max(15),
    username: z.string().min(2),
    userId: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type TSignUpSchema = z.infer<typeof signUpSchema>;
export const userNameEdit = z.object({
  userName: z.string().min(2, "user name must at least contain 2 words."),
});
export type TUserNameEdit = z.infer<typeof userNameEdit>;
