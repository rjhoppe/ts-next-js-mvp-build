'use client'

import TempEdit from "@/components/TempEdit"
import TempPreview from "@/components/TempPreview"
import RecordBreadcrumb from "@/components/RecordBreadcrumb"
import { Divider } from "@nextui-org/divider"
import { useState } from "react";

const CreateTemplate = () => {

  const [data, setData] = useState('')

	const childToParent = (childdata: string) => {
		setData(childdata);
	};

  return (
    <>
      <h1 className="mt-5 text-lg">Send email</h1>
      <Divider />
      <RecordBreadcrumb childToParent={childToParent}/>
      {
				data === 'preview' ? <TempPreview /> : <TempEdit />
			}
    </>
  )
}

export default CreateTemplate