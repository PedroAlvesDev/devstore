import Link from "next/link";
import Image from "next/image";

export default async function Home() {

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">

      <Link href="/" className=" relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          src="/moletom-never-stop-learning.png"
          width={860}
          height={860}
          quality={100}
          alt="Moletom Never Stop Learning"
        />
        <div className="absolute  bottom-3/12 right-20 flex items-center border-2 text-sm font-semibold text-zinc-500 rounded-full gap-2 p-0.5 bg-[#0a0a0b]">
          <span className="truncate max-w-[140px] text-zinc-100">Moletom Never Stop Learning</span>
          <span className="font-semibold bg-violet-500 text-zinc-100 rounded-full shadow-lg px-4 py-2 gap-2">R$129</span>
        </div>
      </Link>

      <Link href="/" className="relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          src="/moletom-ai-side.png"
          width={860}
          height={860}
          quality={100}
          alt="Moletom Ai Side"
        />
        <div className="absolute  bottom-3/12 right-20 flex items-center border-2 text-sm font-semibold text-zinc-500 rounded-full gap-2 p-0.5 bg-[#0a0a0b]">
          <span className="truncate max-w-[140px] text-zinc-100">Moletom Ai Side</span>
          <span className=" bg-violet-500 text-zinc-100 rounded-full shadow-lg px-4 py-2 gap-2">R$129</span>
        </div>
      </Link>

      <Link href="/" className="relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          src="/camiseta-dowhile.png"
          width={860}
          height={860}
          quality={100}
          alt="Camiseta Dowhile"
        />

        <div className="absolute  bottom-3/12 right-20 flex items-center border-2 text-sm font-semibold text-zinc-500 rounded-full gap-2 p-0.5 bg-[#0a0a0b]">
          <span className="truncate max-w-[140px] text-zinc-100">Camiseta Dowhile</span>
          <span className="font-bold bg-violet-500 text-zinc-100 rounded-full shadow-lg px-4 py-2 gap-2">R$129</span>
        </div>
      </Link>

    </div>
  )
}