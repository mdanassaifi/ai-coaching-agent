import { Button } from "@/components/ui/button";
import { UserButton } from '@stackframe/stack';
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h2 >Welcome to Ai voice Coaching Agent </h2>
    <Button>Start</Button>
    <UserButton/>
   </div>
  );
}
