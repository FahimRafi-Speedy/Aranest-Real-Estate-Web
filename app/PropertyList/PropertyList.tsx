import React from 'react';
import PropertyCard from "@/app/PropertyList/PropertyCard";

interface Property {
    id: number;
    title: string;
    location: string;
    type: string;
    beds: number;
    baths: number;
    sqft: number;
    price: number;
    pricePerSqft: number;
    updated: string;
    images: string[];
}

interface PropertyListProps {
    properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;