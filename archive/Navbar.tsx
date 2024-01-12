// // import { NAV_LINKS } from "@/constants"
// import { NAV_DASH_LINKS } from "@/constants"
// import { NAV_MES_LINKS } from "@/constants"
// import { NAV_SET_LINKS } from "@/constants"
// import { NAV_REDIRECT_LINKS } from "@/constants"
// import Link from "next/link"
// import { Button } from "@nextui-org/button"
// import { Divider } from "@nextui-org/divider"
// import { IoMdChatbubbles } from "react-icons/io";

// const Navbar = () => {
//   return (
//     <nav className="border-2 border-red-500 flex flex-col h-full max-w-[25%] max-h-[100%]">
//       <ul className="flex flex-col h-full gap-5">
//         <Button
//           href='/'
//           key='My90'
//           className='text-xl text-gray-50 flexCenter cursor-pointer pb-1.5 
//           transition-all hover:font-bold bg-transparent mt-5'
//         >My90
//         </Button>
//         <Divider className='my-2'/>
//         <h3 className="flexLeft ml-5 text-xs">SURVEY DASHBOARD</h3>
//         {NAV_DASH_LINKS.map((link) => (
//           <Button
//             href={link.href} 
//             key={link.key} 
//             className='text-gray-50 flexCenter cursor-pointer pb-1.5 
//             transition-all hover:font-bold bg-transparent'
//           >
//               {<link.icon />}
//               {link.label}
//           </Button>
//         ))}
//         <h3 className="flexLeft ml-5 text-xs">MESSAGING</h3>
//         {NAV_MES_LINKS.map((link) => (
//           <Button
//             href={link.href} 
//             key={link.key} 
//             className='text-gray-50 flexCenter cursor-pointer pb-1.5 
//             transition-all hover:font-bold bg-transparent'
//           >
//               {link.label}
//           </Button>
//         ))}
//         {NAV_SET_LINKS.map((link) => (
//           <Button
//             href={link.href} 
//             key={link.key} 
//             className='text-gray-50 flexCenter cursor-pointer pb-1.5 
//             transition-all hover:font-bold bg-transparent'
//           >
//               {link.label}
//           </Button>
//         ))}
//         {NAV_REDIRECT_LINKS.map((link) => (
//           <Button
//             href={link.href} 
//             key={link.key} 
//             className='text-gray-50 flexCenter cursor-pointer pb-1.5 
//             transition-all hover:font-bold bg-transparent'
//           >
//               {link.label}
//           </Button>
//         ))}
//       </ul>
//     </nav>
//   )
// }

// export default Navbar