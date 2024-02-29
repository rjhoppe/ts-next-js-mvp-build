"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
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
  Link,
  Spinner,
} from "@nextui-org/react";

import supabase from "@/lib/supabase";
import { dev_columns } from "@/constants/index";
import { DevPageTypes } from "@/types/collection";
import { useState, useEffect, useCallback } from "react";

import ViewCaseRecord from "@/components/ViewCaseRecord";

import { 
  ChevronDownIcon,
  SearchIcon,
} from "@/components/icons"

import { columns, records, statusOptions } from "@/constants/index";
import { capitalize } from "@/app/utils";
// import { data } from "autoprefixer";

const statusColorMap: Record<string, ChipProps["color"]> = {
  "Active": "success",
  "Investigator Assigned": "primary",
  "Court Scheduled": "primary",
  "Rejected": "danger",
  "Closed": "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["case_number", "assignee", "victim_names", "case_status", "last_date_modified", "actions"];

const DevPage = () => {
  const [rows, setRows] = useState<DevPageTypes[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const fetchRows = useCallback(async () => {
    const { data, error } = await supabase
    .from('cases_test_upload')
    .select(`*`)
    .returns<DevPageTypes[]>();

    if (!data && !error) {
      console.log('Data is loading...')
    } else if (error) {
      console.log("error", error);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setRows(data);
      // console.log(rows)
    }
  }, []);
  
  useEffect(() => {
    fetchRows();
  }, [fetchRows]);

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "last_date_modified",
    direction: "descending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return dev_columns;

    return dev_columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredRecords = [...rows];
    // console.log(`Number of rows: ${rows.length}`)

    if (hasSearchFilter) {
      filteredRecords = filteredRecords.filter((row) =>
        row.assignee.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredRecords = filteredRecords.filter((row) =>
        Array.from(statusFilter).includes(row.case_status_id),
        // console.log(filteredRecords)
        // console.log(rows)
      );
    }
    console.log(filteredRecords)
    return filteredRecords;
  }, [filterValue, hasSearchFilter, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  // console.log(filteredItems)
  // console.log(rowsPerPage)
  // console.log(pages)

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: DevPageTypes, b: DevPageTypes) => {
      const first = a[sortDescriptor.column as keyof DevPageTypes] as number;
      const second = b[sortDescriptor.column as keyof DevPageTypes] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((record: DevPageTypes, columnKey: React.Key) => {
    const cellValue = record[columnKey as keyof DevPageTypes] as string;

    switch (columnKey) {
      case "case_number":
        return (
          <div className="flex flex-col">
            <Link href="/" className="text-bold text-small text-blue-600 capitalize">{cellValue}</Link>
            <p className="text-bold text-tiny capitalize">Time: {record.case_time}</p>
            <p className="text-bold text-tiny capitalize">Incident type: {record.case_type}</p>

          </div>
        );
      case "assignee":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
          </div>
        );
      case "victim_names":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{record.victim_names}</p>
          </div>
        );
      case "victim_emails":
        return(
          <div className="flex flex-col">
            <p className="text-bold text-small">{record.victim_emails}</p>
          </div>
        );
      case "victim_phone_numbers":
        return(
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{record.victim_phone_numbers}</p>
          </div>
        );
      case "case_status":
        return (
          <Chip className="capitalize" color={statusColorMap[record.case_status]} radius="sm" size="sm" variant="flat">
            {record.case_status}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Tooltip content="View">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <ViewCaseRecord
                  id={record.id}
                  emails={record.victim_emails}
                  case_number={record.case_number}
                  case_time={record.case_time}
                  case_type={record.case_type}
                  assignee={record.assignee}
                  victims={record.victim_names}
                  last_modified_by={record.last_modified_by}
                  last_modified_time={record.last_date_modified}
                  phone_numbers={record.victim_phone_numbers}
                  status={record.case_status}
                />
              </span>
            </Tooltip>
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
      console.log(value);
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
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by assignee..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
            variant="faded"
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button 
                  className="bg-stone-800 text-white" 
                  endContent={<ChevronDownIcon className="text-small" />} 
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
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
                {dev_columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-small">Total cases: {filteredItems.length }</span>
          <label className="flex items-center text-small">
            Rows per page:
            <select defaultValue={5}
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
    filterValue,
    statusFilter,
    visibleColumns,
    onClear,
    onSearchChange,
    onRowsPerPageChange,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-black-400">
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
          <Button className="text-white bg-stone-800" isDisabled={pages === 1} 
          size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button className="text-white bg-stone-800" isDisabled={pages === 1} 
          size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [
    selectedKeys,
    filteredItems.length,
    onPreviousPage,
    onNextPage,
    page, 
    pages, 
  ]);

  return (
    <Table
      aria-label="Data table for a user's case data"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[1000px]",
        th: "text-white bg-stone-800",
        tr: "divide-y divide-solid"
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
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
      <TableBody emptyContent={"No records found"} items={sortedItems} 
      isLoading={isLoading} loadingContent={<Spinner label="Loading..." />}
      >
        {filteredItems.map((row) =>
          <TableRow key={row.id}>
            {(columnKey) => <TableCell>{renderCell(row, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default DevPage