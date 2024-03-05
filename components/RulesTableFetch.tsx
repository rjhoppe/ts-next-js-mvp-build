'use client';

import React from 'react'
import RulesTable from '@/components/RulesTable'
import { Spinner } from '@nextui-org/react';
import useSupabaseBrowser from '@/utils/supabase-browser'
import { getUserRules } from '@/queries/get-user-rules'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'

export default function RulesTableFetch() {
  const supabase = useSupabaseBrowser()
  const { data: rows, isLoading, isError } = useQuery(getUserRules(supabase))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !rows) {
    return <div>Error</div>
  }
  
  if (rows.length > 0) {
    return <RulesTable rows={rows}/>
  } else {
    return <Spinner label='Data loading...'/>;
  }
};