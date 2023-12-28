'use client';
import { getCurrentUser } from '@/firebase/auth';
import { set } from 'firebase/database';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SidebarHeader = () => {
    const [user, setUser] = useState();

    const getUserData = async () => {
        getCurrentUser().then((resp) => {
            setUser(resp);
        });
    };

    useEffect(() => {
        getUserData()
    }, []);


    return (
        <div className="w-full flex items-center">
            <Image
                className="object-cover rounded-full"
                src={user?.photoURL || ''}
                // src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                width={45}
                height={45}
            />
            <div className="flex flex-col ml-[10px]">
                <p className="text-primary text-[15px] font-bold">
                    {user?.displayName}
                </p>
                <p className="text-green-500 text-[10px] ">Online</p>
            </div>
        </div>
    );
};

export default SidebarHeader;