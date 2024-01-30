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

const TempTestModal = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className='flex bg-transparent' isIconOnly onPress={onOpen}>
        <RiTestTubeFill />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between">
                Configure Template Test
                <Switch className='mr-5'>
                  SMS
                </Switch>
              </ModalHeader>
              <ModalBody>
                <div className='flex flex-col gap-5'>
                  <Input isReadOnly label='Template' placeholder='Template Name'></Input>
                  <Input isRequired type='email' label='Email'></Input>
                  <Input isReadOnly label='Subject' placeholder='Victim Notification'></Input>
                  <Textarea isReadOnly label='Message' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.'
                  >
                  </Textarea>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
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
}

export default TempTestModal