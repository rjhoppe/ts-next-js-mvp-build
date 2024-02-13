import React from 'react'

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

const EditRuleRecord = ({ id, if_logic, then_logic, delay }: EditRuleRecordProps ) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className='flex bg-transparent' isIconOnly onPress={onOpen}>
        <HiPencil />
      </Button>
      <Modal disableAnimation isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                Edit Rule: {id}
              </ModalHeader>
              <ModalBody>
                <div className='flex flex-col gap-5'>
                  <Input label='If Logic' defaultValue={if_logic}></Input>
                  <Input label='Then Logic' defaultValue={then_logic}></Input>
                  <Select 
                    label="Delay"
                    defaultSelectedKeys={[delay]}
                  >
                    <SelectItem key="1 hour" value="1 hour">1 hour</SelectItem>
                    <SelectItem key="2 hours" value="2 hours">2 hours</SelectItem>
                    <SelectItem key="3 hours" value="3 hours">3 hours</SelectItem>
                    <SelectItem key="12 hours" value="12 hours">12 hours</SelectItem>
                    <SelectItem key="24 hours" value="24 hours">24 hours</SelectItem>
                  </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className='flex gap-5'>
                  <Button color="danger" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={onClose}>
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

export type EditRuleRecordProps =  {
  id: string;
  if_logic: string;
  then_logic: string;
  delay: string;
};

export default EditRuleRecord