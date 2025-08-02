// src/components/Navbar.tsx
import { useActiveSection } from '../hooks/useActiveSection';
import { useEffect, useState } from 'react';
import './css/Navbar.css';

const sections = [
    { id: 'hero', label: 'Trang chủ' },
    { id: 'features', label: 'Tính năng' },
    { id: 'gallery', label: 'Thư viện ảnh' },
    { id: 'instruction', label: 'Hướng dẫn' },
    { id: 'testimonials', label: 'Đánh giá' },
    { id: 'pricing', label: 'Giá' },
    { id: 'faq', label: 'Hỏi đáp' },
];

export default function Navbar() {
    const activeId = useActiveSection(sections.map((s) => s.id));
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50 || currentScrollY < lastScrollY) {
                setShowNavbar(true); // cuộn lên
            } else {
                setShowNavbar(false); // cuộn xuống
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
            {sections.map((s) => (
                <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={activeId === s.id ? 'active' : ''}
                >
                    {s.label}
                </a>
            ))}
        </nav>
    );
}
