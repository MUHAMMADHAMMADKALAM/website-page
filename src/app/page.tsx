import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex " >

      <div className="flex-1 mt-28  ml-32">

        <h1 className="text-7xl font-bold text-yellow-600">FURNITURE</h1>

        <h2 className="text-2xl font-semibold mt-2 mb-6 text-yellow-600 tracking-[.35em]">Landing Page</h2>

        <p className="tracking-wider text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Autem quae cum, vel velit doloribus eligendi fugiat saepe
          eius enim, neque facere a numquam distinctio praesentium
          laboriosam magnam maxime dignissimos reprehenderit.</p>

        <div className="mt-8">
          <div className="flex">
            <Image className="" width={40} height={40} src="/firsticon.png" alt="image" />
            <a href="https://milestone2-seven.vercel.app/" target="blank" className="mt-1 ml-1 underline underline-offset-2">https://sheikh-hammads-projects/milestone_2</a>
          </div>

          <div className="flex">
            <Image className="my-1" width={40} height={40} src="/secondicon.png" alt="image" />
            <p className="mt-2 ml-2 underline underline-offset-2">sheikhhammad123</p>

          </div>
          <div className="flex">
            <Image className="my-1" width={40} height={40} src="/thirdicon.png" alt="image" />
            <p className="mt-2 ml-2 underline underline-offset-2 ">/sheikhHammad13 </p>
          </div>

        </div>
      </div>

      <div className="flex text-right justify-between ">
        <Image width={850} height={1250} className="" src="/Group 111.png" alt="image" />

      </div>

    </main>
  );
}