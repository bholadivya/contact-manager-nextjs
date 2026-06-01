import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-10 text-center">
      {/* HERO CONTENT */}
      <div className="max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 whitespace-nowrap">
          Welcome to <span className="text-blue-600">Contact Manager </span>
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-600 leading-relaxed">
          Manage your contacts beautifully, securely and efficiently.
        </p>
      </div>
      {/* HERO IMAGE */}
      <div className="mt-6">
        <Image
          src="/Contact.png"
          alt="Contact Manager"
          width={450}
          height={450}
          priority
          className=" w-full max-w-[500px] h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* FOOTER TEXT */}
      <p className="mt-6 text-base md:text-lg text-gray-500">
        Start managing your contacts today!
      </p>
    </section>
  );
}
