"use client";
import React from "react";

import {
  Select,
  Button,
  Link,
  SelectItem,
  Divider,
  Input,
} from "@nextui-org/react";

import { statusOptions, rules_columns } from "@/constants/index";
import RichTextEditor from "./RichTextEditor";
import supabase from "@/lib/supabase";
import SuccessPopover from "./SuccessPopover";

const AddRule = () => {
  const [sendType, setSendType] = React.useState("Email");
  const [delay, setDelay] = React.useState("");
  const [lastModifiedBy, setLastModifiedBy] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [ifLogic, setIfLogic] = React.useState("");
  const [thenLogic, setThenLogic] = React.useState("");
  const [successStatus, setSuccessStatus] = React.useState(false);

  const handleSubmit = async () => {
    try {
      // @ts-ignore
      const { data } = await supabase.from("rules").insert({
        rule_id: "R0000000",
        delay: "Test",
        last_modified_by: "Test",
        created_by: "Test",
        client_code: 12345,
        police_dpt: "Test",
        status: "Test",
        if_logic: "Test",
        then_logic: "Test",
      });
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }

    setSuccessStatus(true);
  };

  return (
    <section className="mt-10">
      <div>
        <h2 className="text-xl">Add rule</h2>
        <p className="text-sm my-2">
          (Description on how to add a successful if then rule) Learn more on
          MyAxon article (Link)
        </p>
      </div>
      <Divider className="my-2" />
      <h3 className="text-lg my-4">If</h3>
      <div className="my-6">
        <Select label="Case Status equals" className="max-w-xl" isRequired>
          {statusOptions.map((status) => (
            <SelectItem key={status.name}>{status.name}</SelectItem>
          ))}
        </Select>
      </div>
      <Divider className="my-2" />
      <h3 className="text-lg my-4">Then</h3>
      <div className="my-6">
        <Select
          label="Send"
          className="max-w-xl"
          isRequired
          defaultSelectedKeys={["Email"]}
          onChange={(e) => {
            setSendType(e.target.value);
          }}
        >
          <SelectItem key="SMS" value="SMS">
            SMS
          </SelectItem>
          <SelectItem key="Email" value="Email">
            Email
          </SelectItem>
        </Select>
      </div>
      <div className="flex items-center my-6 gap-5">
        <Select label="Using Template" className="w-72" isRequired>
          {rules_columns.map((column) => (
            <SelectItem key={column.name}>{column.name}</SelectItem>
          ))}
        </Select>
        <Button href="/" as={Link} color="secondary">
          Edit Template
        </Button>
        <Button href="/create-template" as={Link} color="secondary">
          Create Template
        </Button>
      </div>
      {sendType === "Email" ? (
        <Input className="my-6 max-w-xl" label="Email Subject"></Input>
      ) : null}
      <div className="flex flex-col justify-center mt-5 max-w-xl">
        <RichTextEditor />
      </div>
      <div className="flex justify-start gap-5 max-w-xl">
        <Button href="/" as={Link} className="flex" color="danger">
          Cancel
        </Button>
        <Button className="flex" color="primary" onClick={handleSubmit}>
          Save
        </Button>
        {successStatus === true ? (
          <SuccessPopover placement="left" action="created" recordType="rule" />
        ) : null}
      </div>
    </section>
  );
};

export default AddRule;
