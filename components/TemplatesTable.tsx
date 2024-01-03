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

import { temp_columns, temp_records } from "@/constants/index";
import { capitalize } from "@/app/utils";

const INITIAL_VISIBLE_COLUMNS = ["template", "last_modified_time", "last_modified_by", "active", "actions"];

type Records = typeof temp_records[0];

const TemplatesTable = () => {
  return (
    <h1>TemplatesTable</h1>
  )
}

export default TemplatesTable