"use client";

import TempEdit from "@/components/TempEdit";
import TempPreview from "@/components/TempPreview";
import RecordBreadcrumb from "@/components/RecordBreadcrumb";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";
import React from "react";
import { TempTableTypes } from "@/types/collection";

type TempTableProps = {
  rows: TempTableTypes[];
};

const EditTempMsg = ({ rows }: TempTableProps) => {
  const [parentData, setParentData] = useState(rows[0].type);
  // Need to rework this section, very convoluted
  // Sometimes sending undefined

  // const handleRadioChange = (e: any) => {
  //   setParentData(prevValue => {
  //     if (prevValue === "email") {
  //      return
  //     }
  //     return e.target.value
  //   });
  // }

  const [data, setData] = useState(rows[0].type);
  const childToParent = (childdata: string) => {
    setData(childdata);
  };

  return (
    <>
      <div className="flex gap-72 items-center">
        <h1 className="mt-5 mb-5 -mr-16 text-lg">
          Edit Template: {rows[0].template_id}
        </h1>
        <RadioGroup
          orientation="horizontal"
          defaultValue={data.toLowerCase()}
          onValueChange={setParentData}
        >
          <Radio key="email" value="email">
            Email
          </Radio>
          <Radio key="sms" className="ml-2" value="sms">
            SMS
          </Radio>
        </RadioGroup>
      </div>
      <Divider />
      <RecordBreadcrumb childToParent={childToParent} />
      {data === "preview" ? (
        <TempPreview />
      ) : (
        <TempEdit
          parentToChild={parentData.toLowerCase()}
          editData={true}
          d_clientCode={rows[0]["client_code"]}
          d_police_dpt={rows[0]["police_dpt"]}
          d_template_name={rows[0]["template_name"]}
          d_template_id={rows[0]["template_id"]}
          d_type={rows[0]["type"]}
          d_ccRecipients={rows[0]["cc_recipients"]}
          d_active={rows[0]["active"]}
          d_subject={rows[0]["subject"]}
          d_message={rows[0]["message"]}
        />
      )}
    </>
  );
};

export default EditTempMsg;
