"use client";

import {useEffect} from "react";

export default function GoogleMapsLoader() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI&libraries=places`;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
}
