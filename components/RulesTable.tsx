"use client"
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from "@nextui-org/react";
import { PlusIcon } from "@/components/icons"
import { VerticalDotsIcon } from "@/components/icons"
import { ChevronDownIcon } from "@/components/icons"
import { SearchIcon } from "@/components/icons"

import { columns, records, statusOptions } from "@/constants/index";
import { capitalize } from "@/app/utils";

const RulesTable = () => {
  return (
    <h1>RulesTable</h1>
  )
}

export default RulesTable