import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { About } from "@/components/sections/about";
import { Now } from "@/components/sections/now";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeaturedWork />
      <About />
      <Now />
      <Contact />
    </main>
  );
}
