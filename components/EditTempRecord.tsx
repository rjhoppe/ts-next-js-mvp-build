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
import supabase from "@/lib/supabase";

const EditTempRecord = ({ template, type, subject, body, active, templateID }: EditTempRecordProps) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [templateName, setTemplateName] = React.useState(template)
  const [activeStatus, setActiveStatus] = React.useState(active)
  const [activeSubject, setActiveSubject] = React.useState(subject)

  const handleSubmit = async () => {
    try {
      const { data } = await supabase
      .from('templates')
      // @ts-ignore
      .update({ 
        'template_name': templateName,
        'active': activeStatus,
        'subject': activeSubject,
      })
      .eq('template_id', templateID )
      .select()

      if (data) {
        console.log(data)
      }
        
    } catch (error) {
      console.log(error)
    }
  }

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
                  <Input label='Template Name' defaultValue={template} onChange={(e) => {setTemplateName(e.target.value)}}></Input>
                  <Select
                    label="Active"
                    defaultSelectedKeys={[active]}
                    onChange={(e) => {setActiveStatus(e.target.value)}}
                  >
                    <SelectItem key="True" value="True">True</SelectItem>
                    <SelectItem key="False" value="False">False</SelectItem>
                  </Select>
                  {
                    type === 'Email' ? <Input label='Subject' defaultValue={subject} onChange={(e) => {setActiveSubject(e.target.value)}}></Input> : null
                  }
                  <Textarea label='Message' readOnly placeholder={body}></Textarea>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className='flex gap-5'>
                  <div className='flex mr-20'>
                    <Button color="secondary">
                      Edit Message
                    </Button>
                  </div>
                  <div className='flex gap-5'>
                    <Button color="danger" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button color="primary" onPress={handleSubmit}>
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
  templateID: string;
};

export default EditTempRecord