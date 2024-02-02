import React from 'react'
import {  
  Button,
  Textarea,
  Switch,
  Select,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { RiTestTubeFill } from "react-icons/ri";

const TempTestModal = ({ template, type, subject, body } : TempTestModalProps) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className='flex bg-transparent' isIconOnly onPress={onOpen}>
        <RiTestTubeFill />
      </Button>
      <Modal disableAnimation isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                Test {template}
              </ModalHeader>
              <ModalBody>
                <div className='flex flex-col gap-5'>
                  <Input isReadOnly label='Template' placeholder={template}></Input>
                  <Input isRequired label={`Recipient ${type}`}></Input>
                  {
                    type === 'Email' ? <Input isReadOnly label='Subject' placeholder={subject}></Input> : null
			            }
                  <Textarea isReadOnly label='Message' placeholder={body}></Textarea>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Send
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export type TempTestModalProps = {
  template: string;
  type: string;
  subject?: string;
  body: string;
}


export default TempTestModal