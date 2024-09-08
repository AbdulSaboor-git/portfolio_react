import React, { useRef, useEffect } from 'react';

export default function Skills({ skills }) {
  function moveSpotlight(spotlight, x, y) {
    spotlight.style.transform = `translate(${x}px, ${y}px)`;
    spotlight.style.opacity = 1;
    spotlight.style.transition =
      'transform 0.1s ease-out, opacity 0.5s ease-out';
  }

  const handleMouseMove = (
    e,
    blockRef,
    block2Ref,
    spotlightRef,
    spotlight2Ref,
  ) => {
    const blockRect = blockRef.getBoundingClientRect();
    const { clientX: x, clientY: y } = e;

    // Calculate the position relative to the block's top-left corner
    const blockX = x - blockRect.left;
    const blockY = y - blockRect.top;

    // Check if spotlightRefs are available
    if (spotlightRef.current && spotlight2Ref.current) {
      // Center the spotlight on the mouse cursor
      const spotlightSize = spotlightRef.current.offsetWidth;
      const spotlightX = blockX - spotlightSize / 2;
      const spotlightY = blockY - spotlightSize / 2;

      // Move the spotlight to the new position
      moveSpotlight(spotlightRef.current, spotlightX, spotlightY);
      moveSpotlight(spotlight2Ref.current, spotlightX, spotlightY);
    }
  };

  const handleMouseLeave = (spotlightRef, spotlight2Ref) => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = 0;
      spotlightRef.current.style.transition = 'opacity 0.5s ease-out';
    }
    if (spotlight2Ref.current) {
      spotlight2Ref.current.style.opacity = 0;
      spotlight2Ref.current.style.transition = 'opacity 0.5s ease-out';
    }
  };

  return (
    <div className="flex flex-col min-h-screen gap-8 p-7 justify-start items-center">
      <div
        className="w-full font-extrabold tracking-wider text-3xl border border-white rounded-full text-center px-6 py-2"
        style={{ boxShadow: '0 0 10px #fafa3b' }}
      >
        SKILLS
      </div>
      <div className="flex flex-col gap-3 px-10 tracking-wide items-center justify-center text-center">
        <div className="text-sm font-light max-w-[840px]">
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
        {skills.map((skill, i) => {
          const blockRef = useRef();
          const block2Ref = useRef();
          const spotlightRef = useRef();
          const spotlight2Ref = useRef();

          useEffect(() => {
            const blockElement = blockRef.current;

            if (!blockElement) return;

            const handleMouseMoveEvent = (e) =>
              handleMouseMove(
                e,
                blockRef.current,
                block2Ref.current,
                spotlightRef,
                spotlight2Ref,
              );
            const handleMouseLeaveEvent = () =>
              handleMouseLeave(spotlightRef, spotlight2Ref);

            // Add event listeners directly to blockRef
            blockElement.addEventListener('mousemove', handleMouseMoveEvent);
            blockElement.addEventListener('mouseleave', handleMouseLeaveEvent);

            return () => {
              blockElement.removeEventListener(
                'mousemove',
                handleMouseMoveEvent,
              );
              blockElement.removeEventListener(
                'mouseleave',
                handleMouseLeaveEvent,
              );
            };
          }, []);

          return (
            <div
              key={i}
              className="w-[100%] rounded-xl"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <div
                ref={blockRef}
                className="w-full relative z-0 h-full p-[1px] overflow-hidden rounded-xl bg-[#ffffff00]"
              >
                <div
                  ref={block2Ref}
                  className=" flex h-full z-30 relative bg-[#09091c] rounded-xl overflow-hidden flex-col gap-4 pt-8 pb-10 px-14"
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
                  <div
                    ref={spotlight2Ref}
                    className="absolute top-0 left-0 w-[80px] h-[80px] opacity-0 filter blur-[60px] rounded-full pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[3]"
                    style={{
                      background:
                        'radial-gradient(circle, #fffccaaf 50%, #00000000 90%)',
                    }}
                  ></div>
                </div>
                <div
                  ref={spotlightRef}
                  className="absolute top-0 left-0 w-[130px] h-[130px] opacity-0 filter blur-[50px] rounded-[30%] pointer-events-none translate-x-[50%] translate-y-[50%] z-0"
                  style={{
                    background: 'radial-gradient(circle, #fff 50%, #fff 50%)',
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
