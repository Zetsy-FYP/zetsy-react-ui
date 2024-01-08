"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <div className=" w-full min-h-screen h-full flex items-center justify-center">
      <div className=" max-w-xl w-full shadow-card px-5 py-5 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1 className=" text-xl">Zetsy.</h1>
          <Image
            src={
              "https://images.unsplash.com/photo-1682687980918-3c2149a8f110?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={50}
            height={50}
            className=" rounded"
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <Image
            src={
              "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={200}
            width={200}
            className="object-cover rounded"
          />
          <h1>Create your first Store</h1>
          <button
            className=" bg-black text-white px-2 rounded"
            onClick={() => router.push("/store-create")}
          >
            create your store
          </button>
        </div>
      </div>
    </div>
  );
}
