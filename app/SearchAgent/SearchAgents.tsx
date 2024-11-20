"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const SearchAgent = () => {
    // Mock data for agents
    const mockAgents = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            description: "Experienced real estate agent specializing in residential properties.",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phone: "987-654-3210",
            description: "Expert in commercial real estate and investment opportunities.",
        },
        {
            id: 3,
            name: "Bob Johnson",
            email: "bob.johnson@example.com",
            phone: "555-555-5555",
            description: "Focused on luxury and high-end properties.",
        },
    ];

    const [agents] = useState(mockAgents);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredAgents, setFilteredAgents] = useState(mockAgents);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const results = agents.filter(
            (agent) =>
                agent.name.toLowerCase().includes(query) ||
                agent.email.toLowerCase().includes(query) ||
                agent.description.toLowerCase().includes(query)
        );
        setFilteredAgents(results);
    };

    return (
        <div className="max-w-[1200px] py-8 mx-auto px-4 text-black">
            <div className="text-center">
                <h1 className="font-bold text-4xl text-gray-800 mb-6">
                    Search Agents
                </h1>
                <input
                    type="text"
                    placeholder="Search by name, email, or description..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full max-w-lg px-4 py-2 border border-black rounded-lg mb-6 focus:outline-none focus:ring-1 focus:ring-black"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAgents.length > 0 ? (
                    filteredAgents.map((agent) => (
                        <div
                            key={agent.id}
                            className="border border-black rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-300"
                        >
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-gray-900 mb-2">
                                    {agent.name}
                                </h2>
                                <p className="text-sm text-gray-700 mb-4">
                                    {agent.description}
                                </p>
                                <div className="flex justify-between items-center mt-4 text-gray-700">
                                    <a
                                        href={`mailto:${agent.email}`}
                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        <FaEnvelope size={18} />
                                        <span>Email</span>
                                    </a>
                                    <a
                                        href={`tel:${agent.phone}`}
                                        className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
                                    >
                                        <FaPhone size={18} />
                                        <span>Call</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-3 text-gray-600">
                        No agents found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default SearchAgent;
