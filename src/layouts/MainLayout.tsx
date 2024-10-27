import AboutUs from "@/components/aboutUs";
import CommonQuestions from "@/components/commonQuestions";
import Courses from "@/components/courses";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import Teachers from "@/components/teachers";

const MainLayout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <HeroSection />
        <Courses />
        <Teachers />
        <AboutUs />
        <CommonQuestions />
      </main>
    </div>
  );
};

export default MainLayout;
