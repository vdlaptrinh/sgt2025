// src/components/Navbar.tsx
import { useActiveSection } from '../hooks/useActiveSection';
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

    return (
        <nav className="navbar">
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
