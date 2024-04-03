import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
  input,
} from "@nextui-org/react";
import supabase from "@/lib/supabase";

type AddVictimProps = {
  // caseNumber: string | null;
  // victim_phone_numbers: string | string[] | null;
  // victim_emails: string | string[] | null;
  // victim_names: string | string[] | null;
  caseNumber: string;
  victim_phone_numbers: string | string[];
  victim_emails: string | string[];
  victim_names: string | string[];
};

// type Victims = {
//   caseNumber: string;
//   victim_phone_numbers: string;
//   victim_emails: string;
//   victim_names: string;
// }

const AddVictim = ({
  caseNumber,
  victim_phone_numbers,
  victim_emails,
  victim_names,
}: AddVictimProps) => {
  const [email, setEmail] = React.useState("");
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const [name, setName] = React.useState("");
  const validateName = (value: string) => value.length > 0;
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const validatePhoneNumber = (value: string) => value.length > 9;
  const [inputState, setInputState] = React.useState(false);

  const isEmailInvalid = React.useMemo(() => {
    if (email === "") return true;

    return validateEmail(email) ? false : true;
  }, [email]);

  const isNameInvalid = React.useMemo(() => {
    if (name === "") return true;

    return validateName(name) ? false : true;
  }, [name]);

  const isPhoneNumberInvalid = React.useMemo(() => {
    if (phoneNumber === "") return true;

    return validatePhoneNumber(phoneNumber) ? false : true;
  }, [phoneNumber]);

  const handleSubmit = async () => {
    try {
      victim_names = victim_names + ", " + name;
      victim_names.toString();
      victim_phone_numbers = victim_phone_numbers + ", " + phoneNumber;
      victim_emails = victim_emails + ", " + email;

      const { data } = await supabase
        .from("cases_test_upload")

        // I have NO IDEA why I get a 'type 'string' is not assignable to parameter of type 'never''
        // I spent a whole day trying to fix this thing
        // It works fine, even with TS bitching. Might be related to PostgrestQueryBuilder file
        // but nothing I did there seemed to fix it. DELETE and GET requests don't throw any errors
        // @ts-ignore
        .update({
          victim_names: victim_names,
          victim_emails: victim_emails,
          victim_phone_numbers: victim_phone_numbers,
        })
        .eq("case_number", caseNumber)
        .select();

      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }

    setInputState(true);
  };

  return (
    <Popover placement="top" showArrow offset={10}>
      <PopoverTrigger>
        <Button color="secondary">Add Victim</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <p className="text-small font-bold text-foreground" {...titleProps}>
              Victim Info
            </p>
            <div className="mt-2 flex flex-col gap-2 w-full">
              <Input
                isRequired
                label="Full Name"
                size="sm"
                variant="bordered"
                color={isNameInvalid ? "danger" : "success"}
                errorMessage={isNameInvalid && "Please enter name"}
                onValueChange={setName}
                isDisabled={inputState}
              />
              <Input
                isRequired
                label="Email"
                size="sm"
                variant="bordered"
                color={isEmailInvalid ? "danger" : "success"}
                errorMessage={isEmailInvalid && "Please enter a valid email"}
                onValueChange={setEmail}
                isDisabled={inputState}
              />
              <Input
                isRequired
                label="Phone Number"
                size="sm"
                variant="bordered"
                color={isPhoneNumberInvalid ? "danger" : "success"}
                errorMessage={
                  isPhoneNumberInvalid && "Please enter a valid phone number"
                }
                onValueChange={setPhoneNumber}
                isDisabled={inputState}
              />
              <Button
                color={inputState === true ? "success" : "primary"}
                isDisabled={
                  isEmailInvalid ||
                  isNameInvalid ||
                  isPhoneNumberInvalid ||
                  inputState
                }
                onPress={handleSubmit}
              >
                {inputState === true ? "Success!" : "Submit"}
              </Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default AddVictim;
