import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/contactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import MySkills from "./components/MySkills";
import Photo from "./components/Photo";
import SignalBtn from "./components/SignalBtn";

function App() {
  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      <Header />

      <main className="pt-27 overflow-x-hidden">
        <section
          id="home"
          className="scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row w-full">
            <div className="order-1 md:order-2 w-full md:w-1/2">
              <Photo />
            </div>

            <div className="order-2 md:order-1 w-full md:w-1/2">
              <SignalBtn />
              <Info />
            </div>
          </div>
        </section>

        <AboutMe />
        <MySkills />
        <ContactMe />
      </main>

      <Footer />
    </div>
  );
}

export default App;