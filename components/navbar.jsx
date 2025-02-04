'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-50 text-black font-barlow fixed top-0 left-0 w-full z-50 flex flex-row px-56">
      <div className="container mx-auto pt-4 flex justify-start">
        <Link href="#top-section" className="hover:text-slate-600 link">OliB</Link>
      </div>

      <div className="container mx-auto py-4 flex justify-end">
        <ul className="flex space-x-6">
          <li className="px-4">
            <Link href="#portfolio-section" className="hover:text-slate-600 link">Portfolio</Link>
          </li>
          <li className="px-4">
            <Link href="#contact-section" className="hover:text-slate-600 link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;