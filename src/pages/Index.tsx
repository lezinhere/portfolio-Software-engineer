import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Tools from "../components/Tools";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />

      <main>
        <Hero />
        <Tools />
        {/* Keeping user's content but styled to match */}
        <div className="layout-wrapper">
          <Experience />
          <Projects />
        </div>
      </main>

      <Footer />

      {/* Background Effects */}
      <aside className="fixed inset-0 z-[-1] bg-[#FFFBF5]"></aside>
      <aside className="fixed top-0 left-0 right-0 w-full h-[150vh] bg-black z-[-1] bg-grain opacity-10 pointer-events-none bg-repeat"></aside>
    </div>
  );
};

export default Index;
