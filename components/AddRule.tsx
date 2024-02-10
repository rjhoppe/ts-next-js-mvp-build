'use client';

import {  
  Select, 
  Button,
  Link,
  SelectItem,
  Divider,
  Input
} from "@nextui-org/react";

import { statusOptions, columns } from "@/constants/index";
import RichTextEditor from "./RichTextEditor";
import { capitalize } from "@/app/utils";

const AddRule = () => {
  return (
    <section className="mt-10">
      <div>
        <h2 className="text-xl">Add rule</h2>
        <p className="text-sm my-2">(Description on how to add a successful if then rule) Learn more on MyAxon article (Link)</p>
      </div>
      <Divider className="my-2" />
      <h3 className="text-lg my-4">If</h3>
      <div className="my-6">
        <Input className="my-6 max-w-xl" isReadOnly placeholder="Status" 
        label='Case Info Type'>
          Status
        </Input>
      </div>
      <div className="my-6">
      <Select 
          label="Action" 
          className="max-w-xl"
        >
          {columns.map((column) => (
            <SelectItem key={column.name}>
              {capitalize(column.name.toLowerCase())}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="my-6">
        <Select 
          label="Values" 
          className="max-w-xl"
          isRequired
        >
          {statusOptions.map((status) => (
            <SelectItem key={status.name}>
              {status.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Divider className="my-2" />
      <h3 className="text-lg my-4">Then</h3>
      <div className="my-6">
        <Select 
          label="Action" 
          className="max-w-xl"
          isRequired
        >
          {columns.map((column) => (
            <SelectItem key={column.name}>
              {capitalize(column.name.toLowerCase())}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex items-center my-6 gap-5">
        <Select 
          label="Template" 
          className="w-72"
          isRequired
        >
          {columns.map((column) => (
            <SelectItem key={column.name}>
              {column.name}
            </SelectItem>
          ))}
        </Select>
        <Button href="/" as={Link} color="primary">
          Edit Template
        </Button>
        <Button href="/create-template" as={Link} color="primary"> 
          Create Template
        </Button>
      </div>
      <Input className="my-6 max-w-xl" isReadOnly label='Subject'></Input>
      <div className="flex flex-col justify-center mt-5 max-w-xl">
        <RichTextEditor />
      </div>
      <div className="flex justify-start gap-5 max-w-xl">
        <Button href="/" as={Link} className="flex" color="danger">
          Cancel
        </Button>
        <Button href="/" as={Link} className="flex" color="primary">
          Save
        </Button>
      </div>
    </section>
  );
}

export default AddRule