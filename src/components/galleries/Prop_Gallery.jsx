import React from 'react';
import GalleryCarousel from '../../components/gallery.jsx';

// Dynamically import all images
const propImages = import.meta.glob('../../Assets/images/gallery_images/prop/*.{jpg,jpeg,png,webp}', { eager: true });

// Map into usable data with credits from filenames
const propPanels = Object.entries(propImages).map(([path, mod]) => {
    const fullName = path.split('/').pop() ?? 'unknown.jpg';
    const filename = fullName.substring(0, fullName.lastIndexOf('.'));

    const parts = filename.split('__');
    const rawName = parts[0] || 'unknown';
    let credit = rawName
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());

    let link = null;
    let year = null;

    if (parts[1] && parts[1].includes('--')) {
        const [domain, handle] = parts[1].split('--');
        link = `https://${domain}/${handle}`;
    } else if (parts[1] && /^\d{4}$/.test(parts[1])) {
        year = parts[1];
    }

    if (parts[2] && /^\d{4}$/.test(parts[2])) {
        year = parts[2];
    }

    return {
        image: mod.default,
        credit,
        link,
        year
    };
});

export default function PropGallerySection() {
    return <GalleryCarousel panels={propPanels} fullScreen={true} />;
}
