import RecordBreadcrumb from "./RecordBreadcrumb"
import { Input } from "@nextui-org/input"

const TempEdit = () => {
  return (
    <section>
      <Input 
        isRequired
        type="email"
        label="Recipients"
        defaultValue="example@axon.com"
        className=" mt-10 max-w-xl"
      />
      <Input 
        type="email"
        label="CC Recipients"
        className=" mt-10 max-w-xl"
      />
      <Input 
        type="string"
        label="Subject"
        className=" mt-10 max-w-xl"
      />
    </section>
  )
}

export default TempEdit