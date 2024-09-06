import React, { use } from 'react';

export default function Main({ user }) {
  return (
    <div className="flex flex-col min-h-screen gap-8 px-7 justify-center items-center ">
      <div className="flex flex-row gap-16 justify-center items-center">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 font-extrabold text-[52px]  leading-none">
            <span>{user.firstName}</span>
            <span className="text-[#f1f151]">{user.lastName}</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <hr className="h-[0.2px] border-none bg-[#f1f15148] w-full" />
            <div className="font-extralight text-lg tracking-wider text-[#cde0ee]">
              {user.profession}
            </div>
            <hr className="h-[0.2px] border-none bg-[#f1f15148] w-full" />
          </div>
        </div>
        <img src={user.img} className="w-[320px]" alt="profile picture" />
      </div>
      <div className="flex flex-col gap-3 tracking-wide items-center justify-center text-center">
        <div className="font-bold ">About Me</div>
        <div className="text-sm font-light max-w-[840px] ">{user.aboutMe}</div>
      </div>
      <hr
        className="h-[0.7px] w-full max-w-[840px] border-none bg-[#f4f4ee]"
        style={{ boxShadow: '0 0 10px 1px #f1f151' }}
      />
    </div>
  );
}
