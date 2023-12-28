'use client';
import ChatContainer from "@/components/Chats/chat-container";
import Input from "@/components/form/input";
import Button from "@/components/button";
import Link from "next/link";
import React from "react";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from "@/firebase/auth";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Email format must be correct.')
        .required('Email is required.'),
    password: Yup.string()
        .matches(
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{5,}$/,
            'Password must contain 1 number 1 Captial latter one small latter and minimum length should be 5.'
        )
        .required('Password is required.'),
});

const Login = () => {

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });

    // const router = useRouter();
    const submitLogin = (values) => {
        login(values.email, values.password).then(() => {
            router.replace('/');
        });
    };

    return <div className="flex w-full h-[100vh] justify-center items-center bg-[#e6e6e6] relative">
        <div className="w-[44.3%] bg-primary h-full" />
        <div className="w-[60%] h-full" />
        <ChatContainer className="w-[75%] h-[75%] flex absolute shadow-lg">
            <div className="w-[40%] bg-primary flex flex-col items-center justify-center">
                <h1 className="text-[40px] font-bold text-secondary">
                    Welcome to FastChat
                </h1>
                <p className="text-[20px] font-medium text-secondary">
                    The real time quick chat app
                </p>
            </div>
            <div className="w-[60%] h-full flex flex-col items-center justify-center">
                <h6 className="text-primary text-[26px] font-medium mb-[40px]">
                    Login
                </h6>
                <form
                    className="w-full flex flex-col items-center"
                    onSubmit={handleSubmit(submitLogin)}                >
                    <Input
                        register={register}
                        name="email"
                        placeholder="Enter your email"
                        error={errors.email?.message}
                        className="mb-[20px]"
                    />

                    <Input
                        register={register}
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                        error={errors.password?.message}
                        className="mb-[30px]"
                    />

                    <Button type="submit">Login</Button>
                </form>
                <div className="flex items-center mt-[20px]">
                    <p className="text-gray-500 mr-[10px]">Don't have an account?</p>
                    <Link href="/signup" className="text-primary text-[16px]">
                        Signup
                    </Link>
                </div>
            </div>
        </ChatContainer>
    </div>
}

export default Login;