import { SVGProps } from "react";
import { Switch } from "@nextui-org/switch";
import { 
  IoMdChatboxes,
  IoMdPeople,
  IoMdBriefcase,
 } from "react-icons/io";

 import { 
  FaGear,
  FaShield, 
} from "react-icons/fa6";

import { HiPencil } from "react-icons/hi";

 import { FaSignOutAlt } from "react-icons/fa";
 import { MdSignpost } from "react-icons/md";
 import { BiSolidMessageDetail } from "react-icons/bi";

// Constants for Navbar props
export const NEW_NAV_DASH_LINKS = [
  { href: '/', icon: IoMdChatboxes, key: 'post-contact', label: 'Post-Contact', title: 'Survey Dashboard' },
  { href: '/', icon: IoMdPeople, key: 'community', label: 'Community'},
  { href: '/', icon: IoMdBriefcase, key: 'employee', label: 'Employee'},
  { href: '/messaging-log', icon: BiSolidMessageDetail, key: 'automated-messaging', label: 'Messaging', title: 'Messaging'},
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

// BreadCrumbs Components 
export const bcLayoutHeaders = [
  { title: 'Cases', separator:'', size:'lg', key: 'cases', class_name:'' },
  { title: 'Rules', separator:'', size:'lg', key: 'rules', class_name:'ml-10' },
  { title: 'Templates', separator:'', size:'lg', key: 'templates', class_name:'ml-10' },
];

export const bcFormHeaders = [
  { title: 'Editor', separator:'', size:'lg', key:'editor', class_name:'' },
  { title: 'Preview', separator:'', size:'lg',  key:'preview', class_name:'ml-10' },
];

// Icons Component
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// MESSAGES TABLE SECTION
export const msg_columns = [
  {name: "TYPE", uid: "type"},
  {name: "MESSAGE ID", uid: "msg_id"},
  {name: "DISTRIBUTION TIME", uid: "distro_time"},
  {name: "STATUS", uid: "status"},
  {name: "TEMPLATE", uid: "temp"},
  {name: "RECIPIENTS", uid: "recipients"},
]

export const msg_records = [
  {
    type: 'SMS',
    msg_id: 'M274557',
    distro_time: '08/06/2023, 14:35',
    status: 'success',
    temp: 'Investigator Assigned (SMS)',
    recipients: '5291960784802'
  },
  {
    type: 'Email',
    msg_id: 'M274387',
    distro_time: '10/22/2023, 11:18',
    status: 'success',
    temp: 'Investigator Assigned (Email)',
    recipients: 'a.hensley@montgomery.info, t.farmer@gillespie.com'
  },
  {
    type: 'Email',
    msg_id: 'M274690',
    distro_time: '10/22/2023, 11:35',
    status: 'success',
    temp: 'Investigator Assigned (Email)',
    recipients: 'a.hensley@montgomery.info, t.farmer@gillespie.com'
  },
  {
    type: 'Email',
    msg_id: 'M274221',
    distro_time: '12/10/2023, 03:22',
    status: 'success',
    temp: 'Court Scheduled (Email)',
    recipients: 'r.fernandez@harris.biz, m.lang@rodriguez-herring.com'
  },
  {
    type: 'SMS',
    msg_id: 'M274068',
    distro_time: '03/12/2024, 03:51',
    status: 'fail',
    temp: 'Investigator Assigned (Email)',
    recipients: '1152867976655, 5452365950111, 1052169316013'
  },
];

// DEV-PAGE SECTION
export const data_columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "CREATED AT", uid: "created_at"},
  {name: "CASE ID", uid: "case_id"},
  {name: "CASE NUMBER", uid: "case_number"},
  {name: "CLIENT CODE", uid: "client_code"},
  {name: "POLICE DEPARTMENT", uid: "police_dpt"},
  {name: "ASSIGNEE", uid: "assignee"},
  {name: "LAST DATE MODIFIED", uid: "last_date_modified", sortable: true},
  {name: "LAST MODIFIED BY", uid: "last_modified_by"},
  {name: "VICTIM NAMES", uid: "victim_names"},
  {name: "VICTIM EMAILS", uid: "victim_emails"},
  {name: "VICTIM PHONE NUMBERS", uid: "victim_phone_numbers"},
  {name: "VICTIM IDS", uid: "victim_ids"},
  // {name: "NOTIFICATION", uid: "notification"},
  // {name: "OPT OUT VICTIM NAMES", uid: "opt_out_victim_names"},
  // {name: "OPT OUT VICTIM IDS", uid: "opt_out_victim_ids"},
  {name: "CASE STATUS", uid: "case_status"},
  {name: "ACTIONS", uid: "actions"}
]

