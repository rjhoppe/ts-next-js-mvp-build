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

import { MdRemoveRedEye } from "react-icons/md";

const ViewCaseRecord = ({ id, emails, case_number, case_time, case_type, assignee, victims,
  last_modified_time, last_modified_by, phone_numbers, status } : ViewCaseRecordProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className='flex bg-transparent' isIconOnly onPress={onOpen}>
        <MdRemoveRedEye /> 
      </Button>
      <Modal scrollBehavior="inside" disableAnimation isOpen={isOpen} 
      onOpenChange={onOpenChange} placement="bottom">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                View {case_number}
              </ModalHeader>
              <ModalBody>
                <div className='flex flex-col gap-5'>
                  <Input readOnly label='Case ID' defaultValue={id.toString()}></Input>
                  <Input readOnly label='Case Number' defaultValue={case_number}></Input>
                  <Input readOnly label='Case Type' defaultValue={case_type}></Input>
                  <Input readOnly label='Case Time' defaultValue={case_time}></Input>
                  <Input readOnly label='Case Status' defaultValue={status.charAt(0).toUpperCase() + status.slice(1)}></Input>
                  {
                    typeof(victims) === 'object' 
                    ? <Textarea className="text-sm" label="Victims" startContent={victims.join(", ")} />
                    : <Input readOnly label='Case Victims' defaultValue={victims}></Input> 
                  }
                  {
                    typeof(emails) === 'object' 
                    ? <Textarea className="text-sm" label="Victim Emails" startContent={emails.join(", ")} />
                    : <Input readOnly label='Case Victims' defaultValue={emails}></Input> 
                  }
                                    {
                    typeof(phone_numbers) === 'object' 
                    ? <Textarea className="text-sm" label="Victim Phone Numbers" startContent={phone_numbers.join(", ")} />
                    : <Input readOnly label='Case Victims' defaultValue={phone_numbers}></Input> 
                  }
                  <Input readOnly label='Assignee' defaultValue={assignee}></Input>
                  <Input readOnly label='Last Modified By' defaultValue={last_modified_by}></Input>
                  <Input readOnly label='Last Modified Date' defaultValue={last_modified_time}></Input>
                  <Textarea
                    label="Case Notes"
                    placeholder="Enter your notes"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <div className='flex gap-5'>
                  <Button color="danger" variant="ghost" onPress={onClose}>
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

export type ViewCaseRecordProps = {
  id: number;
  emails: string | string[];
  case_number: string;
  case_type: string;
  case_time: string;
  assignee: string;
  victims: string | string[];
  last_modified_by: string;
  phone_numbers: string | string[];
  status: string;
  last_modified_time: string;
};


export default ViewCaseRecord