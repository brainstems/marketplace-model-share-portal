import LandingPage from "./(landing)/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="App overflow-hidden ">
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}
