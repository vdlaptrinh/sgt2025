// src/hooks/useActiveSection.ts
import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-40% 0% -55% 0%',
                threshold: 0.1,
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            sectionIds.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, [sectionIds]);

    return activeId;
}
