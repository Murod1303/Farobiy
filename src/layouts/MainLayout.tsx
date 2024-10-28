import AboutUs from "@/components/aboutUs";
import CommonQuestions from "@/components/commonQuestions";
import Courses from "@/components/courses";
import FormSection from "@/components/formSection";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import Teachers from "@/components/teachers";

const MainLayout = () => {
  return (
    <div className="container" style={{ paddingBottom: "40px" }}>
      <Header />
      <main>
        <HeroSection />
        <Courses />
        <Teachers />
        <AboutUs />
        <CommonQuestions />
        <FormSection />
      </main>
    </div>
  );
};

export default MainLayout;
