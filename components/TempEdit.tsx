'use client';

import { 
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react"
import RichTextEditor from "./RichTextEditor"
import { Button } from "@nextui-org/button"
import Link from "next/link"

const TempEdit = () => {
  return (
    <section>
      <Input 
        isRequired
        type="email"
        label="Recipients"
        placeholder="example@axon.com"
        className="mt-5 max-w-xl"
      />
      <Input 
        type="email"
        label="CC Recipients"
        className="mt-5 max-w-xl"
      />
      <Select
        label="Active"
        isRequired
        className="mt-5 max-w-xl"
      >
        <SelectItem key="True" value="True">True</SelectItem>
        <SelectItem key="False" value="False">False</SelectItem>
      </Select>
      <Input 
        type="string"
        label="Subject"
        className="mt-5 max-w-xl"
      />
      <p className="mt-5">Message</p>
      <div className="flex flex-col justify-center mt-5 max-w-xl">
        <RichTextEditor />
      </div>
      <div className="flex mt-20 justify-end gap-5 max-w-xl">
        <Button href="/" as={Link} className="flex" color="danger">
          Cancel
        </Button>
        <Button href="/" as={Link} className="flex" color="primary">
          Save
        </Button>
      </div>
    </section>
  )
}

export default TempEdit