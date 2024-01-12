// import { NAV_LINKS } from "@/constants"
import React from "react"
import { NEW_NAV_DASH_LINKS } from "@/constants"
import { NEW_NAV_DASH_LINKS2 } from "@/constants"
import { FaGear } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

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
    <nav className="border-2 border-red-500 flex flex-col w-48 md:w-56 lg:w-56 h-dvh">
      <ul className="flex flex-col h-full gap-5 p-5">
        <Button
          as={Link}
          href='/'
          key='My90'
          className='text-xl text-gray-50 flexCenter cursor-pointer pb-1.5 
          transition-all hover:font-bold bg-transparent mt-5'
        >My90
        </Button>
        <Divider className='-my-2'/>
        {NEW_NAV_DASH_LINKS.map((link) => (
          <NavBlock title={link.title} href={link.href} label={link.label} key={link.key}>{React.createElement(link.icon)}</NavBlock>
        ))}
        <Divider className='-my-2'/>
        <div className="flex flex-col gap-5 -my-3">
          <Button
            href='/'
            key='settings'
            className=' text-gray-50 flexCenter cursor-pointer pb-1.5 
            transition-all bg-transparent mt-5'
            >
              <FaGear />
              Settings
          </Button>
        </div>
        <Divider className='-my-1'/>
        {NEW_NAV_DASH_LINKS2.map((link) => (
          <NavBlock href={link.href} label={link.label} key={link.key}>{React.createElement(link.icon)}</NavBlock>
        ))}
      </ul>
      <div className="flex justify-center mb-3 gap-3">
        <FaUser />
        <p className="flex text-gray-50 -translate-y-0.5 cursor-pointer
        transition-all hover:font-bold bg-transparent"
        >Rick Hoppe</p>
      </div>
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
    <div className="flex flex-col">
      <div className="flex flex-col gap-3">
        <Button
          href={href} 
          key={key}
          className='text-gray-50 flexCenter cursor-pointer pb-1.5 
          transition-all bg-transparent'
          >
          {children}
          {label}
        </Button>
      </div>
    </div>
  )
}

export default NewNavbar