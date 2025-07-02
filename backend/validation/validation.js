const {z}=require("zod");

const signupSchema=z.object({
    username:z.string()
    .min(4,"username must be more that 4 characters")
    .max(20,"username should not be more than 20 characters")
    .regex(/^\S+$/,"username must not contain spaces"),
    password:z.string()
    .min(7,"Password must be atleast 7 charcaters")
    .max(20,"Password can contain 20 charcaters maximum")
    .regex(/[A-Z]/,"password must contain atleats one capital letter")
    .regex(/[a-z]/,"Password must contain at least one small letter")
    .regex(/[0-9]/,"password must contain at least one digit")
    .regex(/[^A-Za-z0-9]/,"Password must contain atleast one special character")
});

const signinSchema=z.object({
    username:z.string()
    .min(4,"username must be more that 4 characters")
    .max(20,"username should not be more than 20 characters"),
    password:z.string()
    .min(7,"Password must be atleast 7 charcaters")
    .max(20,"Password can contain 20 charcaters maximum")
    .regex(/[A-Z]/,"password must contain atleats one capital letter")
    .regex(/[a-z]/,"Password must contain at least one small letter")
    .regex(/[0-9]/,"password must contain at least one digit")
    .regex(/[^A-Za-z0-9]/,"Password must contain atleast one special character")
});

const todoSchema=z.object({
    taskname:z.string()
    .min(1,"cannot be empty")
    .max(40,"maximum of 40 characters")
});

module.exports={
    signupSchema,
    signinSchema,
    todoSchema
}
