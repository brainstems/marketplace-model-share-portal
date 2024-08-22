import Footer from "./components/Footer/Footer";
import Activations from "./(landing)/activations/Activations";
import Header from "./(landing)/header/Header";

export default function Home() {
  return (
    <>
      <div className="hero flex flex-col gap-[3rem] w-full m-auto xl:max-w-[80%] px-[1.3rem] ">
        <Header />
        <Activations />
      </div>
      <Footer />
    </>
  );
}
