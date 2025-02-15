import Container from "@/components/Container";

import HomeBanner from "@/components/HomeBanner";
import ProductsGrid from "@/components/ProductsGrid";

export default function Home() {
  return (
    <div className="mt-4">
      <Container>
        <HomeBanner />
        <ProductsGrid />
      </Container>
    </div>
  );
}
