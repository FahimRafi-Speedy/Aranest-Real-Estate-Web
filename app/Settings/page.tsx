import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Settings from "./Settings";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Settings Component */}
        <Settings />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
