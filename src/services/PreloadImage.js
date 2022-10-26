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
        return <div style={{width: '20px', height:'20px', background:'#f00',
            position: 'absolute',left: '50%', top: '50%'

        }}></div>;
    }

    return <img src={src} alt="" />;
}

