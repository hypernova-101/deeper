import Button from "@/components/Button";

const delay = async (duration: number) => {
  return new Promise(resolve =>
    setTimeout(resolve, duration)
  );
}

export default async function Dashboard() {

  await delay(2400);

    return (
      <div>
        <Button text="Back" to="/"/>
        This is dashboard
      </div>  
    );
}