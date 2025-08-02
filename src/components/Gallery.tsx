// src/components/Gallery.tsx
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

export interface GalleryImage {
    original: string;
    thumbnail: string;
}

interface GalleryProps {
    images: GalleryImage[];
    title?: string;
}

export default function Gallery({ images, title = 'Thư viện hình ảnh' }: GalleryProps) {
    return (
        <section style={{ padding: '50px 20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>{title}</h2>
            <div style={{ maxWidth: 500, margin: '0 auto' }}>
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={true}
                />
            </div>
        </section>
    );
}
