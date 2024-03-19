import React from 'react'
import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent,
  Button
} from "@nextui-org/react";

type SuccessPopoverProps = {
  recordType: 'template' | 'rule';
}

const SuccessPopover = ({ recordType }: SuccessPopoverProps) => {
  return (
    <>
      <Popover defaultOpen={true} placement="right">
        <PopoverTrigger>
          <Button color='success' variant='flat' className='ml-72'>Success!</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <h3 className="text-small font-bold">
              Your {recordType} was created
            </h3>
            <div className="text-tiny">Refresh the page to view it on the {recordType} table</div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default SuccessPopover