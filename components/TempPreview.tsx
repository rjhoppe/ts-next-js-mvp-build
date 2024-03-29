import { Textarea } from "@nextui-org/input"

const TempPreview = () => {
  return (
    <section className="my-4 max-w-xl">
      <Textarea label="Preview Message" placeholder="Enter message text" minRows={5} className="h-40" />
    </section>
  )
}

export default TempPreview