import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Guest({ auth, children }) {
    return (
        <div className="min-h-screen">
            <Navbar auth={auth} url="/home" />

            <div className="w-full">
                {children}
            </div>
            <Footer />
        </div>
    );
}
