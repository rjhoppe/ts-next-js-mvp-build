'use client'

import {  
  Select, 
  SelectSection,
  Button,
  Link,
  SelectItem,
  Divider,
  Switch,
  Textarea,
  Input,
} from "@nextui-org/react";

import { columns } from "@/constants/index";
import RichTextEditor from "./RichTextEditor";

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
        <Select 
          label="Case Info Type" 
          className="max-w-xs" 
        >
          {columns.map((column) => (
            <SelectItem key={column.name}>
              {column.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="my-6">
        <Select 
          label="Action" 
          className="max-w-xs" 
        >
          {columns.map((column) => (
            <SelectItem key={column.name}>
              {column.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="my-6">
        <Select 
          label="Values" 
          className="max-w-xs" 
        >
          {columns.map((column) => (
            <SelectItem key={column.name}>
              {column.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Divider className="my-2" />
      <h3 className="text-lg my-4">Then</h3>
      <div className="my-6">
        <Select 
          label="Action" 
          className="max-w-xs" 
        >
          {columns.map((column) => (
            <SelectItem key={column.name}>
              {column.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex my-6 gap-5">
        <Select 
          label="Template" 
          className="max-w-xs" 
        >
          {columns.map((column) => (
            <SelectItem key={column.name}>
              {column.name}
            </SelectItem>
          ))}
        </Select>
        <Switch>
          Edit content
        </Switch>
      </div>
      <Input className="my-6 max-w-xl" isReadOnly label='Subject'>

      </Input>
      <div className="flex flex-col justify-center mt-5 max-w-xl">
        <RichTextEditor />
      </div>
      <div className="flex mt-20 justify-start gap-5 max-w-xl">
        <Button href="/" as={Link} className="flex" color="secondary">
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