import About from "../components/layout/About/About";
import { Hero } from "../components/layout/Hero/Hero";
import { MainLayout } from "../components/layout/MainLayout";
import { Services } from "../components/layout/Services";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
        <Services />
      </MainLayout>
    </>
  );
}
