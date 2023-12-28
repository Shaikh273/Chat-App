'use client'
import ChatContainer from '@/components/Chats/chat-container';
import ChatSideBar from '@/components/Chats/chat-sidebar';
import SidebarHeader from '@/components/Chats/sidear-header';
import ChatItem from '@/components/Chats/chat-item';
import Divider from '@/components/divider';
import ChatMsg from '@/components/Chats/chat-msg';
import Image from 'next/image';
import SendIcon from '@/svgs/send-icon';
import { getCurrentUser, logout } from '@/firebase/auth';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { createMessage, createUserChat, getAllChats, getAllUsers } from '@/firebase/database';
import { uuidv4 } from '@firebase/util';
import { useEffect, useState } from 'react';

export default function Home() {

  const router = useRouter();
  // const user = getCurrentUser();
  const [users, setUsers] = useState();
  const [user, setUser] = useState();
  const [chats, setUserChats] = useState();

  const getUserData = () => {
    getCurrentUser().then(resp => {
      setUser(resp)
    })
  }

  const getAllUsersData = () => {
    getAllUsers().then(resp => {
      setUsers(resp)
    })
  }
  const getAllUserChats = () => {
    getAllChats().then(resp => {
      setUserChats(resp)
    })
  }

  const handleLogout = () => {
    logout().then(() => {
      cookies.remove('access_token');
      router.replace('/login');
    });
  };

  const handleCreateChat = (oid, data) => {
    const date = Date.now();
    const mid = uuidv4();
    const messageData = {
      message: 'Hi!',
      sendBy: user.uid,
      sentAt: date,
      isSeen: false,
    }
    createUserChat(oid, data);
    createUserChat(oid, '', true);
    createMessage(`${user.uid}${oid}`, messageData, mid);
    createMessage(`${oid}${user.uid}`, messageData, mid);
  }

  useEffect(() => {
    getUserData();
    getAllUserChats();
    getAllUsersData();
  }, [])

  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <ChatContainer>
        <ChatSideBar>
          <SidebarHeader />
          <Divider />
          {chats ? (
            chats?.map(([key, data]) => (
              <ChatItem
                key={key}
                data={data}
                onClick={() => setActiveChat({ ...data, uid: key })}
              />
            ))
          ) : (
            <div className="flex w-full h-full items-center justify-center">
              <p className="text-[12px] text-gray-300">No Chats Found</p>
            </div>
          )}
        </ChatSideBar>

        <div className='w-2/4 h-full px-[20px] py-[30px]'>
          {chats ? (<>
            <div className='w-full flex items-center mb-[20px]'>
              <Image
                className='object-cover rounded-full'
                src='https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                // src={data.avatar}
                alt='Avatar'
                width={45}
                height={45}
              />

              <p className='text-primary text-[15px] font-bold mx-[10px]'>
                {/* {data.name} */} Alan Wake
              </p>
              {/* {msg && (
                    <p className='text-[12px] text-[#959595]'>
                        Lorem ipsum dolor sit amet, consectetur.
                    </p>
                )} */}
              <div className='h-[15px] w-[15px] rounded-full bg-green-500' />
              <p className="text-[14px] cursor-pointer text-primary ml-[20px] hover:text-secondary"
                onClick={handleLogout}>
                Logout
              </p>
            </div>

            <Divider />

            <div className='w-full h-[80%] overflow-y-scroll'>

              <ChatMsg type='sender' />
              <ChatMsg />
              <ChatMsg type='sender' />


            </div>
            <div className='w-full flex items-center'>
              <input
                type="text"
                placeholder='Type Something...'
                className='w-[90%] h-[45px] border-[1px] border-[#c3c3c3] rounded-full mr-[10px] px-[12px] text-[16px] text-black' />
              <SendIcon />
            </div>
          </>
          ) : <div className='flex w-full h-full items-center justify-center'>
            <p className='text-[12px] text-gray-300'>No Chats Found</p>
          </div>
          }
        </div>

        <ChatSideBar>
          <h1 className='text-primary text-[16px] font-semibold my-[20px]'>
            Other Users
          </h1>
          <Divider />
          {Object?.entries(users || {}).map(([key, data]) => (
            < ChatItem
              key={key}
              data={data}
              onClick={() => handleCreateChat(key, data)} />
          ))}
        </ChatSideBar>
      </ChatContainer >
    </div >
  );
}
