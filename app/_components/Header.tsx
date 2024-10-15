'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* <Link href="/"> */}
          {/* <Image src="/logo.png" alt="SW융합대학 학술제" width={40} height={40} /> */}
        {/* </Link> */}
        <h1 className="text-xl font-bold">SW융합대학 학술제</h1>
        <button aria-label="Search">
          <Image src="/search-icon.svg" alt="Search" width={24} height={24} />
        </button>
      </div>
    </header>
  );
}