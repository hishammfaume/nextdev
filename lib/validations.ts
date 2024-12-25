import {z} from "zod";

export const SignInSchema = z.object({
    email: z.string().min(1, {message : "Email is required"}).email({message: "Invalid email"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}).max(100, {message: "Password must be less than 100 characters long"}),
});

export const SignUpSchema = z.object({
    username: z.string().min(3, {message : "Username must be atleast 3 characters"}).max(30, {message: "Username can only contain 30 characters"}).regex(/^[a-zA-Z0-9_]*$/, {message: "Username can only contain letters, numbers and underscores"}),
    email: z.string().min(1, {message : "Email is required"}).email({message: "Invalid email"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}).max(100, {message: "Password must be less than 100 characters long"}).regex(/[A-Z]/, {message: "Password must contain at least one uppercase letter"}).regex(/[a-z]/, {message: "Password must contain at least one lowercase letter"}).regex(/[0-9]/, {message: "Password must contain at least one number"}).regex(/[^a-zA-Z0-9]/, {message: "Password must contain at least one special character"}),
});