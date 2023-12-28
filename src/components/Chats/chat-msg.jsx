import Image from 'next/image';
import React from 'react';

const ChatMsg = ({ type = 'receiver', data }) => {
    const containerClasses = `${type === 'receiver' ? '' : 'flex-row-reverse'
        } flex items-end mb-[12px]`;

    const msgClasses = `max-w-[45%] text-[13px] px-[10px] py-[7px] rounded-xl ${type === 'receiver'
        ? 'text-black bg-secondary ml-[10px]'
        : 'text-white bg-primary mr-[10px]'
        }`;

    return (
        <div className={containerClasses}>
            <Image
                className="object-cover rounded-full"
                // src={data.sendBy.avatar}
                src='https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt="Avatar"
                width={25}
                height={25}
            />
            <p className={msgClasses}>
                {/* {data.message} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam quidem soluta,
            </p>
        </div>
    );
};

export default ChatMsg;