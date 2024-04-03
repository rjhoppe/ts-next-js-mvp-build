import { TypedSupabaseClient } from "@/utils/types";
import { TempTableTypes } from "@/types/collection";

export function getUserTemps(client: TypedSupabaseClient) {
  return client
    .from("templates")
    .select()
    .order("last_date_modified", { ascending: false })
    .returns<TempTableTypes[]>();
}
