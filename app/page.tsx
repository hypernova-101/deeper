import Button from "@/components/Button";
import Center from "@/components/Center";

export default function Home() {

  return (
    <div className="h-screen">
      <Center>
        <Button text="Click" to="/dashboard"/>
      </Center>
    </div>
  )
}
