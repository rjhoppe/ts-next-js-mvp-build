import { SVGProps } from "react";
import { 
  IoMdChatboxes,
  IoMdPeople,
  IoMdBriefcase,
 } from "react-icons/io";

 import { 
  FaGear,
  FaShield, 
} from "react-icons/fa6";

 import { FaSignOutAlt } from "react-icons/fa";
 import { MdSignpost } from "react-icons/md";
 import { BiSolidMessageDetail } from "react-icons/bi";


// Nav Component

// export const NAV_LINKS = [
//   { href: '/', icon: '', key: 'post-contact', label: 'Post-Contact' },
//   { href: '/', icon: '', key: 'community', label: 'Community' },
//   { href: '/', icon: '', key: 'employee', label: 'Employee' },
//   { href: '/', icon: '', key: 'automated-messaging', label: 'Automated Messaging' },
//   { href: '/', icon: '', key: 'victim-notifications', label: 'Victim Notifications' },
//   { href: '/', icon: '', key: 'settings', label: 'Settings' },
//   { href: '/', icon: '', key: 'evidence', label: 'Evidence.com' },
//   { href: '/', icon: '', key: 'sign-out', label: 'Sign Out' },
// ];

// export const NAV_APP_LINKS = [
//   {
//     title: 'Survey Dashboard',
//     links: [
//       { key: 'post-contact', label: 'Post-Contact' , href: '/', icon: '' },
//       { key: 'community', label: 'Community', href: '/', icon: '' },
//       { key: 'employee', label: 'Employee', href: '/', icon: '' },
//     ],
//   },
//   {
//     title: 'Messaging',
//     links: [
//       { key: 'automated-messaging', label: 'Automated Messaging', href: '/', icon: '' },
//       { key: 'victim-notifications', label: 'Victim Notifications', href: '/', icon: '' },
//     ],
//   },
// ];


// Constants for Navbar props
export const NEW_NAV_DASH_LINKS = [
  { href: '/', icon: IoMdChatboxes, key: 'post-contact', label: 'Post-Contact', title: 'Survey Dashboard' },
  { href: '/', icon: IoMdPeople, key: 'community', label: 'Community'},
  { href: '/', icon: IoMdBriefcase, key: 'employee', label: 'Employee'},
  { href: '/', icon: BiSolidMessageDetail, key: 'automated-messaging', label: 'Automated Messaging', title: 'Messaging'},
  { href: '/', icon: FaShield, key: 'victim-notification', label: 'Victim Notification'},
];

export const NEW_NAV_DASH_LINKS2 = [
  { href: '/', icon: MdSignpost, key: 'evidence.com', label: 'Evidence.com'},
  { href: '/', icon: FaSignOutAlt, key: 'sign-out', label: 'Sign Out'},
];



export const NAV_DASH_LINKS = [
  { href: '/', icon: '', key: 'post-contact', label: 'Post-Contact' },
  { href: '/', icon: '', key: 'community', label: 'Community' },
  { href: '/', icon: '', key: 'employee', label: 'Employee' },
];

export const NAV_MES_LINKS = [
  { href: '/', icon: '', key: 'automated-messaging', label: 'Automated Messaging' },
  { href: '/', icon: '', key: 'victim-notifications', label: 'Victim Notifications' },
];

export const NAV_SET_LINKS = [
  { href: '/', icon: '', key: 'settings', label: 'Settings' },
];

export const NAV_REDIRECT_LINKS = [
  { href: '/', icon: '', key: 'evidence', label: 'Evidence.com' },
  { href: '/', icon: '', key: 'sign-out', label: 'Sign Out' },
];

// BreadCrumbs Component 





