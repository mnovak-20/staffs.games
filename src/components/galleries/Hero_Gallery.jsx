import React from 'react';
import GalleryCarousel from '../../components/gallery.jsx';

// Dynamically import all hero images
const heroImages = import.meta.glob('../../Assets/images/hero/*.{jpg,jpeg,png,webp}', { eager: true });

// Map into usable data with credits from filenames
const heroPanels = Object.entries(heroImages).map(([path, mod]) => {
    const filename = path.split('/').pop()?.split('.')[0] ?? 'unknown';
    const credit = filename
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase()); // Title Case

    return {
        image: mod.default,
        credit,
    };
});

export default function HeroGallerySection() {
    return <GalleryCarousel panels={heroPanels} />;
}
