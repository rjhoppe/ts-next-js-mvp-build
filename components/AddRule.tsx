'use client'

import {  
  Select, 
  SelectSection, 
  SelectItem,
  Divider,
} from "@nextui-org/react";

import { statusOptions } from "@/constants/index";

const AddRule = () => {

  return (
    <section className="mt-10">
      <div>
        <h1>Add rule</h1>
        <p>Description on how to add a successful rule</p>
      </div>
      <Divider />
      <h2>If</h2>
      <div>
        <Select 
          label="Select an animal" 
          className="max-w-xs" 
        >
          {statusOptions.map((status) => (
            <SelectItem key={status.uid}>
              {status.name}
            </SelectItem>
          ))}
        </Select>
      </div>
    </section>
  );
}

export default AddRule