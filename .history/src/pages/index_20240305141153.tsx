import Image from "next/image";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <header className="header_container">
        <div className="logo_img">
          <Image src="/images/green_logo.svg" alt="VanPlan Logo" width={400} height={400} />
        </div>
        <button>Sign Up</button>
      </header>
    </main>
  );
}
