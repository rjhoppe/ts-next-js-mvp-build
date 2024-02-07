"use client"
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
} from "@nextui-org/react";

import ViewCaseRecord from "./ViewCaseRecord";

import { 
  ChevronDownIcon,
  SearchIcon,
} from "@/components/icons"

import { columns, records, statusOptions } from "@/constants/index";
import { capitalize } from "@/app/utils";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  invest_assigned: "primary",
  court_scheduled: "primary",
  rejected: "danger",
  closed: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["case_number", "assignee", "victims", "status", "last_modified_time", "actions"];

type Records = typeof records[0];

const DataTable = () => {
  
	const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "last_modified_time",
    direction: "descending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredRecords = [...records];

    if (hasSearchFilter) {
      filteredRecords = filteredRecords.filter((record) =>
        record.assignee.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredRecords = filteredRecords.filter((record) =>
        Array.from(statusFilter).includes(record.status),
      );
    }

    return filteredRecords;
  }, [filterValue, hasSearchFilter, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Records, b: Records) => {
      const first = a[sortDescriptor.column as keyof Records] as number;
      const second = b[sortDescriptor.column as keyof Records] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((record: Records, columnKey: React.Key) => {
    const cellValue = record[columnKey as keyof Records] as string;

    switch (columnKey) {
      case "case_number":
        return (
          <div className="flex flex-col">
            <Link href="/" underline="always" className="text-bold text-small capitalize">{cellValue}</Link>
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
      case "victims":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">
              {
                typeof(record.victims) === 'object' 
                ? record.victims.join(", ") 
                : record.victims
              }
            </p>
          </div>
        );
      case "emails":
        return(
          <div className="flex flex-col">
            <p className="text-bold text-small">
              {
                typeof(record.emails) === 'object' 
                ? record.emails.join(", ")
                : record.emails
              }
            </p>
          </div>
        );
      case "phone_numbers":
        return(
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">
              {
                typeof(record.phone_numbers) === 'object' 
                ? record.phone_numbers.join(", ") 
                : record.phone_numbers
              }
            </p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[record.status]} radius="sm" size="sm" variant="flat">
            {cellValue.split("_").join(" ")}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Tooltip content="View">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <ViewCaseRecord
                  id={record.id}
                  emails={record.emails}
                  case_number={record.case_number}
                  case_time={record.case_time}
                  case_type={record.case_type}
                  assignee={record.assignee}
                  victims={record.victims}
                  last_modified_by={record.last_modified_by}
                  last_modified_time={record.last_modified_time}
                  phone_numbers={record.phone_numbers}
                  status={record.status}
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
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-small">Total records: {records.length}</span>
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
      aria-label="Example table with custom cells, pagination and sorting"
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
      <TableBody emptyContent={"No records found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default DataTable