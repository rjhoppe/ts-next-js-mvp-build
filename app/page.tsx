'use client';
import LayoutBreadcrumb from "@/components/LayoutBreadcrumb";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";
import DataTableFetch from "@/components/DataTableFetch";
import RulesTableFetch from "@/components/RulesTableFetch";
import TempTableFetch from "@/components/TempTableFetch";
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
				data === 'templates' ? <TempTableFetch /> : data === 'rules' ? <RulesTableFetch />
				: <DataTableFetch />
			}
		</>
	)
}