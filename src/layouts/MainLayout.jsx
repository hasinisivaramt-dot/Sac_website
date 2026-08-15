import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

export default function MainLayout({ campus, onCampusChange, children }) {
  return (
    <div className="min-h-screen bg-cream font-body text-charcoal">
      <Navbar campus={campus} onCampusChange={onCampusChange} />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
