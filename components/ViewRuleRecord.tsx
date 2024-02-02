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
import { EditRuleRecordProps } from "./EditRuleRecord";

const ViewRuleRecord = ({ id, if_logic, then_logic, delay, 
last_modified_by, last_modified_time  } : ViewRuleRecordProps ) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <>
      <Button className='flex bg-transparent' isIconOnly onPress={onOpen}>
        View
      </Button>
      <Modal scrollBehavior="inside" disableAnimation isOpen={isOpen} 
      onOpenChange={onOpenChange} placement="bottom">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between">
                View Rule {id}
              </ModalHeader>
              <ModalBody>
                <div className='flex flex-col gap-5'>
                  <Input readOnly label='If Logic' defaultValue={if_logic}></Input>
                  <Input readOnly label='Then Logic' defaultValue={then_logic}></Input>
                  <Input readOnly label='Delay' defaultValue={delay}></Input>
                  <Input readOnly label='Last Modified Date' defaultValue={last_modified_time}></Input>
                  <Input readOnly label='Last Modified By' defaultValue={last_modified_by}></Input>
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

export type ViewRuleRecordProps = EditRuleRecordProps & {
  id: string;
  last_modified_time: string;
  last_modified_by: string;
};

export default ViewRuleRecord