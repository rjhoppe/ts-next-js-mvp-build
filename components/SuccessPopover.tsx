import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

type SuccessPopoverProps = {
  recordType: "template" | "rule";
  placement: "left" | "right" | "bottom" | "bottom-start";
  action: "edited" | "created";
};

const SuccessPopover = ({
  recordType,
  placement,
  action,
}: SuccessPopoverProps) => {
  return (
    <>
      <Popover defaultOpen={true} placement={placement}>
        <PopoverTrigger>
          <Button color="success" variant="flat" className="ml-72">
            Success!
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <h3 className="text-small font-bold">
              Your {recordType} was {action}
            </h3>
            <div className="text-tiny">
              Refresh the page to view it on the {recordType} table
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SuccessPopover;
