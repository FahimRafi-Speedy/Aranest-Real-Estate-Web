import React from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PropertyList from "@/app/PropertyList/PropertyList";

const properties = [
    {
        id: 1,
        title: "Riverside Residences",
        location: "99 Pasir Ris Grove · D18",
        type: "Condo · 2000 · 99 yrs",
        beds: 3,
        baths: 2,
        sqft: 2561,
        price: 1200000,
        pricePerSqft: 754,
        updated: "Updated 4 hrs ago",
        images: ["/property/house1.jpg", "/property/house2.jpg", "/property/house3.jpg"],
    },
    {
        id: 2,
        title: "Luxury Villa",
        location: "Sentosa Cove, Singapore",
        type: "Villa · 2015 · Freehold",
        beds: 5,
        baths: 4,
        sqft: 4500,
        price: 3500000,
        pricePerSqft: 777,
        updated: "Updated 2 hrs ago",
        images: ["/property/house2.jpg", "/property/house3.jpg", "/property/house1.jpg"],
    },
    {
        id: 3,
        title: "Downtown Apartment",
        location: "Orchard Road, Singapore",
        type: "Apartment · 2010 · Leasehold",
        beds: 2,
        baths: 1,
        sqft: 980,
        price: 890000,
        pricePerSqft: 908,
        updated: "Updated 1 hr ago",
        images: ["/property/house3.jpg", "/property/house1.jpg", "/property/house2.jpg"],
    },
];


const PropertyListPage = () => {
    return (
        <div>
            <Header/>

            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-black mb-5">Property List</h1>
                <p className="text-center">Here is a list of properties</p>

                {/* Property List */}
                <PropertyList properties={properties}/>
            </div>

            <Footer/>
        </div>
    );
};

export default PropertyListPage;