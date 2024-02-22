"use client";

import {
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell, 
  getKeyValue
} from "@nextui-org/react";

import supabase from "@/lib/supabase"
import { dev_columns } from "@/constants/index";
import { DevPageTypes } from "@/types/collection"
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect, useCallback } from "react";

// const INITIAL_VISIBLE_COLUMNS = ["case_number", "assignee", "victim_names", "case_status", "last_modified_time"];
// const rows = ['test'];
// const columns = ['test'];

const DevPage = () => {
  const [rows, setRows] = useState<DevPageTypes[]>([]);
  const fetchRows = useCallback(async () => {
    const { data, error } = await supabase
    .from('cases_test_upload')
    .select(`*`)
    .returns<DevPageTypes[]>();
    if (error) {
      console.log("error", error);
    } else {
      setRows(data);
    }
  }, []);
  
  useEffect(() => {
    fetchRows();
  }, [fetchRows]);

  return ( 
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {dev_columns.map((column) =>
          <TableColumn key={column.uid}>{column.name}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {rows.map((row) =>
          <TableRow key={row.id}>
            {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default DevPage