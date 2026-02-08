export default function Footer() {
    return (
        <footer className="bg-dark-900 text-white py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-white text-xl font-bold mb-4">MO-APEX <span className="text-gold-500">DESIGN</span></h3>
                    <p className="text-gray-400 max-w-sm">
                        Providing creative, long-lasting, and reliable solutions spanning multiple fields and industries.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-4">Contact</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>Mayor Road - Opposite Ghana Geological Survey Authority</li>
                        <li>Accra, Ghana - West Africa</li>
                        <li>
                            <a href="tel:+233205826884" className="hover:text-gold-500 transition-colors">+233 20 582 6884</a>
                        </li>
                        <li>
                            <a href="mailto:moapexdesignandbuild@gmail.com" className="hover:text-gold-500 transition-colors">moapexdesignandbuild@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="/projects" className="hover:text-gold-500">Portfolio</a></li>
                        <li><a href="/services" className="hover:text-gold-500">Services</a></li>
                        <li><a href="/about" className="hover:text-gold-500">About Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Mo-Apex Design & Build. All rights reserved.
            </div>
        </footer>
    );
}
