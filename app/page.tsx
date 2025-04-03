import { Button } from "@/components/ui/button";
import { UserButton } from '@stackframe/stack';
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h2 className=" font-bold text-red-600 ">Welcome Ai voice Coaching Agent </h2>
    <h1 className=" text-blue-700 font-bold">Stackframe</h1>
      

       <Button> Click Here </Button>
    <br />
     <br />
    <Button>Started</Button>
    <UserButton/>
   </div>
  );
}
