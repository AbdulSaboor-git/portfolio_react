import React from 'react';

export default function Header({ navBtns, handleButtonClick }) {
  return (
    <div
      className="flex flex-row text-[12.5px] z-20 bg-[#000013] sticky top-0 pt-3.5 pb-1 gap-1.5 justify-center items-center"
      style={{ boxShadow: '0 2px 15px 5px #000013' }}
    >
      {navBtns.map((btn, i) => (
        <button
          key={i}
          className={`py-[3px] px-4 border border-x-0 rounded-full ${
            btn.isActive
              ? 'border-[#ffffd8] text-[#ffff88]'
              : 'border-[#00000000] hover:border-[#fafa3b59]'
          }`}
          style={btn.isActive ? { boxShadow: '0 0 8px #fafa3b' } : {}}
          onClick={() => handleButtonClick(i)} // Set the button click handler
        >
          {btn.name}
        </button>
      ))}
    </div>
  );
}
