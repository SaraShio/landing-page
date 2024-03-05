import Image from "next/image";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <header className="header_container">
        <div className="flex justify-center">
          <Image src="/images/green_logo.svg" alt="Green Logo" width={400} height={400} />
        </div>
      </header>
    </main>
  );
}
