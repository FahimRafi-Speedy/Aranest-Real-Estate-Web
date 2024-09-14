import Image from "next/image";
import Homepage from "./routes/Homepage";
import Header from "./components/Header/Header";
import FindProperty from "./components/Body/FindProperty";
import Button from "./components/Body/Button";
import BottomText from "./components/Body/BottomText";
import Footer from "./components/Footer/Footer";
import SearchButton from "./components/Body/SearchButton";
import Card from "./components/Cards/Card";
import "./globals.css";
import CardContainer from "./components/Cards/CardContainer";
import Property from "./components/Body/Property";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI&libraries=places`}
        strategy="beforeInteractive"
      />
      <main className="flex-grow">
        <div className="scale-wrapper">
          <Header />
          <FindProperty />
          <Button />
          <SearchButton />

          {/* <Property></Property> */}
        </div>
        <div>
          <CardContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}
