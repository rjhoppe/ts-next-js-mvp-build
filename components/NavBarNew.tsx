// import { NAV_LINKS } from "@/constants"
import React from "react"
import { NEW_NAV_DASH_LINKS } from "@/constants"
import { NEW_NAV_DASH_LINKS2 } from "@/constants"
import { FaGear } from "react-icons/fa6";

import { NAV_MES_LINKS } from "@/constants"
import { NAV_SET_LINKS } from "@/constants"
import { NAV_REDIRECT_LINKS } from "@/constants"
import Link from "next/link"
import { Button } from "@nextui-org/button"
import { Divider } from "@nextui-org/divider"
import { IoMdChatbubbles } from "react-icons/io";
import type { IconType } from 'react-icons';
import { ReactNode } from "react"
import { Chela_One } from "next/font/google"

const NewNavbar = () => {
  return (
    <nav className="border-2 border-red-500 flex flex-col h-full max-w-[25%] max-h-[100%]">
      <ul className="flex flex-col h-full gap-5">
        <Button
          href='/'
          key='My90'
          className='text-xl text-gray-50 flexCenter cursor-pointer pb-1.5 
          transition-all hover:font-bold bg-transparent mt-5'
        >My90
        </Button>
        <Divider className='my-2'/>
        {NEW_NAV_DASH_LINKS.map((link) => (
          <NavBlock title={link.title} href={link.href} label={link.label} key={link.key}>{React.createElement(link.icon)}</NavBlock>
        ))}
        <Divider className='my-2'/>
        <div className="flex flex-col gap-5">
          <Button
            href='/'
            key='settings'
            className=' text-gray-50 flexCenter cursor-pointer pb-1.5 
            transition-all hover:font-bold bg-transparent mt-5'
            >
              <FaGear />
              Settings
          </Button>
        </div>
        <Divider className='my-2'/>
        {NEW_NAV_DASH_LINKS2.map((link) => (
          <NavBlock href={link.href} label={link.label} key={link.key}>{React.createElement(link.icon)}</NavBlock>
        ))}
      </ul>
    </nav>
  )
}

type NavBlockProps = {
  title?: string;
  label: string;
  key: string;
  href: string;
  children?: React.ReactNode;
}

const NavBlock = ({ title, label, key, href, children } : NavBlockProps) => {
  return (
    <div className="flex flex-col gap-5">
      <Button
        href={href} 
        key={key}
        className='text-gray-50 flexCenter cursor-pointer pb-1.5 
        transition-all hover:font-bold bg-transparent'
        >
        {children}
        {label}
      </Button>
    </div>
  )
}

export default NewNavbar