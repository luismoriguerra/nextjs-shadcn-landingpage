import Image from "next/image";
import { Main, Section, Container } from "@/components/craft";
import Hero from "@/components/home-page/hero";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";

export default function Home() {
  return (
    <div>
      <Main>
        <Section>
          <Container>
            <Hero />
            <FeatureLeft />
            <FeatureRight />
          </Container>
        </Section>
      </Main>
    </div>
  );
}
