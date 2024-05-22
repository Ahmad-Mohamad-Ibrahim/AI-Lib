import { useState } from 'react';
import Navbar from '@/Components/Navbar';

export default function Authenticated({auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen">
            <Navbar auth={auth} url="/home"/>
            <div className="w-full">
                {children}
            </div>
            <Footer />
        </div>
    );
}
