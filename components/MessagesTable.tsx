'use client';

import React from 'react'
import { msg_columns, msg_records } from '@/constants/index';
import { 
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell, 
  getKeyValue
} from "@nextui-org/react";

const MessagesTable = () => {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={msg_columns}>
        {(column) => (
          <TableColumn key={column.uid}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={msg_records}>
        {(item) => (
          <TableRow key={item.msg_id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default MessagesTable