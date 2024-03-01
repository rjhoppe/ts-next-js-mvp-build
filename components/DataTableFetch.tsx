'use client';

import React from 'react'
import { DataTableTypes } from "@/types/collection";
import { useState, useEffect, useCallback } from "react";
import supabase from "@/lib/supabase";
import DataTable from '@/components/DevPage2'
import { Spinner } from '@nextui-org/react';

const DataTableFetch = () => {
  const [rows, setRows] = useState<DataTableTypes[]>([]);
  const fetchRows = useCallback(async () => {
    const { data, error } = await supabase
    .from('cases_test_upload')
    .select()
    .order('last_date_modified', { ascending: false })
    .returns<DataTableTypes[]>();

    if (!data && !error) {
      console.log('Data is loading...')
    } else if (error) {
      console.log("error", error);
    } else {
      setRows(data);
    }
  }, []);
  
  useEffect(() => {
    fetchRows();
  }, [fetchRows]);

  if (rows.length > 0) {
    return <DataTable rows={rows}/>
  } else {
    return <Spinner label='Data loading...'/>;
  }
};

export default DataTableFetch