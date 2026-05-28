import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* HERO CONTENT */}
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
          Welcome to <span className="text-blue-600">Contact Manager </span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-600 leading-relaxed">
          Manage your contacts beautifully, securely and efficiently.
        </p>
      </div>
      {/* HERO IMAGE */}
      <div className="mt-14">
        <Image
          src="/Contact.png"
          alt="Contact Manager"
          width={700}
          height={700}
          priority
          className=" w-[340px] sm:w-[500px] md:w-[720px] h-auto drop-shadow-2xl"
        />
      </div>
      {/* FOOTER TEXT */}
      <p className="mt-10 text-base md:text-lg text-gray-500">
        Start managing your contacts today!
      </p>
    </section>
  );
}
