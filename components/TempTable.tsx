"use client"
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  Chip,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from "@nextui-org/react";

import TempTestModal from "./TempTestModal";
import EditTempRecord from "./EditTempRecord";
import ViewTempRecord from "./ViewTempRecord";

import { 
  PlusIcon,
  VerticalDotsIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@/components/icons"

import { temp_columns, statusOptions} from "@/constants/index";
import { capitalize } from "@/app/utils";
import { TempTableTypes } from "@/types/collection";

const activeColorMap: Record<string, ChipProps["color"]> = {
  "True": "success",
  "False": "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["id", "template_name", "last_date_modified", "last_modified_by", 
"active", "type", "actions"];

type TempTableProps = {
  rows: TempTableTypes[]
}

const TempTable = ({ rows }: TempTableProps) => {
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
    if (visibleColumns === "all") return temp_columns;

    return temp_columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredRecords = [...rows];

    if (hasSearchFilter) {
      filteredRecords = filteredRecords.filter((record) =>
        record.template_name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredRecords = filteredRecords.filter((record) =>
        Array.from(statusFilter).includes(record.active),
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
    return [...items].sort((a: TempTableTypes, b: TempTableTypes) => {
      const first = a[sortDescriptor.column as keyof TempTableTypes] as number;
      const second = b[sortDescriptor.column as keyof TempTableTypes] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((record: TempTableTypes, columnKey: React.Key) => {
    const cellValue = record[columnKey as keyof TempTableTypes] as string;

    switch (columnKey) {
      case "active":
        return (
          <Chip className="capitalize" color={activeColorMap[record.active]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="flex justify-center items-center">
            <div className="flex">
              <Tooltip content="Test">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <TempTestModal
                    template={record.template_name}
                    type={record.type}
                    subject={record.subject}
                    body={record.message}
                  />
                </span>
              </Tooltip>
              <Tooltip content="Edit">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditTempRecord 
                    template={record.template_name}
                    type={record.type}
                    subject={record.subject}
                    body={record.message}
                    active={record.active}
                  />
                </span>
              </Tooltip>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="light text-foreground" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem isReadOnly key='view_temp' >
                  <ViewTempRecord
                    id={record.template_id}
                    last_modified_time={record.last_date_modified}
                    last_modified_by={record.last_modified_by}
                    template={record.template_name}
                    type={record.type}
                    subject={record.subject}
                    body={record.message}
                    active={record.active}
                  />
                </DropdownItem>
                <DropdownItem isReadOnly key='delete_temp'>Delete</DropdownItem>
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
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by template name..."
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
                {temp_columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button as={Link} href="/create-template" color="primary" 
            className="bg-stone-800 text-white" endContent={<PlusIcon />}>
              Create Template
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-small">Total templates: {rows.length}</span>
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
      <div className="py-2 px-2 flex justify-between items-center">
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
          <Button className="bg-stone-800 text-white" size="sm" 
          variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button className="bg-stone-800 text-white" size="sm" 
          variant="flat" onPress={onNextPage}>
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
      aria-label="Data table for user created templates"
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
            className={column.uid === "actions" ? "text-center" : ""}
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No records found"} items={sortedItems}>
        {(row) => (
          <TableRow key={row.id}>
            {(columnKey) => <TableCell>{renderCell(row, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default TempTable