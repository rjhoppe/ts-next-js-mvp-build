// "use client";

// import React from "react";
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   Tooltip,
//   Input,
//   Button,
//   DropdownTrigger,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Chip,
//   Pagination,
//   Selection,
//   ChipProps,
//   SortDescriptor,
//   Link,
//   Spinner,
// } from "@nextui-org/react";

// import supabase from "@/lib/supabase";
// import { DevPageTypes } from "@/types/collection";
// import { useState, useEffect, useCallback } from "react";

// import ViewCaseRecord from "@/components/ViewCaseRecord";

// import { 
//   ChevronDownIcon,
//   SearchIcon,
// } from "@/components/icons"

// import { data_columns, statusOptions } from "@/constants/index";
// import { capitalize } from "@/app/utils";
// // import { data } from "autoprefixer";

// import useSupabaseBrowser from '@/utils/supabase-browser'
// import { getUserCases } from '@/queries/get-user-cases'
// import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
// import { data } from "autoprefixer";

// const statusColorMap: Record<string, ChipProps["color"]> = {
//   "Active": "success",
//   "Investigator Assigned": "primary",
//   "Court Scheduled": "primary",
//   "Rejected": "danger",
//   "Closed": "danger",
// };

// const INITIAL_VISIBLE_COLUMNS = ["case_number", "assignee", "victim_names", "case_status", "last_date_modified", "actions"];

// // type DevPageProps = ReturnType<DevPageTypes[]>;

// export default function DevPage3() {
//   const supabase = useSupabaseBrowser()
//   const { data: rows, isLoading, isError } = useQuery(getUserCases(supabase))

//   if (isLoading) {
//     return <div>Loading...</div>
//   }

//   if (isError || !rows) {
//     return <div>Error</div>
//   }

//   return (
//     <div>
//       <p>{rows[2].assignee}</p>
//     </div>
//   )
// }