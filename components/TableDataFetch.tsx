'use client';

import React from 'react'
import { DevPageTypes } from "@/types/collection";
import { useState, useEffect, useCallback } from "react";
import supabase from "@/lib/supabase";
import DevPage2 from '@/components/DevPage2'
import { Spinner } from '@nextui-org/react';

const TableDataFetch = () => {
  const [rows, setRows] = useState<DevPageTypes[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const fetchRows = useCallback(async () => {
    const { data, error } = await supabase
    .from('cases_test_upload')
    .select()
    .order('last_date_modified', { ascending: false })
    .returns<DevPageTypes[]>();

    if (!data && !error) {
      console.log('Data is loading...')
    } else if (error) {
      console.log("error", error);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setRows(data);
    }
  }, []);
  
  useEffect(() => {
    fetchRows();
  }, [fetchRows]);

  if (rows.length > 0) {
    return <DevPage2 rows={rows}/>
  } else {
    return <Spinner label='Data loading...'/>;
  }
};


export default TableDataFetch