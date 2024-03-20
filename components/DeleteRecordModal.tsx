import {  
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Popover, 
  PopoverTrigger, 
  PopoverContent,
  useDisclosure
} from "@nextui-org/react";

import supabase from "@/lib/supabase";

type DeleteRecordProps = {
  id: string;
  database: 'rules' | 'templates'
}

const DeleteRecordModal = ({ id, database }: DeleteRecordProps) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleSubmit = async () => {
    try {
      // @ts-ignore
      const { data } = await supabase
      .from(database)
      .delete()
      .eq('template_id', id)

      if (data) {
        console.log(data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button className='flex bg-transparent ml-1' isIconOnly onPress={onOpen}>
        Delete
      </Button>
      <Modal disableAnimation size="xs" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex justify-center mt-5 -mb-2'>
                Delete Template: {id}?
              </ModalHeader>
              <ModalBody className='flex justify-center'>
                <div className='flex'>
                  <p>Are you sure you want to do delete this record? This action is irreversible.</p>
                </div>
              </ModalBody>
              <ModalFooter className='flex justify-center'>
                <div className='flex justify-center gap-5'>
                  <Button color="danger" onPress={onClose}>
                    Cancel
                  </Button>
                  <Popover placement="bottom-start">
                    <PopoverTrigger>
                      <Button color="primary" onClick={handleSubmit}>
                        Confirm
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2">
                        <h3 className="text-small font-bold">
                          Record {id} Deleted
                        </h3>
                        <div className="text-tiny">Your record was successfully deleted. Please refresh the page.</div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteRecordModal