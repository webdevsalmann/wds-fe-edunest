"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "@/components/ui/button"
import ThemeToggleBtn from "@/components/ui/ThemeToggleBtn"
import { Ilogo } from '../svgs/svgs';
import { AlignRight, Blocks, X } from 'lucide-react';
import { useState } from 'react';
import { navigationLinks } from '@/lib/const';

export default function Header() {
  const path = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className='w-full bg-background'>
      <nav className="px-[5%] py-4 w-full grid grid-cols-2 justify-center items-center">

        <Link className="w-fit flex-center gap-2" href="/">
          <Blocks className='size-8 text-primary' />
          <div className="text-primary text-xl font-bold">EduNest</div>
        </Link>


        <div className="w-8 h-8 md:hidden justify-self-end"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div>

        <ul className={`link-box relative py-4 flex-center items-start flex-col gap-4 justify-self-start  md:justify-self-end md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'}`}>
          {navigationLinks.map(item => (
            <Link className={`${buttonVariants({ variant: item.buttonVariant, size: 'sm' })} ${path === item.path && "bg-accent"} capitalize text-muted-foreground`} href={item.path} key={item.title}>{item.title}</Link>
          ))}
          <ThemeToggleBtn />
        </ul>
      </nav>
    </header>
  )
}
