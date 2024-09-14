import Image from "next/image";
import Homepage from "./routes/Homepage";
import Header from "./components/Header/Header";
import GoogleLogo from "./components/Body/GoogleLogo";
import Button from "./components/Body/Button";
import BottomText from "./components/Body/BottomText";
import Footer from "./components/Footer/Footer";
import SearchButton from "./components/Body/SearchButton";
import Card from "./components/Cards/Card";
import "./globals.css";
import CardContainer from "./components/Cards/CardContainer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="scale-wrapper">
          <Header />
          <GoogleLogo />
          <Button />
          <SearchButton />
        </div>
        <div>
          <CardContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}
