"use client"
import React from "react";
import { rules_columns, statusOptions } from "@/constants/index";
import { capitalize } from "@/app/utils";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor
} from "@nextui-org/react";

import { 
  PlusIcon,
  VerticalDotsIcon,
  ChevronDownIcon,
} from "@/components/icons"
import Link from "next/link";

import EditRuleRecord from "./EditRuleRecord";
import ViewRuleRecord from "./ViewRuleRecord";
import { RulesTableTypes } from "@/types/collection";
import DeleteRecordModal from "./DeleteRecordModal";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["id", "if_logic", "then_logic", "last_date_modified", "last_modified_by", "delay", "actions"];

type RulesTableProps = {
  rows: RulesTableTypes[]
}

const RulesTable = ({ rows }: RulesTableProps) => {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return rules_columns;

    return rules_columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...rows];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((record) =>
        record.if_logic.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((record) =>
        Array.from(statusFilter).includes(record.if_logic),
      );
    }

    return filteredUsers;
  }, [rows, hasSearchFilter, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: RulesTableTypes, b: RulesTableTypes) => {
      const first = a[sortDescriptor.column as keyof RulesTableTypes] as number;
      const second = b[sortDescriptor.column as keyof RulesTableTypes] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((record: RulesTableTypes, columnKey: React.Key) => {
    const cellValue = record[columnKey as keyof RulesTableTypes];

    switch (columnKey) {
      case "id":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Tooltip content="Edit">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditRuleRecord 
                  id={record.rule_id}
                  if_logic={record.if_logic}
                  then_logic={record.then_logic}
                  delay={record.delay}
                />
              </span>
            </Tooltip>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="light text-foreground" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem isReadOnly>
                  <ViewRuleRecord 
                    id={record.rule_id}
                    if_logic={record.if_logic}
                    then_logic={record.then_logic}
                    delay={record.delay}
                    last_modified_by={record.last_modified_by}
                    last_modified_time={record.last_date_modified}
                  />
                </DropdownItem>
                <DropdownItem isReadOnly>
                  <DeleteRecordModal 
                    id={record.rule_id}
                    database='rules'
                  />
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <div className="flex">
            <span className="text-small">Total rules: {rows.length}</span>
          </div>
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button 
                  className="bg-stone-800 text-white"  
                  endContent={<ChevronDownIcon className="text-small" />} 
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {rules_columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button className="text-white bg-stone-800" as={Link} href="/create-rule" color="primary" 
            endContent={<PlusIcon />}>
              Add New Rule
            </Button>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <label className="flex items-center text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    rows.length,
    visibleColumns,
    onRowsPerPageChange
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center ">
        <span className="w-[30%] text-small text-black-400 ">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
          className="dark text-foreground"
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button className="text-white bg-stone-800"
          size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button className="text-white bg-stone-800"
          size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [
    selectedKeys, 
    page, 
    pages, 
    filteredItems.length,
    onNextPage,
    onPreviousPage,
  ]);

  return (
    <Table
      aria-label="Data table for user created rule logic"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[1000px]",
        th: "text-white bg-stone-800",
        tr: "divide-y divide-solid"
      }}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
      className="h-screen"
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(row) => (
          <TableRow key={row.id}>
            {(columnKey) => <TableCell>{renderCell(row, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default RulesTable