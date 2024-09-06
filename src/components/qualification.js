import React from 'react';

export default function Qualification({ education, experience }) {
  function checkI(i) {
    return i % 2 !== 0;
  }

  return (
    <div className="flex flex-col min-h-screen gap-8 p-7 justify-start items-center">
      <div
        className="w-full font-extrabold tracking-wider text-3xl border border-white rounded-full text-center px-6 py-2"
        style={{ boxShadow: '0 0 10px #fafa3b' }}
      >
        QUALIFICATION
      </div>
      <div className="flex flex-col text-center gap-8">
        <div className="font-bold tracking-wide text-[#ffff88] text-xl">
          Education
        </div>
        <div className="relative w-full">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-35px)] top-2.5 w-[2px] bg-white"></div>
          {education.map((ed, i) => (
            <div
              key={i}
              className={`relative flex mb-8 flex-col gap-[2px] px-8 items-center ${checkI(i) ? ' text-left pl-[19rem]' : 'text-right  pr-[21rem]'}`}
            >
              <div>
                <div className={`text-white font-bold text-lg mt-1`}>
                  {ed.degree}
                </div>
                <div className="text-blue-300 text-sm">{ed.institute}</div>
                {ed.gpa && (
                  <div className="text-gray-400 text-sm">GPA: {ed.gpa}</div>
                )}
                <div className="text-gray-400 text-sm">
                  {ed.from} {' - '} {ed.to}
                </div>
              </div>
              <div
                className="absolute top-2  bg-white rounded-full w-4 h-4"
                style={{
                  left: checkI(i) ? 'calc(50% - 7px)' : 'calc(50% - 7px)',
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-center gap-8">
        <div className="font-bold tracking-wide text-[#ffff88] text-xl">
          Experience
        </div>
        <div className="relative w-full">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-35px)] top-2.5 w-[2px] bg-white"></div>
          {experience.map((ed, i) => (
            <div
              key={i}
              className={`relative flex mb-8 flex-col gap-[2px] px-8 items-center ${checkI(i) ? ' text-left pl-[15rem]' : 'text-right  pr-[19rem]'}`}
            >
              <div>
                <div className={`text-white font-bold text-lg`}>{ed.type}</div>
                <div className="text-blue-400 text-sm">{ed.company}</div>
                <div className="text-gray-400 text-sm">
                  {ed.from} {' - '} {ed.to}
                </div>
              </div>
              <div
                className="absolute top-2 transform  bg-white rounded-full w-4 h-4"
                style={{
                  left: checkI(i) ? 'calc(50% - 7px)' : 'calc(50% - 7px)',
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
