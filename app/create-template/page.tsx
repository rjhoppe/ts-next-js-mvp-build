'use client'

import TempEdit from "@/components/TempEdit"
import TempPreview from "@/components/TempPreview"
import RecordBreadcrumb from "@/components/RecordBreadcrumb"
import { RadioGroup, Radio } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider"
import { useState } from "react";
import React from "react";

const CreateTemplate = () => {
  const [parentData, setParentData] = useState('email');

  const handleRadioChange = (e: any) => {
    setParentData(prevValue => {
      if (prevValue === "email") {
       return
      }
      return e.target.value
    });
  }
  
  const [data, setData] = useState('');
	const childToParent = (childdata: string) => {
		setData(childdata);
	};

  return (
    <> 
      <div className="flex gap-72 items-center">
        <h1 className="mt-5 mb-5 text-lg">Create Template</h1>
        <RadioGroup
          orientation="horizontal"
          defaultValue="email"
          onChange={handleRadioChange}
        >
          <Radio key="email" value="email">Email</Radio>
          <Radio key="sms" className="ml-2" value="sms">SMS</Radio>
        </RadioGroup>
      </div>
      <Divider />
      <RecordBreadcrumb childToParent={childToParent}/>
      {
				data === 'preview' ? <TempPreview /> : <TempEdit parentToChild={parentData} />
			}
    </>
  )
}

export default CreateTemplate