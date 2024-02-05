import React from 'react'

import {  
  Button,
  Select,
  SelectItem,
  Textarea,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { HiPencil } from "react-icons/hi";
import { TempTestModalProps } from './TempTestModal';

const EditTempRecord = ({ template, type, subject, body, active }: EditTempRecordProps ) => {
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
                Edit: {template}
              </ModalHeader>
              <ModalBody>
                <div className='flex flex-col gap-5'>
                  <Input label='Template Name' defaultValue={template}></Input>
                  <Select
                    label="Active"
                    defaultSelectedKeys={[active]}
                  >
                    <SelectItem key="True" value="True">True</SelectItem>
                    <SelectItem key="False" value="False">False</SelectItem>
                  </Select>
                  {
                    type === 'Email' ? <Input label='Subject' defaultValue={subject}></Input> : null
                  }
                  <Textarea label='Message' readOnly placeholder={body}></Textarea>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className='flex gap-5'>
                  <div className='flex mr-20'>
                    <Button color="secondary" variant="ghost">
                      Edit Message
                    </Button>
                  </div>
                  <div className='flex gap-5'>
                    <Button color="danger" variant="ghost" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Save
                    </Button>
                  </div>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export type EditTempRecordProps = TempTestModalProps & {
  active: string;
};

export default EditTempRecord