// TEMPLATES SECTION
export const temp_columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "TEMPLATE", uid: "template_name", sortable: true},
  {name: "LAST MODIFIED DATE", uid: "last_date_modified", sortable: true},
  {name: "LAST MODIFIED BY", uid: "last_modified_by"},
  {name: "TYPE", uid: "type", sortable: true},
  {name: "ACTIVE", uid: "active", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

export const temp_records = [
  {
    id: 'T2387503',
    template: 'Investigator Assigned (SMS)',
    last_modified_time: '08/06/2023, 14:35',
    last_modified_by: 'Brown, Tracy (1234)',
    active: 'True',
    type: 'SMS',
    actions: '',
    subject: '',
    body: 'Your case status has been updated to Investigator Assigned. Please visit our ' +
    'website for more information. Please respond CANCEL to opt out of future case notifications.'
  },
  {
    id: 'T2387547',
    template: 'Investigator Assigned',
    last_modified_time: '08/06/2023, 14:35',
    last_modified_by: 'Brown, Tracy (1234)',
    active: 'False',
    type: 'Email',
    actions: '',
    subject: 'An Update On Your Case Status',
    body: 'Your case status has been updated to Investigator Assigned. Please visit our ' +
    'website for more information.'
  },
  {
    id: 'T2387501',
    template: 'Court Scheduled',
    last_modified_time: '08/06/2023, 14:35',
    last_modified_by: 'Brown, Tracy (1234)',
    active: 'False',
    type: 'Email',
    actions: '',
    subject: 'An Update On Your Case Status',
    body: 'Your case status has been updated to Court Scheduled. Please visit our ' +
    'website for more information.'
  },
  {
    id: 'T2387524',
    template: 'Court Scheduled (SMS)',
    last_modified_time: '08/06/2023, 14:35',
    last_modified_by: 'Brown, Tracy (1234)',
    active: 'True',
    type: 'SMS',
    actions: '',
    subject: '',
    body: 'Your case status has been updated to Court Scheduled. Please visit our ' +
    'website for more information. Please respond CANCEL to opt out of future case notifications.'
  },
  {
    id: 'T2387511',
    template: 'Closed',
    last_modified_time: '08/06/2023, 14:35',
    last_modified_by: 'Brown, Tracy (1234)',
    active: 'True',
    type: 'Email',
    actions: '',
    subject: 'An Update On Your Case Status',
    body: 'Your case status has been closed. Please visit our website for more information or ' +
    'reach out to the police department with any additional questions. Thank you.'
  },
  {
    id: 'T2387533',
    template: 'Rejected',
    last_modified_time: '08/06/2023, 14:35',
    last_modified_by: 'Brown, Tracy (1234)',
    active: 'True',
    type: 'Email',
    actions: '',
    subject: 'An Update On Your Case Status',
    body: 'Your case status has been rejected. Please visit our website for more information or ' +
    'reach out to the police department with any additional questions. Thank you.'
  },
  {
    id: 'T2387498',
    template: 'Subject Arrested (SMS)',
    last_modified_time: '08/06/2023, 14:35',
    last_modified_by: 'Brown, Tracy (1234)',
    active: 'True',
    type: 'SMS',
    actions: '',
    subject: 'An Update On Your Case Status',
    body: 'Your case status has been updated to Subject Arrested. Please visit our ' +
    'website for more information.'
  },
];


// RULES SECTION
export const rules_columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "IF", uid: "if_logic"},
  {name: "THEN", uid: "then_logic"},
  {name: "LAST MODIFIED DATE", uid: "last_date_modified", sortable: true},
  {name: "LAST MODIFIED BY", uid: "last_modified_by"},
  {name: "DELAY", uid: "delay", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

export const rules_records = [
  {
    id: '1',
    if_logic: 'Status set to "Investigator assigned"',
    then_logic: 'Send SMS to victims in case using "Investigator Assigned (SMS)"',
    last_modified_time: '10/31/2023, 8:02',
    last_modified_by: 'Brown, Tracy (1234)',
    delay: '1 hour',
    actions: 'HiPencil',
  },
  {
    id: '2',
    if_logic: 'Status set to "Closed"',
    then_logic: 'Email victims in case using "Closed"',
    last_modified_time: '10/31/2023, 8:02',
    last_modified_by: 'Brown, Tracy (1234)',
    delay: '1 hour',
    actions: 'HiPencil',
  },
  {
    id: '3',
    if_logic: 'Status set to "Subject arrested"',
    then_logic: 'Send SMS to victims in case using "Subject Arrested (SMS)"',
    last_modified_time: '10/31/2023, 8:02',
    last_modified_by: 'Brown, Tracy (1234)',
    delay: '1 hour',
    actions: 'HiPencil',
  },
  {
    id: '4',
    if_logic: 'Status set to "Court scheduled"',
    then_logic: 'Send SMS to victims in case using "Court Scheduled (SMS)"',
    last_modified_time: '10/31/2023, 8:02',
    last_modified_by: 'Brown, Tracy (1234)',
    delay: '1 hour',
    actions: 'HiPencil',
  },
  {
    id: '5',
    if_logic: 'Status set to "Rejected"',
    then_logic: 'Email victims in case using "Rejected"',
    last_modified_time: '10/31/2023, 8:02',
    last_modified_by: 'Brown, Tracy (1234)',
    delay: '1 hour',
    actions: 'HiPencil',
  },
];

// RECORDS SECTION - DUMMY DATA
export const dummy_columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "CASE NUMBER", uid: "case_number", sortable: true},
  {name: "CASE TIME", uid: "case_time"},
  {name: "CASE TYPE", uid: "case_type"},
  {name: "ASSIGNEE", uid: "assignee"},
  {name: "VICTIMS", uid: "victims"},
  // Make below validate for UTC time
  {name: "LAST MODIFIED BY", uid: "last_modified_by"},
  {name: "PHONE NUMBERS", uid: "phone_numbers"},
  {name: "EMAILS", uid: "emails"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "LAST MODIFIED DATE", uid: "last_modified_time", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

export const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Investigator Assigned", uid: "invest_assigned"},
  {name: "Court Scheduled", uid: "court_scheduled"},
  {name: "Rejected", uid: "rejected"},
  {name: "Closed", uid: "closed"},
];

export const dummy_records = [
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
