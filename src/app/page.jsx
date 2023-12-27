import ChatContainer from '@/components/Chats/chat-container';
import ChatSideBar from '@/components/Chats/chat-sidebar';
import SidebarHeader from '@/components/Chats/sidear-header';
import ChatItem from '@/components/Chats/chat-item';
import Divider from '@/components/divider';
import ChatMsg from '@/components/Chats/chat-msg';
import Image from 'next/image';
import SendIcon from '@/svgs/send-icon';

export default function Home() {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <ChatContainer>
        <ChatSideBar>
          <SidebarHeader />
          <Divider />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </ChatSideBar>

        <div className='w-3/4 h-full px-[20px] py-[30px] relative'>
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

          </div >

          <Divider />

          <ChatMsg />
          <ChatMsg type='sender' />
          <ChatMsg />
          <ChatMsg type='sender' />
          <div className='w-full flex absolute bottom-5 z-10 items-center'>
            <input
              type="text"
              placeholder='Type Something...'
              className='w-[90%] h-[45px] border-[1px] border-[#c3c3c3] rounded-full mr-[10px] px-[12px] text-[16px] text-black' />
            <SendIcon />
          </div>
        </div>
      </ChatContainer>
    </div>
  );
}
