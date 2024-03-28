'use client';

import React from 'react'
import { Spinner } from '@nextui-org/react';
import useSupabaseBrowser from '@/utils/supabase-browser'
import { getUserCase } from '@/queries/get-user-case';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
import ViewFullCase from './ViewFullCase';

type ViewCaseFetchProps = {
  id: string;
}

export default function ViewCaseFetch({ id }: ViewCaseFetchProps) {
  const supabase = useSupabaseBrowser()
  const { data: rows, isLoading, isError } = useQuery(getUserCase(supabase, id))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !rows) {
    return <div>Error</div>
  }
  
  if (rows.length > 0) {
    return <ViewFullCase rows={rows}/>
  } else {
    return <Spinner label='Data loading...'/>;
  }
};