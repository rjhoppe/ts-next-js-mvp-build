"use client";

import React from "react";
import DataTable from "@/components/DataTable";
import { Spinner } from "@nextui-org/react";
import useSupabaseBrowser from "@/utils/supabase-browser";
import { getUserCases } from "@/queries/get-user-cases";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";

export default function DataTableFetch() {
  const supabase = useSupabaseBrowser();
  const { data: rows, isLoading, isError } = useQuery(getUserCases(supabase));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !rows) {
    return <div>Error</div>;
  }

  if (rows.length > 0) {
    return <DataTable rows={rows} />;
  } else {
    return <Spinner label="Data loading..." />;
  }
}
