import {  
  Button,
  Select,
  SelectItem,
  Textarea,
  Switch,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { TempTestModalProps } from './TempTestModal';

const ViewTempRecord = ({ id, active, last_modified_time, last_modified_by,
template, type, subject, body } : TempViewRecordProps) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className='flex bg-transparent' isIconOnly onPress={onOpen}>
        View
      </Button>
      <Modal disableAnimation isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                View {template}
              </ModalHeader>
              <ModalBody>
                <div className='flex flex-col gap-5'>
                  <Input readOnly label='Template ID' defaultValue={id}></Input>
                  <Input readOnly label='Template Name' defaultValue={template}></Input>
                  <Input readOnly label='Last Modified Date' defaultValue={last_modified_time}></Input>
                  <Input readOnly label='Last Modified By' defaultValue={last_modified_by}></Input>
                  <Input readOnly label='Active' defaultValue={active}></Input>
                  {
                    type === 'Email' ? <Input readOnly label='Subject' defaultValue={subject}></Input> : null
                  }
                  <Textarea label='Message' readOnly value={body}></Textarea>
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

export type TempViewRecordProps = TempTestModalProps & {
  id: string;
  active: string;
  last_modified_time: string;
  last_modified_by: string;
};

export default ViewTempRecord