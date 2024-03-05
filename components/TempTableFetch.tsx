'use client';

import React from 'react'
import TempTable from '@/components/TempTable'
import { Spinner } from '@nextui-org/react';
import useSupabaseBrowser from '@/utils/supabase-browser'
import { getUserTemps } from '@/queries/get-user-temps'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'

export default function TempTableFetch() {
  const supabase = useSupabaseBrowser()
  const { data: rows, isLoading, isError } = useQuery(getUserTemps(supabase))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !rows) {
    return <div>Error</div>
  }
  
  if (rows.length > 0) {
    return <TempTable rows={rows}/>
  } else {
    return <Spinner label='Data loading...'/>;
  }
};