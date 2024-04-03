import { TypedSupabaseClient } from "@/utils/types";
import { TempTableTypes } from "@/types/collection";

export function getUserTempMsg(client: TypedSupabaseClient, id: string) {
  return client
    .from("templates")
    .select()
    .limit(1)
    .eq("template_id", id)
    .returns<TempTableTypes[]>();
}
