'use client'

import { Input } from "@nextui-org/input"
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
        defaultValue="example@axon.com"
        className=" mt-5 max-w-xl"
      />
      <Input 
        type="email"
        label="CC Recipients"
        className=" mt-5 max-w-xl"
      />
      <Input 
        type="string"
        label="Subject"
        className=" mt-5 max-w-xl"
      />
      <p className="mt-5">Message</p>
      <div className="flex flex-col justify-center mt-5 max-w-xl">
        <RichTextEditor />
      </div>
      <div className="flex mt-20 justify-end gap-5 max-w-xl">
        <Button href="/" as={Link} className="flex" color="secondary">
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