const zod = require('zod');

const signupSchema = zod.object({
    username: zod.string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 characters."})
    .max(255, {message:"Name must not exceed 255 characters"})
    .nullish(),
    email: zod.string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(3,{message:"Email must be atleast 3 characters"})
    .max(255,{message:"Email cannot exceed 255 characters"}),
    phone:zod
    .string({required_error:"phone number is required"})
    .trim()
    .min(10,{message:"Phone number must be atleast of 10 characters."})
    .max(20,{message:"Phone number cannot exceeds 20 characters."}),
    password: zod
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be atleast of 7 characters."})
    .max(1024,"Password cannot exceeds 1024 characters.")
});

const loginSchema = zod.object({
    email: zod.string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(3,{message:"Email must be atleast 3 characters"})
    .max(255,{message:"Email cannot exceed 255 characters"}),
    password: zod
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be atleast of 7 characters."})
    .max(1024,"Password cannot exceeds 1024 characters.")
});

const contactSchema = zod.object({
    username: zod.string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 characters."})
    .max(255, {message:"Name must not exceed 255 characters"})
    .nullish(),
    email: zod.string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(3,{message:"Email must be atleast 3 characters"})
    .max(255,{message:"Email cannot exceed 255 characters"}),
    message:zod
    .string({required_error:"message is required"})
    .trim()
    .min(0,{message:"Message should be of atleast one letter"})
    .max(1200,{message:"limit exceeded"}),
});


module.exports = {signupSchema,loginSchema,contactSchema};