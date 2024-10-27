import Header from "@/components/header";
import HeroSection from "@/components/hero";

const MainLayout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default MainLayout;