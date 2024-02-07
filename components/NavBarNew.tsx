// import { NAV_LINKS } from "@/constants"
import React from "react"
import { NEW_NAV_DASH_LINKS } from "@/constants"
import { NEW_NAV_DASH_LINKS2 } from "@/constants"
import { FaGear } from "react-icons/fa6";
import Link from "next/link"
import { Button } from "@nextui-org/button"
import { Divider } from "@nextui-org/divider"
import { Image } from "@nextui-org/react"
import NextImage from "next/image";
// import AxonLogo from '*.png'

const NewNavbar = () => {
  return (
    <nav className="flex flex-col w-48 md:w-56 lg:w-56 h-dvh bg-stone-800">
      <ul className="flex flex-col gap-5 p-5">
        <div>
          <Button
            as={Link}
            href='/'
            key='My90'
            className='text-xl text-gray-50 flexCenter cursor-pointer pb-1.5 
            transition-all hover:font-bold bg-transparent mt-5'
            ><Image
                as={NextImage}
                src="/axon-logo.png"
                alt="axon logo"
                width={25}
                height={25}
                className=""
              />My90
          </Button>
        </div>
        <Divider className='-my-2 bg-white'/>
        {NEW_NAV_DASH_LINKS.map((link) => (
          <NavBlock title={link.title} href={link.href} label={link.label} key={link.key}>{React.createElement(link.icon)}</NavBlock>
        ))}
        <Divider className='-my-2 bg-white'/>
        <div className="flex flex-col gap-5 -my-3">
          <Button
            as={Link}
            href='/settings'
            key='settings'
            className=' text-gray-50 flexCenter cursor-pointer pb-1.5 
            transition-all bg-transparent mt-5'
            >
              <FaGear />
              Settings
          </Button>
        </div>
        <Divider className='-my-1 bg-white'/>
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
    <div className="flex flex-col">
      <div className="flex flex-col gap-3">
        <Button
          as={Link}
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