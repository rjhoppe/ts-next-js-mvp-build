'use client';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import DataTable from "@/components/DataTable";
import RulesTable from "@/components/RulesTable";
import TempTable from "@/components/TempTable";
import LayoutBreadcrumb from "@/components/LayoutBreadcrumb";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";
import DataTableFetch from "@/components/DataTableFetch";
// import { title, subtitle } from "@/components/primitives";

export default function Home() {

	const [data, setData] = useState('')

	const childToParent = (childdata: string) => {
		setData(childdata);
	};

	return (
		<>
			<LayoutBreadcrumb childToParent={childToParent}/>
			<Divider className='my-4'/>
			{
				data === 'templates' ? <TempTable /> : data === 'rules' ? <RulesTable />
				: <DataTableFetch />
			}
		</>
	)
}