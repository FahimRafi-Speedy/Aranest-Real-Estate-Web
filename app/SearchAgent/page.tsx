import SearchAgent from "./SearchAgents";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SearchAgentPage = () => {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-160px)] flex flex-col">
                <SearchAgent />
            </main>
            <Footer />
        </>
    );
};

export default SearchAgentPage;
