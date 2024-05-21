import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar url="/home" />

            <div className="w-full">
                {children}
            </div>
            <Footer />
        </div>
    );
}
