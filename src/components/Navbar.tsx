// src/components/Navbar.tsx
import { useActiveSection } from '../hooks/useActiveSection';
import { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Nút hamburger */}
            <button
                className="menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                ☰
            </button>

            {/* Menu dọc */}
            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                {sections.map((s) => (
                    <a
                        key={s.id}
                        href={`#${s.id}`}
                        className={activeId === s.id ? 'active' : ''}
                        onClick={() => setIsOpen(false)} // tự đóng sau khi click
                    >
                        {s.label}
                    </a>
                ))}
            </nav>
        </>
    );
}
