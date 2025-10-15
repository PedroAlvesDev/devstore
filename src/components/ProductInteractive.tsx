"use client";

import Image from "next/image";
import ButtonAdd from "./buttonAdd";


export default function ProductInteractive() {
    const handleAddToCart = (): void => {
        alert("Clicou!!");
    };

    return (
        <div className="relative z-0 col-span-3 row-span-3 rounded-lg bg-zinc-900  flex justify-center items-end">
            <Image
                src="/camiseta-dowhile.png"
                width={860}
                height={860}
                quality={100}
                alt="Camiseta Dowhile"
                className="absolute z-10 object-contain"
            />
            <ButtonAdd onClick={handleAddToCart}
                className="relative bottom-20 left-10 z-20">
                <div className="flex items-center border-2 text-sm font-semibold text-zinc-500 rounded-full gap-2 p-0.5 bg-[#0a0a0b]">
                    <span className="truncate max-w-[140px] text-zinc-100">Camiseta Dowhile</span>
                    <span className="font-bold bg-violet-500 text-zinc-100 rounded-full shadow-lg px-4 py-2 gap-2">R$129</span>
                </div>
            </ButtonAdd>
        </div>
    );
}