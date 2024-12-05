import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center ">
      <Button variant="destructive">Hello World</Button>
      <Link href="/documents/123">Click To Documents Id</Link>
    </div>
  );
}