import React from 'react';

export default function Skills({ skills }) {
  return (
    <div className="flex flex-col min-h-screen gap-8 p-7 justify-start items-center">
      <div
        className="w-full font-extrabold tracking-wider text-3xl border border-white rounded-full text-center px-6 py-2"
        style={{ boxShadow: '0 0 10px #fafa3b' }}
      >
        SKILLS
      </div>
      <div className="flex flex-col gap-3 px-10 tracking-wide items-center justify-center text-center">
        <div className="text-sm font-light max-w-[840px] ">
          I'm experienced in a variety of programming languages and frameworks.
          Here are some of my top skills.
        </div>
      </div>
      <div
        className="grid gap-8 w-full"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="border flex flex-col gap-4 border-[#fafa3b30]  pt-8  pb-10 px-14 shadow-lg shadow-[#fafa3b4e] rounded-xl"
          >
            <h1 className="text-lg font-bold text-[#fdfd7b] text-center">
              {skill.type}
            </h1>
            <div className="flex flex-col gap-[3px] text-sm">
              {skill.content.map((cont) => (
                <div key={cont.name} className="flex items-center gap-3">
                  <div>{cont.icon}</div>
                  <div>{cont.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
