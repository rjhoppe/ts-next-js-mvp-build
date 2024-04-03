import { TypedSupabaseClient } from "@/utils/types";
import { DataTableTypes } from "@/types/collection";

export function getUserCase(client: TypedSupabaseClient, id: string) {
  return client
    .from("cases_test_upload")
    .select()
    .limit(1)
    .eq("case_id", id)
    .returns<DataTableTypes[]>();
}
