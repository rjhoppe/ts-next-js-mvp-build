import React, { useState } from 'react'
import {  
  Button,
  Textarea,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

// import { sendSMS } from "@/utils"

import { RiTestTubeFill } from "react-icons/ri";

const TempTestModal = ({ template, type, subject, body } : TempTestModalProps) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [testData, setTestData] = useState("");

  const handleInputChange = (e: any) => {
    setTestData(e.target.value);
  };

  const smsApiCall = async () => {
    await fetch('api/test', {
      method: 'POST',
      headers: new Headers ({
        "content-type": "application/json",
      }),
      body: JSON.stringify({ phone_number: testData, message: body }),
    })
  }

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
                  <Input isRequired onChange={handleInputChange} label={`Recipient ${type}`}
                  {... type === "Email" ? {placeholder:"example@axon.com"} : {placeholder:"+12345678901"}}>

                  </Input>
                  {
                    type === 'Email' ? <Input isReadOnly label='Subject' placeholder={subject}></Input> : null
			            }
                  <Textarea isReadOnly label='Message' placeholder={body}></Textarea>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={smsApiCall}>
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