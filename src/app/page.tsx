import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center mt-5 mb-5 text-4xl font-bold uppercase">
        Luku Ecommerce Platform
      </div>
      <div>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
