"use client";

import React from "react";
import { Spinner } from "@nextui-org/react";
import useSupabaseBrowser from "@/utils/supabase-browser";
import { getUserTempMsg } from "@/queries/get-user-temp-msg";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import EditTempMsg from "./EditTempMsg";

type EditTempMsgFetchProps = {
  id: string;
};

export default function EditTempMsgFetch({ id }: EditTempMsgFetchProps) {
  const supabase = useSupabaseBrowser();
  const {
    data: rows,
    isLoading,
    isError,
  } = useQuery(getUserTempMsg(supabase, id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !rows) {
    return <div>Error</div>;
  }

  if (rows.length > 0) {
    return <EditTempMsg rows={rows} />;
  } else {
    return <Spinner label="Data loading..." />;
  }
}
