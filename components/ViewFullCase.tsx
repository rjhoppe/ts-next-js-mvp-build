import { DataTableTypes } from '@/types/collection';
import { Input } from '@nextui-org/input';
import { Divider } from '@nextui-org/divider';
import { Button, Textarea } from "@nextui-org/react";
import { FaHome } from "react-icons/fa";
import React from 'react';
import Link from 'next/link';

type ViewCaseProps = {
  rows: DataTableTypes[];
}

const ViewFullCase = ({ rows }: ViewCaseProps) => {
  return (
    <section className='max-w-xl'>
      <div className='flex justify-between items-center'>
        <h1 className='mt-5 mb-5 text-lg'>{rows[0].case_number}</h1>
        <Button as={Link} href="/" className='bg-stone-800 text-white'>
          <FaHome />
        </Button>
      </div>
        <Divider className='my-4'/>
        <Input className='my-4' label="Case ID" defaultValue={rows[0].case_id} readOnly></Input>
        <Input className='my-4' label="Case Status" defaultValue={rows[0].case_status} readOnly></Input>
        <Input className='my-4' label="Case Type" defaultValue={rows[0].case_type} readOnly></Input>      
        <Input className='my-4' label="Created At" defaultValue={rows[0].created_at} readOnly></Input>
        <Input className='my-4' label="Last Date Modified" defaultValue={rows[0].last_date_modified} readOnly></Input>
        <Input className='my-4' label="Last Modified By" defaultValue={rows[0].last_modified_by} readOnly></Input>
        <Input className='my-4' label="Client Code" defaultValue={rows[0].client_code.toString()} readOnly></Input>
        <Input className='my-4' label="Organization" defaultValue={rows[0].police_dpt} readOnly></Input>
        <Input className='my-4' label="Assignee" defaultValue={rows[0].assignee} readOnly></Input>
        <Input className='my-4' label="Victim Names" defaultValue={rows[0].victim_names} readOnly></Input>
        <Input className='my-4' label="Victim Emails" defaultValue={rows[0].victim_emails} readOnly></Input>
        <Input className='my-4' label="Victim Phone Numbers" defaultValue={rows[0].victim_phone_numbers.toString()} readOnly></Input>
        <Input className='my-4' label="Victim Opt-Outs" defaultValue={rows[0].opt_out_victim_names} readOnly></Input>
        <Textarea className='my-4' label="Case Notes" readOnly defaultValue={rows[0].opt_out_victim_names} />        
    </section>
  )
}

export default ViewFullCase