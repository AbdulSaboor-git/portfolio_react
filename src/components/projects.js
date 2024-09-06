import React, { useState } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';

export default function Projects({ projects }) {
  // Track the seeMore state for each project
  const [seeMore, setSeeMore] = useState(Array(projects.length).fill(false));

  function handleSeeMoreClick(index) {
    const updatedSeeMore = [...seeMore];
    updatedSeeMore[index] = true;
    setSeeMore(updatedSeeMore);
  }

  function handleSeeLessClick(index) {
    const updatedSeeMore = [...seeMore];
    updatedSeeMore[index] = false;
    setSeeMore(updatedSeeMore);
  }

  return (
    <div className="flex flex-col min-h-screen gap-8 p-7 justify-start items-center">
      <div
        className="w-full font-extrabold tracking-wider text-3xl border border-white rounded-full text-center px-6 py-2"
        style={{ boxShadow: '0 0 10px #fafa3b' }}
      >
        PROJECTS
      </div>
      <div className="flex flex-col gap-3 px-10 tracking-wide items-center justify-center text-center">
        <div className="text-sm font-light max-w-[840px] ">
          Check out some of my projects
        </div>
      </div>
      <div
        className="grid gap-8 w-full"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        }}
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            className="border flex flex-col gap-3 border-[#fafa3b30] shadow-lg shadow-[#fafa3b4e] rounded-2xl cursor-pointer hover:scale-[1.03]"
          >
            <div
              className="relative flex flex-col justify-end p-4 h-[250px] rounded-2xl"
              style={{
                backgroundImage: `url(${proj.pic})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className=" absolute flex gap-1.5 z-10 top-0 right-0 mr-3">
                {proj.sourceCode && (
                  <a href={proj.sourceCode} target="_blank">
                    <button className=" flex items-center gap-1 text-[10px] bg-[#0000007a] pt-1 py-1.5 px-2 rounded-b-lg hover:text-[#a1ff6b]">
                      Source Code <BsCodeSlash />
                    </button>
                  </a>
                )}
                {proj.preview && (
                  <a href={proj.preview} target="_blank">
                    <button className=" flex items-center gap-1 text-[10px] bg-[#0000007a] pt-1 py-1.5 px-2 rounded-b-lg hover:text-[#a1ff6b]">
                      Preview <FaEye />
                    </button>
                  </a>
                )}
              </div>
              <div className=" absolute h-full w-full bottom-0 left-0 rounded-2xl bg-gradient-to-b from-transparent to-[#000000]  z-0"></div>
              <h1 className="font-bold text-[#eefa4c] z-10 ">{proj.name}</h1>
              <div className="z-10 text-xs">
                <span>{proj.shortDesc}</span>
                {!seeMore[i] && proj.extendedDesc && (
                  <span
                    className="text-[#f3fa96]"
                    onClick={() => handleSeeMoreClick(i)}
                  >
                    ...See More{' '}
                  </span>
                )}
                {seeMore[i] && proj.extendedDesc && (
                  <span>
                    {proj.extendedDesc}{' '}
                    <span
                      className="text-[#f3fa96]"
                      onClick={() => handleSeeLessClick(i)}
                    >
                      See Less
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
