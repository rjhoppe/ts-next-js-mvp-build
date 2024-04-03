import React from "react";

import {
  Button,
  Select,
  SelectItem,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { HiPencil } from "react-icons/hi";
import SuccessPopover from "./SuccessPopover";

import supabase from "@/lib/supabase";

export type EditRuleRecordProps = {
  id: string;
  if_logic: string;
  then_logic: string;
  delay: string;
};

const EditRuleRecord = ({
  id,
  if_logic,
  then_logic,
  delay,
}: EditRuleRecordProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [ifLogic, setIfLogic] = React.useState(if_logic);
  const [thenLogic, setThenLogic] = React.useState(then_logic);
  const [recordDelay, setRecordDelay] = React.useState(delay);
  const [successStatus, setSuccessStatus] = React.useState(false);

  // Set up fetch of org templates after user auth config'd
  // const getTemplates = async () = {

  // }

  const handleSubmit = async () => {
    try {
      const { data } = await supabase
        .from("rules")

        // I have NO IDEA why I get a 'type 'string' is not assignable to parameter of type 'never''
        // I spent a whole day trying to fix this thing
        // It works fine, even with TS bitching. Might be related to PostgrestQueryBuilder file
        // but nothing I did there seemed to fix it. DELETE and GET requests don't throw any errors
        // @ts-ignore
        .update({
          if_logic: ifLogic,
          then_logic: thenLogic,
          delay: recordDelay,
        })
        .eq("rule_id", id)
        .select();

      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }

    setSuccessStatus(true);
  };

  return (
    <>
      <Button className="flex bg-transparent" isIconOnly onPress={onOpen}>
        <HiPencil />
      </Button>
      <Modal disableAnimation isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Edit Rule: {id}</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-5">
                  <Select
                    label="If Logic"
                    defaultSelectedKeys={[if_logic]}
                    onChange={(e) => {
                      setIfLogic(e.target.value);
                    }}
                  >
                    <SelectItem
                      key="Status set to Rejected"
                      value="Status set to Rejected"
                    >
                      Status set to Rejected
                    </SelectItem>
                    <SelectItem
                      key="Status set to Investigator Assigned"
                      value="Status set to Investigator Assigned"
                    >
                      Status set to Investigator Assigned
                    </SelectItem>
                    <SelectItem
                      key="Status set to Closed"
                      value="Status set to Closed"
                    >
                      Status set to Closed
                    </SelectItem>
                    <SelectItem
                      key="Status set to Court Scheduled"
                      value="Status set to Court Scheduled"
                    >
                      Status set to Court Scheduled
                    </SelectItem>
                    <SelectItem
                      key="Status set to Active"
                      value="Status set to Active"
                    >
                      Status set to Active
                    </SelectItem>
                  </Select>
                  <Input label="Then Logic" defaultValue={then_logic}></Input>
                  <Select
                    label="Delay"
                    defaultSelectedKeys={[delay]}
                    onChange={(e) => {
                      setRecordDelay(e.target.value);
                    }}
                  >
                    <SelectItem key="1 Hour" value="1 Hour">
                      1 Hour
                    </SelectItem>
                    <SelectItem key="2 Hours" value="2 Hours">
                      2 Hours
                    </SelectItem>
                    <SelectItem key="3 Hours" value="3 Hours">
                      3 Hours
                    </SelectItem>
                    <SelectItem key="12 Hours" value="12 Hours">
                      12 Hours
                    </SelectItem>
                    <SelectItem key="24 Hours" value="24 Hours">
                      24 Hours
                    </SelectItem>
                  </Select>
                </div>
              </ModalBody>
              <ModalFooter className="flex">
                {successStatus === true ? (
                  <div className="flex mr-32 -ml-72">
                    <SuccessPopover
                      placement="bottom-start"
                      action="edited"
                      recordType="rule"
                    />
                  </div>
                ) : null}
                <div className="flex justify-items-end gap-5">
                  <Button color="danger" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={handleSubmit}>
                    Save
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditRuleRecord;
