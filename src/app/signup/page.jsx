import ChatContainer from "@/components/Chats/chat-container";
import Input from "@/components/form/input";
import Button from "@/components/button";
import React from "react";

const SignUp = () => {
    return <div className="flex w-full h-[100vh] justify-center items-center bg-[#e6e6e6] relative">
        <div className="w-[45.3%] bg-primary h-full" />
        <div className="w-[60%] h-full" />
        <ChatContainer className="w-[70%] h-[75%] flex absolute shadow-lg">
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
                    Sign Up
                </h6>
                <form
                    className="w-full flex flex-col items-center"
                    // onSubmit={handleSubmit(submitSignUp)}
                    onSubmit="#"
                >
                    <Input
                        // register={register}
                        name="fullName"
                        placeholder="Enter your full name"
                        className="mb-[20px]"
                    // error={errors.fullName?.message}
                    />
                    <Input
                        // register={register}
                        name="email"
                        placeholder="Enter your email"
                        // error={errors.email?.message}
                        className="mb-[20px]"
                    />
                    <Input
                        // register={register}
                        name="avatar"
                        placeholder="Enter your avatar URL"
                        // error={errors.email?.message}
                        className="mb-[20px]"
                    />
                    <Input
                        // register={register}
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                        // error={errors.password?.message}
                        className="mb-[30px]"
                    />
                    {/* <button className="w-[50%] h-[45px] bg-primary rounded-full text-white text-[16px] font-semibold">SignUp</button> */}
                    <Button type="submit">Sign up</Button>
                </form>
                {/* <div className="flex items-center mt-[20px]">
                    <p className="text-gray-500 mr-[10px]">Already have an account?</p>
                    <Link href="/login" className="text-primary text-[16px]">
                        Login
                    </Link>
                </div> */}
            </div>
        </ChatContainer>
    </div>
}

export default SignUp;