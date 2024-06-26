"use client";

// Revisit this

import { Select, SelectItem } from "@nextui-org/react";

import { rules_columns } from "@/constants/index";

import React from "react";

const RulesLogic = () => {
  return (
    <div className="my-6">
      <Select label="Case Info Type" className="max-w-xs">
        {rules_columns.map((column) => (
          <SelectItem key={column.name}>{column.name}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

type RulesLogicBlockProps = {
  label: string;
};

const RulesLogicBlock = ({ label }: RulesLogicBlockProps) => {
  <div className="my-6">
    <Select label={label} className="max-w-xs">
      {rules_columns.map((column) => (
        <SelectItem key={column.name}>{column.name}</SelectItem>
      ))}
    </Select>
  </div>;
};

export default RulesLogic;
