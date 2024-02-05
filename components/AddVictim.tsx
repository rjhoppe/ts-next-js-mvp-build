import {
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  Button, 
  Input
} from "@nextui-org/react";

const AddVictim = () => {
  return (
    <Popover placement="top" showArrow offset={10}>
      <PopoverTrigger>
        <Button color="secondary" variant="ghost">Add Victim</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <p className="text-small font-bold text-foreground" {...titleProps}>
              Victim Info
            </p>
            <div className="mt-2 flex flex-col gap-2 w-full">
              <Input isRequired label="Full Name" size="sm" variant="bordered" />
              <Input isRequired label="Email" size="sm" variant="bordered" />
              <Input isRequired label="Phone Number" size="sm" variant="bordered" />
              <Button color="primary">Submit</Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default AddVictim