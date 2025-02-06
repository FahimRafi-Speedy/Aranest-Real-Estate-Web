// /app/contact/Map.tsx
"use client";

export default function Map() {
    return (
        <div className="mt-3 w-full h-64 mb-10 rounded-lg overflow-hidden">
            <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK_HERE"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
}
