"use client";

import {FC} from 'react';
import Image from "next/image";
import "@/app/contact/style.css"

const AgentList: FC<{
    agents: { id: number; image: string; name: string; email: string; phone: string; width: number; height: number; }[]
}> = ({agents}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent: {
                id: number;
                image: string;
                name: string;
                email: string;
                phone: string;
                width: number;
                height: number;
            }) => (
                <div key={agent.id}
                     className="bg-white/30 border border-white/20 rounded-xl shadow-xl backdrop-blur-lg p-6 flex flex-col items-center text-center">
                    <Image src={agent.image} width={agent.width} height={agent.height} alt={agent.name}
                           className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-white/30"/>
                    <h2 className="text-xl font-semibold text-gray-950">{agent.name}</h2>
                    <p className="text-gray-900">{agent.email}</p>
                    <p className="text-gray-700">{agent.phone}</p>
                    <button
                        className="w-48 py-3 mt-4 text-white font-bold text-lg rounded-full transition duration-300 ease-in-out transform bg-gradient-to-r from-black to-gray-700 hover:from-blue-400 hover:to-teal-400 hover:scale-105 active:scale-95 shadow-lg">
                        Contact
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AgentList;
