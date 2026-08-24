import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Topics from "@/components/Topics";
import ForestSection from "@/components/ForestSection";
import Artivism from "@/components/Artivism";
import FieldResults from "@/components/FieldResults";
import Community from "@/components/Community";
import Memories from "@/components/Memories";
import ThankYou from "@/components/ThankYou";
import FinalEnding from "@/components/FinalEnding";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip">
      <Nav />
      <Hero />
      <Intro />
      <Topics />
      <ForestSection />
      <Artivism />
      <FieldResults />
      <Community />
      <Memories />
      <ThankYou />
      <FinalEnding />
      <Footer />
    </main>
  );
}
