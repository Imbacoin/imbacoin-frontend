import React, { useState, useEffect } from 'react';

export default function PreloadImage({ src }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        image.src = src;
        image.onload = () => {
            setLoading(false);
        };
    }, [src]);

    if (loading) {
        return <div></div>;
    }

    return <img src={src} alt="" />;
}
