"use client";

import AgentList from "@/app/AgentList/AgentList";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const agents = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 234 567 890",
        image: "/agents/1.png",
        width: 100,
        height: 100
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+1 987 654 321",
        image: "/agents/2.png",
        width: 100,
        height: 100
    },
    {
        id: 3,
        name: "Michael Johnson",
        email: "michael@example.com",
        phone: "+1 456 789 012",
        image: "/agents/3.png",
        width: 100,
        height: 100
    },
    {
        id: 4,
        name: "Sarah Brown",
        email: "sarah@example.com",
        phone: "+1 321 654 987",
        image: "/agents/4.png",
        width: 100,
        height: 100
    },
    {
        id: 5,
        name: "David Lee",
        email: "david@example.com",
        phone: "+1 159 753 486",
        image: "/agents/2.png",
        width: 100,
        height: 100
    },
    {
        id: 6,
        name: "Emma Wilson",
        email: "emma@example.com",
        phone: "+1 753 159 486",
        image: "/agents/1.png",
        width: 100,
        height: 100
    }
];

const AgentPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>

            <h1 className="text-4xl font-bold text-center text-black mb-8">My Agents</h1>
            <AgentList agents={agents}/>

            <Footer/>
        </div>
    );
};

export default AgentPage;
