import { Database } from "./supabase"

export type DevPageTypes = Database["public"]["Tables"]["cases_test_upload"]["Row"];
export type DataTableTypes = Database["public"]["Tables"]["cases_test_upload"]["Row"];

export type TempTableTypes = Database["public"]["Tables"]["templates"]["Row"];
export type RulesTableTypes = Database["public"]["Tables"]["rules"]["Row"];