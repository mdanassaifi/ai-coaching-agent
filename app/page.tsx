import { Button } from "@/components/ui/button";
import { UserButton } from '@stackframe/stack';
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h2 >Welcome Ai voice Coaching Agent </h2>
    <h1>Stackframe</h1>
    <p>Stackframe is a platform that provides AI-powered voice coaching services. Our mission is to help individuals improve their communication skills and confidence through personalized coaching sessions.</p>
    <p>Our AI voice coaching agent is designed to provide real-time feedback and guidance on your speaking skills. Whether you're preparing for a presentation, interview, or simply want to improve your public speaking abilities, our agent is here to help.</p>
    <p>With Stackframe, you can practice your speaking skills anytime, anywhere. Our platform is accessible on any device, making it easy to fit coaching sessions into your busy schedule.</p>
    <Button>Started</Button>
    <UserButton/>
   </div>
  );
}
