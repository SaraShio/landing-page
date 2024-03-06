import Image from "next/image";


export default function SubBanner() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Header />

      <Hero/>

      <div >
      <CardOne/>
      <CardTwo/>
      <CardThree/>
      </div>


      <Footer />
    </main>
  );
}