// Icons Component

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// RECORDS SECTION - DUMMY DATA
export const RECORDS = [
  {
    id: 1,
    victims: "Tony Reichert",
    status: "invest_assigned",
    emails: "tony.reichert@example.com",
    last_modified_time: "10/31/2023 08:02",
    last_modified_by: "Douglas, Thomas (8532)",
    case_number: "2023-39-INC-23195823",
    case_time: "03/30/2023 15:05",
    case_type: "Shooting",
    assignee: "Douglas, Thomas (8532)",
    phone_numbers: "202-918-2132",
  },
  {
    id: 2,
    victims: "Zoey Lang",
    status: "court_scheduled",
    emails: "zoey.lang@example.com",
    last_modified_time: "09/16/2023 18:27",
    last_modified_by: "Willis, James (3582)",
    case_number: "2023-39-INC-23193829",
    case_time: "07/02/2023 12:47",
    case_type: "Assault",
    assignee: "Green, Jared (1293)",
    phone_numbers: "505-884-5269",
  },
  {
    id: 3,
    victims: "Jane Fisher",
    status: "rejected",
    emails: "jane.fisher@example.com",
    last_modified_time: "11/27/2023 08:12",
    last_modified_by: "Flanders, Sarah (2830)",
    case_number: "2023-39-INC-23192947",
    case_time: "04/22/2023 13:23",
    case_type: "Larceny",
    assignee: "Flanders, Sarah (2830)",
    phone_numbers: "505-476-8742",
  },
  {
    id: 4,
    victims: "William Howard",
    status: "active",
    emails: "william.howard@example.com",
    last_modified_time: "11/23/2023 13:58",
    last_modified_by: "Green, Jared (1293)",
    case_number: "2023-39-INC-23191092",
    case_time: "01/23/2022 18:22",
    case_type: "Carjacking",
    assignee: "Flanders, Sarah (2830)",
    phone_numbers: "423-709-2888",
  },
  {
    id: 5,
    victims: "Kristen Copper",
    status: "closed",
    emails: "kristen.cooper@example.com",
    last_modified_time: "11/06/2023 11:38",
    last_modified_by: "Hernandez, Talia (2084)",
    case_number: "2023-39-INC-23191234",
    case_time: "02/25/2023 17:12",
    case_type: "Arson",
    assignee: "Hernandez, Talia (2084)",
    phone_numbers: "505-318-7122",
  },
  {
    id: 6,
    victims: "Brian Kim",
    status: "active",
    emails: "brian.kim@example.com",
    last_modified_time: "06/28/2023 14:49",
    last_modified_by: "Sutton, Aaron (1248)",
    case_number: "2023-39-INC-23192345",
    case_time: "05/12/2023 02:28",
    case_type: "Larceny",
    assignee: "Sutton, Aaron (1248)",
    phone_numbers: "505-556-3931",
  },
  {
    id: 7,
    victims: "Michael Hunt",
    status: "active",
    emails: "michael.hunt@example.com",
    last_modified_time: "10/02/2023 18:35",
    last_modified_by: "Sutton, Aaron (1248)",
    case_number: "2023-39-INC-23194567",
    case_time: "07/29/2023 13:01",
    case_type: "Murder",
    assignee: "Sutton, Aaron (1248)",
    phone_numbers: "505-628-5161",
  },
  {
    id: 8,
    victims: "Samantha Brooks",
    status: "rejected",
    emails: "samantha.brooks@example.com",
    last_modified_time: "09/08/2023 14:53",
    last_modified_by: "Connolly, Hallie (8347)",
    case_number: "2023-39-INC-23195678",
    case_time: "09/07/2023 14:27",
    case_type: "Larceny",
    assignee: "Connolly, Hallie (8347)",
    phone_numbers: "505-646-8408",
  },
  {
    id: 9,
    victims: "Frank Harrison",
    status: "active",
    emails: "frank.harrison@example.com",
    last_modified_time: "10/16/2023 20:23",
    last_modified_by: "Connolly, Hallie (8347)",
    case_number: "2023-39-INC-23197899",
    case_time: "10/04/2023 18:37",
    case_type: "Kidnapping",
    assignee: "Connolly, Hallie (8347)",
    phone_numbers: "505-926-7314",
  },
  {
    id: 10,
    victims: "Emma Adams",
    status: "active",
    emails: "emma.adams@example.com",
    last_modified_time: "10/27/2023 14:21",
    last_modified_by: "Connolly, Hallie (8347)",
    case_number: "2023-39-INC-23190284",
    case_time: "03/09/2023 21:32",
    case_type: "DUI",
    assignee: "Connolly, Hallie (8347)",
    phone_numbers: "505-609-8837",
  },
  {
    id: 11,
    victims: "Brandon Stevens",
    status: "active",
    emails: "brandon.stevens@example.com",
    last_modified_time: "12/13/2023 09:03",
    last_modified_by: "Chang, Miranda (3748)",
    case_number: "2023-39-INC-23192084",
    case_time: "12/02/23 03:37",
    case_type: "Assault",
    assignee: "Chang, Miranda (3748)",
    phone_numbers: "505-628-0838",
  },
  {
    id: 12,
    victims: "Megan Richards",
    status: "active",
    emails: "megan.richards@example.com",
    last_modified_time: "08/10/2023 14:28",
    last_modified_by: "Hoover, Joe (8983)",
    case_number: "2023-39-INC-23190902",
    case_time: "04/21/2023 04:23",
    case_type: "Robbery",
    assignee: "Hoover, Joe (8983)",
    phone_numbers: "472-252-2725",
  },
  {
    id: 13,
    victims: "Oliver Scott",
    status: "active",
    emails: "oliver.scott@example.com",
    last_modified_time: "10/18/2023 11:37",
    last_modified_by: "Velasquez, Joel (3728)",
    case_number: "2023-39-INC-23190192",
    case_time: "12/27/2022 18:39",
    case_type: "Robbery",
    assignee: "Velasquez, Joel (3728)",
    phone_numbers: "505-644-5363",
  },
  {
    id: 14,
    victims: "Grace Allen",
    status: "active",
    emails: "grace.allen@example.com",
    last_modified_time: "06/20/2023 19:38",
    last_modified_by: "Velasquez, Joel (3728)",
    case_number: "2023-39-INC-23193889",
    case_time: "03/31/2023 13:34",
    case_type: "Assault",
    assignee: "Velasquez, Joel (3728)",
    phone_numbers: "505-274-0889",
  },
  {
    id: 15,
    victims: "Noah Carter",
    status: "invest_assigned",
    emails: "noah.carter@example.com",
    last_modified_time: "01/23/2023 14:23",
    last_modified_by: "Sutton, Aaron (1248)",
    case_number: "2023-39-INC-23191098",
    case_time: "10/18/2022 10:11",
    case_type: "Larceny",
    assignee: "Sutton, Aaron (1248)",
    phone_numbers: "505-610-0279",
  },
  {
    id: 16,
    victims: "Ava Perez",
    status: "active",
    emails: "ava.perez@example.com",
    last_modified_time: "08/30/2023 19:45",
    last_modified_by: "Hernandez, Talia (2084)",
    case_number: "2023-39-INC-23191123",
    case_time: "07/27/2023 22:19",
    case_type: "Shoplifting",
    assignee: "Hernandez, Talia (2084)",
    phone_numbers: "505-644-7862",
  },
  {
    id: 17,
    victims: "Liam Johnson",
    status: "active",
    emails: "liam.johnson@example.com",
    last_modified_time: "12/08/2023 16:21",
    last_modified_by: "Hernandez, Talia (2084)",
    case_number: "2023-39-INC-23192020",
    case_time: "09/29/2023 15:30",
    case_type: "Burglary",
    assignee: "Hernandez, Talia (2084)",
    phone_numbers: "505-646-0858",
  },
  {
    id: 18,
    victims: "Sophia Taylor",
    status: "active",
    emails: "sophia.taylor@example.com",
    last_modified_time: "12/01/2023 21:18",
    last_modified_by: "Douglas, Thomas (8532)",
    case_number: "2023-39-INC-23198892",
    case_time: "11/28/2023 07:43",
    case_type: "Auto Theft",
    assignee: "Douglas, Thomas (8532)",
    phone_numbers: "505-644-3392",
  },
  {
    id: 19,
    victims: "Lucas Harris",
    status: "court_scheduled",
    emails: "lucas.harris@example.com",
    last_modified_time: "09/27/2023 10:28",
    last_modified_by: "Douglas, Thomas (8532)",
    case_number: "2023-39-INC-23193782",
    case_time: "08/02/2023 04:19",
    case_type: "Auto Theft",
    assignee: "Douglas, Thomas (8532)",
    phone_numbers: "323-309-7284",
  },
  {
    id: 20,
    victims: [
      "Mia Robinson",
      "Jamie Robinson"
    ],
    status: "active",
    emails: [
      "mia.robinson@example.com",
      "jamie.robinson@example.com",
    ],
    last_modified_time: "10/02/2023 14:02",
    last_modified_by: "Young, Jerry (5045)",
    case_number: "2023-39-INC-23193792",
    case_time: "08/26/2023 10:28",
    case_type: "Robbery",
    assignee: "Young, Jerry (5045)",
    phone_numbers: [
      "505-660-5200",
      "505-485-3924",
    ],
  },
];
