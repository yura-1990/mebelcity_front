import React, { useRef, useState } from 'react';

const LupaZoom = ({ src, zoomScale = 2 }) => {
    const containerRef = useRef(null);
    const lensRef = useRef(null);
    const [showLens, setShowLens] = useState(false);

    const lensSize = 200; // 100px radius

    const moveLens = (clientX, clientY) => {
        const container = containerRef.current;
        const lens = lensRef.current;
        if (!container || !lens) return; // Prevent error if refs aren't ready

        const rect = container.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        lens.style.left = `${x - lensSize / 2}px`;
        lens.style.top = `${y - lensSize / 2}px`;
        lens.style.backgroundImage = `url(${src})`;
        lens.style.backgroundSize = `${rect.width * zoomScale}px ${rect.height * zoomScale}px`;
        lens.style.backgroundPosition = `${(x * zoomScale - lensSize / 2) * -1}px ${(y * zoomScale - lensSize / 2) * -1}px`;
    };

    const handleMouseMove = (e) => {
        moveLens(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            moveLens(touch.clientX, touch.clientY);
        }
    };

    return (
        <div
            className="relative w-full"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowLens(true)}
            onMouseLeave={() => setShowLens(false)}
            onTouchStart={() => setShowLens(true)}
            onTouchEnd={() => setShowLens(false)}
            onTouchMove={handleTouchMove}
        >
            <img src={src} alt="Увеличенное изображение товара" className="w-full h-auto object-cover select-none" />
            {showLens && (
                <div
                    ref={lensRef}
                    className="absolute pointer-events-none border-2 border-gray-300 shadow-lg"
                    style={{
                        width: `100%`,
                        height: `100%`,
                        backgroundRepeat: 'no-repeat',
                        position: 'absolute',
                        zIndex: 10,
                        backdropFilter: 'blur(2px)',
                    }}
                />
            )}
        </div>
    );
};

export default LupaZoom;
