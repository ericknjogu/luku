import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import HomeBanner from "@/components/HomeBanner";

export default function Home() {
  return (
    <div className="mt-4">
      <Container>
        <HomeBanner />
      </Container>
    </div>
  );
}
