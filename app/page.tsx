import { Button } from "@/components/ui/button";
import { UserButton } from '@stackframe/stack';
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h2 className=" font-bold text-red-600 ">Welcome Ai voice Coaching Agent </h2>
  
    <Button>Start Trial </Button>
    <UserButton/>
   </div>
  );
}
