import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center ">
      <Link href={"/drag"}>drag</Link>
      <Link href={"/enter"}>enter</Link>
      <Link href={"/keyframes"}>keyframes</Link>
    </div>
  );
}
