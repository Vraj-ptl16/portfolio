import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // We want to scroll to the element with the id matching the hash
            // setTimeout ensures the DOM is ready if we just navigated here
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // If no hash, just scroll to top
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
