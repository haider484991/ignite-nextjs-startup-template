import { siteConfig } from "@/config/site";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Investors from "@/components/sections/Investors";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

/**
 * Waitlist mode (config/site.ts) hides everything that only makes sense once
 * you have a product to sell: features, pricing, and the investor block.
 * Flip the flag on launch day and the full page appears.
 */
export default function Home() {
  const { waitlistMode } = siteConfig;

  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Proof />
        {!waitlistMode && (
          <>
            <Features />
            <Pricing />
            <Investors />
          </>
        )}
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
