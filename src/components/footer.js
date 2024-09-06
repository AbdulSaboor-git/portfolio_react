import { FaCopyright, FaRegCopyright } from 'react-icons/fa';

export default function Footer({ footerLinks, user }) {
  const userName = user.firstName + ' ' + user.lastName;
  const year = new Date().getFullYear().toString();
  return (
    <div
      className="flex flex-col  border-t"
      style={{ boxShadow: '0 2px 13px 0px #fafa3b' }}
    >
      <div className="flex  gap-20 p-7 justify-evenly items-center px-10">
        <div className="text-xl font-extrabold text-[#e5ee57]">{userName}</div>
        <div className="flex flex-col items-start gap-2">
          <div className="font-bold text-[#7cdf63]">Follow Us</div>
          <div className="flex flex-col gap-0.5">
            {footerLinks.map((l, i) => (
              <a
                href={l.link}
                target="_blank"
                className="flex gap-2 items-center text-sm pl-5"
              >
                {l.icon}
                {l.type}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-1 items-center justify-center text-[#ffffffde] w-full border-t border-[#ffffff6d] text-xs p-3 font-light">
        <FaRegCopyright className="mb-[1.8px]" /> {year}. All Rights Reserved
      </div>
    </div>
  );
}
