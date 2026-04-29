import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

/**
 * ImageCarousel – shows one image at a time, full-bleed inside container.
 * Clicking the image opens a full-screen lightbox.
 * Props:
 *   images  – string[]  array of image src paths
 *   title   – string    used for alt text
 */
const ImageCarousel = ({ images, title }) => {
    const [current, setCurrent] = useState(0);
    const [lightbox, setLightbox] = useState(false);
    const [lightIdx, setLightIdx] = useState(0);
    const [imgHovered, setImgHovered] = useState(false);

    /* ── Lightbox keyboard navigation ── */
    const closeLightbox = useCallback(() => setLightbox(false), []);

    useEffect(() => {
        if (!lightbox) return;
        const onKey = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') setLightIdx(i => (i + 1) % images.length);
            if (e.key === 'ArrowLeft')  setLightIdx(i => (i - 1 + images.length) % images.length);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [lightbox, images.length, closeLightbox]);

    /* Lock body scroll when lightbox is open */
    useEffect(() => {
        document.body.style.overflow = lightbox ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightbox]);

    /* ── Carousel arrow handlers ── */
    const prev = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrent(i => (i - 1 + images.length) % images.length);
    };

    const next = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrent(i => (i + 1) % images.length);
    };

    /* Open lightbox at current carousel slide */
    const openLightbox = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setLightIdx(current);
        setLightbox(true);
    };

    /* ── Shared style objects ── */
    const arrowBase = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '30px',
        height: '30px',
        borderRadius: '8px',
        background: 'rgba(18, 18, 18, 0.82)',
        border: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#888',
        transition: 'color 0.18s, border-color 0.18s, background 0.18s',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        userSelect: 'none',
        flexShrink: 0,
    };

    const hoverIn  = (e) => { e.currentTarget.style.color = '#e8e8e8'; e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.background = 'rgba(30,30,30,0.95)'; };
    const hoverOut = (e) => { e.currentTarget.style.color = '#888';    e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = 'rgba(18,18,18,0.82)'; };

    /* ── Lightbox arrow style (larger) ── */
    const lbArrow = {
        width: '42px',
        height: '42px',
        borderRadius: '10px',
        background: 'rgba(18,18,18,0.75)',
        border: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#888',
        transition: 'color 0.18s, border-color 0.18s, background 0.18s',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        flexShrink: 0,
    };

    return (
        <>
            {/* ── Carousel thumbnail ── */}
            <img
                src={images[current]}
                alt={`${title} screenshot ${current + 1}`}
                onClick={openLightbox}
                onMouseEnter={() => setImgHovered(true)}
                onMouseLeave={() => setImgHovered(false)}
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                    borderRadius: 'inherit',
                    transition: 'opacity 0.25s ease, transform 0.25s ease',
                    cursor: 'zoom-in',
                    transform: imgHovered ? 'scale(1.015)' : 'scale(1)',
                }}
                draggable={false}
            />

            {/* Edge gradient so arrows stay readable */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to right, rgba(10,10,10,0.45) 0%, transparent 20%, transparent 80%, rgba(10,10,10,0.45) 100%)',
                borderRadius: 'inherit', pointerEvents: 'none', zIndex: 5,
            }} />

            {/* Left arrow */}
            <button onClick={prev} onMouseEnter={hoverIn} onMouseLeave={hoverOut}
                style={{ ...arrowBase, left: '10px' }} aria-label="Previous screenshot">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {/* Right arrow */}
            <button onClick={next} onMouseEnter={hoverIn} onMouseLeave={hoverOut}
                style={{ ...arrowBase, right: '10px' }} aria-label="Next screenshot">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {/* Dot indicators */}
            <div style={{
                position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: '5px', zIndex: 10, pointerEvents: 'none',
            }}>
                {images.map((_, idx) => (
                    <div key={idx} style={{
                        width: idx === current ? '16px' : '5px', height: '5px',
                        borderRadius: '3px',
                        background: idx === current ? '#e8e8e8' : '#444',
                        transition: 'width 0.25s ease, background 0.25s ease',
                    }} />
                ))}
            </div>

            {/* ── Lightbox portal ── */}
            {lightbox && createPortal(
                <div
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 9999,
                        background: 'rgba(0, 0, 0, 0.92)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '20px',
                        padding: '24px',
                        animation: 'lbFadeIn 0.2s ease',
                    }}
                >
                    {/* Inline keyframe */}
                    <style>{`
                        @keyframes lbFadeIn { from { opacity: 0; } to { opacity: 1; } }
                        @keyframes lbImgIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
                    `}</style>

                    {/* Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setLightIdx(i => (i - 1 + images.length) % images.length); }}
                        onMouseEnter={hoverIn} onMouseLeave={hoverOut}
                        style={lbArrow} aria-label="Previous image"
                    >
                        <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                            <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {/* Image */}
                    <div onClick={(e) => e.stopPropagation()} style={{
                        flex: 1, display: 'flex', flexDirection: 'column',
                        alignItems: 'center', gap: '16px', maxWidth: '1100px',
                    }}>
                        <img
                            key={lightIdx}
                            src={images[lightIdx]}
                            alt={`${title} screenshot ${lightIdx + 1}`}
                            style={{
                                maxWidth: '100%',
                                maxHeight: 'calc(100vh - 120px)',
                                borderRadius: '12px',
                                border: '1px solid #2e2e2e',
                                boxShadow: '0 24px 80px rgba(0,0,0,0.8)',
                                objectFit: 'contain',
                                animation: 'lbImgIn 0.2s ease',
                                display: 'block',
                            }}
                            draggable={false}
                        />

                        {/* Counter + dots */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '12px', color: '#555', letterSpacing: '0.05em' }}>
                                {lightIdx + 1} / {images.length}
                            </span>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setLightIdx(idx); }}
                                        style={{
                                            width: idx === lightIdx ? '20px' : '6px', height: '6px',
                                            borderRadius: '3px',
                                            background: idx === lightIdx ? '#e8e8e8' : '#333',
                                            transition: 'width 0.25s ease, background 0.25s ease',
                                            cursor: 'pointer',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setLightIdx(i => (i + 1) % images.length); }}
                        onMouseEnter={hoverIn} onMouseLeave={hoverOut}
                        style={lbArrow} aria-label="Next image"
                    >
                        <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                            <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        onMouseEnter={hoverIn} onMouseLeave={hoverOut}
                        style={{
                            position: 'absolute', top: '20px', right: '20px',
                            width: '36px', height: '36px', borderRadius: '8px',
                            background: 'rgba(18,18,18,0.82)', border: '1px solid #333',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', color: '#888',
                            transition: 'color 0.18s, border-color 0.18s, background 0.18s',
                            backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
                        }}
                        aria-label="Close"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>,
                document.body
            )}
        </>
    );
};

export default ImageCarousel;
