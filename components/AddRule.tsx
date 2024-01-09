'use client'

import {  
  Dropdown,  
  DropdownTrigger,  
  DropdownMenu,  
  DropdownSection,  
  DropdownItem,
  Button,
} from "@nextui-org/react";

import React from "react";

const AddRule = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <section className="mt-10">
      <Dropdown>
        <DropdownTrigger>
          <Button 
            variant="bordered" 
            className="capitalize"
          >
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <DropdownItem key="text">Text</DropdownItem>
          <DropdownItem key="number">Number</DropdownItem>
          <DropdownItem key="date">Date</DropdownItem>
          <DropdownItem key="single_date">Single Date</DropdownItem>
          <DropdownItem key="iteration">Iteration</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </section>
  );
}

export default AddRule