import AboutUs from "@/components/aboutUs";
import CommonQuestions from "@/components/commonQuestions";
import Courses from "@/components/courses";
import Footer from "@/components/footer";
import FormSection from "@/components/formSection";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import Teachers from "@/components/teachers";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="container" style={{ paddingBottom: "80px" }}>
        <main>
          <HeroSection />
          <Courses />
          <Teachers />
          <AboutUs />
          <CommonQuestions />
          <FormSection />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
