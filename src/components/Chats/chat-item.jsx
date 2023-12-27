import Image from 'next/image';
import React from 'react';

const ChatItem = ({ data, msg, onClick }) => {
    return (
        <div
            className="w-full flex items-center mb-[20px] cursor-pointer hover:bg-secondary hover:p-[10px]"
            onClick={onClick}
        >
            <Image
                className="object-cover rounded-full"
                src='https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                // src={data.avatar}
                alt="Avatar"
                width={45}
                height={45}
            />
            <div className="flex flex-col ml-[10px]">
                <p className="text-primary text-[15px] font-bold">
                    {/* {data.name} */} Alan Wake
                </p>
                {/* {msg && (
                    <p className="text-[12px] text-[#959595]">
                        Lorem ipsum dolor sit amet, consectetur.
                    </p>
                )} */}
                <p className="text-[12px] text-[#959595]">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
        </div>
    );
};

export default ChatItem;