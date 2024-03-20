'use client';
import React from "react";

import { 
  Input,
  Select,
  SelectItem,
  Textarea, 
  Popover, 
  PopoverTrigger, 
  PopoverContent
} from "@nextui-org/react";

import RichTextEditor from "./RichTextEditor";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import supabase from "@/lib/supabase";
import SuccessPopover from "./SuccessPopover";

const TempEdit = ({ parentToChild }: any) => {
  const [templateName, setTemplateName] = React.useState("");
  const [ccRecipients, setCCRecipients] = React.useState("");
  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const validatePhoneNumber = (value: string) => value.length > 9;
  const [subject, setSubject] = React.useState("");
  const [active, setActive] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [successStatus, setSuccessStatus] = React.useState(false);

  const handleSubmit = async () => {
    try {
      // @ts-ignore
      const { data } = await supabase
      .from('templates')
      .insert({ 
        'template_id': 'T0000000',
        'last_modified_by': 'Test',
        'template_name': 'Test',
        'created_by': 'Test',
        'client_code': 12345,
        'police_dpt': 'Test',
        'type': 'Test',
        'cc_recipients': 'Test',
        'active': 'True',
        'subject': 'N/A',
        'message': 'Your case status has been updated to Rejected. Please visit www.test.org for more information'
      })
      if (data) {
        console.log(data)
      }
        
    } catch (error) {
      console.log(error)
    }

    setSuccessStatus(true)
  }

  return (
    <section>
      <Input 
        label="Template Name"
        isRequired
        className="mt-5 max-w-xl"
      />
      {
        parentToChild === 'email' 
        ? <Input type="email" label="CC Recipients" isRequired className="mt-5 max-w-xl"/>
        : null
      }
      <Select
        label="Active"
        isRequired
        className="mt-5 max-w-xl"
      >
        <SelectItem key="True" value="True">True</SelectItem>
        <SelectItem key="False" value="False">False</SelectItem>
      </Select>
      {
        parentToChild === "email" 
        ? <Input type="string" label="Subject" className="mt-5 max-w-xl" isRequired/> 
        : null
      }
      <p className="mt-5">Message</p>
      <div className="flex flex-col justify-center mt-5 max-w-xl">
        {
          parentToChild === "email" 
          ? <RichTextEditor /> 
          : <Textarea label="SMS Message" placeholder="Enter message text" minRows={5} className="h-40"/>
        }
      </div>
      <div className="flex mt-5 gap-5 max-w-xl">
        <Button href="/" as={Link} className="flex" color="danger">
          Cancel
        </Button>
        <Button className="flex" color="primary" onClick={handleSubmit}>
          Save
        </Button>
        {
          successStatus === true
          ? <SuccessPopover placement='right' action='edited' recordType='template'/>
          : null
        }
      </div>
    </section>
  )
}

export default TempEdit