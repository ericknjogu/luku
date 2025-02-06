import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Container>
        <div className="text-center mt-5 mb-5 text-4xl font-bold uppercase">
          Luku Ecommerce Platform
        </div>
        <div>
          <Button>Sign Up</Button>
        </div>
      </Container>
    </div>
  );
}
