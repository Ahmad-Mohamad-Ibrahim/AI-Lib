import { useState } from 'react';
import Navbar from '@/Components/Navbar';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen">
            <Navbar url="/home" isAuth={true} />
            <div className="w-full">
                {children}
            </div>
            <Footer />
        </div>
    );
}
