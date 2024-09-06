export default function Contact({ contacts }) {
  return (
    <div className="flex flex-col min-h-screen gap-8 p-7 justify-start items-center">
      <div
        className="w-full font-extrabold tracking-wider text-3xl border border-white rounded-full text-center px-6 py-2"
        style={{ boxShadow: '0 0 10px #fafa3b' }}
      >
        CONTACT
      </div>
      <div className="flex flex-col gap-3 px-10 tracking-wide items-center justify-center text-center">
        <div className="text-sm font-light max-w-[840px] ">
          Let&apos;s connect
        </div>
      </div>
      <div className="flex flex-wrap gap-8 w-full items-center justify-center">
        {contacts.map((contact, i) => (
          <a href={contact.link} target="_blank">
            <div
              key={i}
              className="border size-[150px] flex items-center  justify-center text-center flex-col gap-3 border-[#fafa3b30] shadow-md shadow-[#fafa3b4e] rounded-2xl cursor-pointer hover:scale-[1.03] py-6 px-4"
            >
              <div className="text-4xl">{contact.icon}</div>

              <div>{contact.type}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
