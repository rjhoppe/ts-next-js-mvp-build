'use client';
import React, { useEffect } from "react";

import { 
  Input,
  Select,
  SelectItem,
  Textarea, 
  Popover, 
  PopoverTrigger, 
  PopoverContent
} from "@nextui-org/react";

import supabase from "@/lib/supabase";
import { capitalize2 } from "@/app/utils";

import RichTextEditor from "./RichTextEditor";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import SuccessPopover from "./SuccessPopover";

export type TempEditProps = {
  parentToChild: any;
  editData?: boolean;
  d_clientCode?: number;
  d_police_dpt?: string; 
  d_template_name?: string;
  d_template_id?: string;
  d_type?: string;
  d_ccRecipients?: string;
  d_active?: string;
  d_subject?: string;
  d_message?: string;
}

const TempEdit = ({ parentToChild, d_clientCode, d_police_dpt, d_template_name, d_type, 
d_ccRecipients, d_template_id, d_active, d_subject, d_message, editData}: TempEditProps) => {
  const [templateName, setTemplateName] = React.useState(d_template_name);
  const [templateId, setTemplateId] = React.useState(d_template_id);
  const [ccRecipients, setCCRecipients] = React.useState(d_ccRecipients);
  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const validatePhoneNumber = (value: string) => value.length > 9;
  const [subject, setSubject] = React.useState(d_subject);
  const [type, setType] = React.useState(d_type || '');
  const [active, setActive] = React.useState(d_active);
  const [message, setMessage] = React.useState(d_message);
  const [successStatus, setSuccessStatus] = React.useState(false);
  const [editStatus, setEditStatus] = React.useState(false);

 const [subType, setSubType] = React.useState(d_type || '');

  function genTempId() {
    const minCeiled = Math.ceil(1000000);
    const maxFloored = Math.floor(9999999)
    const genNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    const genId = "T" + genNumber
    return genId
  }

  function editCheck() {
    if (editData && d_template_name && d_ccRecipients && d_subject && d_active && d_message) {
      setEditStatus(true)
      // console.log(edit)
      // setTemplateName(d_template_name)
      // setCCRecipients(d_ccRecipients)
      // setSubject(d_subject)
      // setActive(d_active)
      // setMessage(d_message)
      // console.log(templateName)
    }
  }

  useEffect(() => {
    editCheck();
    // console.log(parentToChild)
    // console.log(d_template_name, templateName)
  }, []);

  useEffect(() => {
    // console.log(d_type)
    if (parentToChild === 'sms') {
      // console.log('This action was performed: type === Email')
      // setType('Email');
      // console.log(parentToChild)
      let temp = parentToChild
      setSubType(temp.toUpperCase())
      // setSubType(capitalize2(parentToChild))
    } else if (parentToChild === 'email') {
      // console.log(parentToChild)
      // console.log('This action was performed: type === SMS')
      // setType('SMS');
      setSubType(capitalize2(parentToChild))
      // console.log(subType)
    } else {
      console.log('Something went wrong...')
      // console.log(parentToChild)
    }
  }, [parentToChild]);

  const handleSubmit = async () => {
    if (editStatus === true) {
      try {
        console.log(subType)
        // @ts-ignore
        const { data } = await supabase
        .from('templates')
        // @ts-ignore
        .update({ 
          'template_id': templateId,
          'last_modified_by': 'Rick Hoppe',
          'template_name': templateName,
          'type': subType,
          'cc_recipients': ccRecipients,
          'active': active,
          'subject': subject,
          'message': message,
        })
        .eq('template_id', templateId)
        .select()
        if (data) {
          console.log(data)
        }
          
      } catch (error) {
        console.log(error)
      }
      
    } else {
      try {
        const genId = genTempId()
        // @ts-ignore
        const { data } = await supabase
        .from('templates')
        .insert({ 
          'template_id': genId,
          'last_modified_by': 'Rick Hoppe',
          'template_name': templateName,
          'created_by': 'Rick Hoppe',
          // Need to get client code and pd info from user account/table
          'client_code': 12345,
          'police_dpt': 'Test',
          'type': capitalize2(parentToChild),
          // ccRecipients cannot be blank for right now...
          'cc_recipients': ccRecipients,
          'active': active,
          'subject': subject,
          // Need to bubble up message content from Rich Content Editor
          'message': 'test test test',
        })
        if (data) {
          console.log(data)
        }
          
      } catch (error) {
        console.log(error)
      }

    }
    setSuccessStatus(true)
  }

  return (
    <section>
      <Input 
        label="Template Name"
        isRequired
        className="mt-5 max-w-xl"
        onChange={(e) => {setTemplateName(e.target.value)}}
        defaultValue={d_template_name}
      />
      {
        parentToChild === 'email' 
        ? <Input type="email" label="CC Recipients" defaultValue={(ccRecipients) ? ccRecipients : ''} onChange={(e) => {setCCRecipients(e.target.value)}} className="mt-5 max-w-xl"/>
        : null
      }
      <Select
        label="Active"
        isRequired
        className="mt-5 max-w-xl"
        defaultSelectedKeys={
          (d_active) ? [d_active] : 'True'
        }
        onChange={(e) => {setActive(e.target.value)}}
      >
        <SelectItem key="True" value="True">True</SelectItem>
        <SelectItem key="False" value="False">False</SelectItem>
      </Select>
      {
        parentToChild === "email" 
        ? <Input type="string" defaultValue={d_subject === 'N/A' ? '' : d_subject} label="Subject" onChange={(e) => {setSubject(e.target.value)}} className="mt-5 max-w-xl" isRequired/> 
        : null
      }
      <p className="mt-5">Message</p>
      <div className="flex flex-col justify-center mt-5 max-w-xl">
        {
          parentToChild === "email" 
          ? <RichTextEditor message={message}/> 
          : <Textarea label="SMS Message" defaultValue={ (message) ? message : '' } placeholder="Enter message text" minRows={5} onChange={(e) => {setMessage(e.target.value)}} className="h-40"/>
        }
      </div>
      <div className="flex mt-5 gap-5 max-w-xl mb-36">
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