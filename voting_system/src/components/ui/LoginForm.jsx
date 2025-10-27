"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: "800",
  subsets: ["latin"],
});

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
    username: z
        .string()
        .min(3, "username must be at least 3 characters long.")
        .max(50, "username must not be more than 50 characters"),
    password: z
        .string()
        .min(20, "password must be at least 20 characters.")
        .max(100, "password must be at most 100 characters."),
})

export const LoginForm = () => {
    // REMOVE the duplicate useForm - keep only this one
    const { control, handleSubmit, reset } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })
    
    function onSubmit(data) {
        toast.success("Login successful!")
        console.log(data)
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button 
                    size="lg" 
                    className={`${montserrat.className} mt-6
                        backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 
                        border border-white/30 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                        hover:bg-white/30 hover:shadow-[0_12px_48px_rgba(0,0,0,0.2)]
                        transition-all duration-300 ease-in-out
                        text-shadow-lg
                    `}
                > 
                    <h1 className={`text-white text-3xl font-bold`}>SIGN IN</h1>
                </Button>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Sign In</SheetTitle>
                    <SheetDescription>Enter your credentials to vote for your favourite</SheetDescription>
                </SheetHeader>
                
                <form id="form-rhf-demo" onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <FieldGroup>
                        <Controller
                            name="title"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="grid flex-1 auto-rows-min gap-6 px-4">
                                    <div className="grid gap-3">
                                        <FieldLabel>
                                            Username
                                        </FieldLabel>
                                    </div>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your username"
                                        autoComplete="username"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="description"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="grid flex-1 auto-rows-min gap-6 px-4">
                                    <FieldLabel>
                                        Password
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        type="password"
                                        placeholder="Enter your password"
                                        aria-invalid={fieldState.invalid}
                                        autoComplete="current-password"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                    
                    <div className="flex gap-2 mt-6 mx-auto justify-center">
                        <Button type="button" variant="outline" onClick={() => reset()}>
                            Reset
                        </Button>
                        <Button type="submit">
                            Sign In
                        </Button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    )
}