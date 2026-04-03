import Hero from "./_components/Hero";
import { Popularcitylist } from "./_components/PopularCities";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Popularcitylist />
    </main>
  );
}
