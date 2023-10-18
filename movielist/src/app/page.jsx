import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import ListMovie from "./sections/ListMovie";

export default function Home() {
  return (
    <>
      <header className="py-2 shadow-md shadow-gray-600">
        <nav className="flex container mx-auto justify-between items-center">
          <Image src={logo} alt="logo" width="100" height="100" />
          <div>
            <input type="text" placeholder="Searching" />
          </div>
          <div>
            <Link href="/signin">Sign In</Link>
          </div>
        </nav>
      </header>
      <main>
        <ListMovie />
      </main>
    </>
  );
}
