// ✨ New component: Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
    const cards = [
        {
            id: 1,
            title: 'Classic Works',
            tagline: 'Timeless literature from Austen to Tolstoy.',
            img: 'https://images.unsplash.com/photo-1524578271613-d550be3e6021?auto=format&fit=crop&w=900&q=60',
            cta: 'Explore',
            href: '/catalog',
        },
        {
            id: 2,
            title: 'Modern Voices',
            tagline: "Discover today's most compelling authors.",
            img: 'https://images.unsplash.com/photo-1544936207-3961d3ed1a06?auto=format&fit=crop&w=900&q=60',
            cta: 'Discover',
            href: '/authors',
        },
        {
            id: 3,
            title: 'Create Your Profile',
            tagline: 'Save favorites and build your personal shelf.',
            img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60',
            cta: 'Join Now',
            href: '/signup',
        },
    ];

    return (
        <div className="min-h-screen font-serif bg-[url('/paper-texture.png')] bg-fixed bg-repeat text-gray-800">
            {/* Navigation */}
            <header className="w-full bg-burgundy-900 text-white shadow-md">
                <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                    <div className="text-2xl font-bold tracking-tight">Edwards Library</div>
                    <ul className="hidden md:flex gap-8 text-sm font-medium">
                        {[
                            { label: 'Catalog', href: '/catalog' },
                            { label: 'Authors', href: '/authors' },
                            { label: 'My Profile', href: '/profile' },
                            { label: 'Support', href: '/support' },
                        ].map((l) => (
                            <li key={l.label} className="hover:text-burgundy-300 transition">
                                <Link to={l.href}>{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* Hero */}
            <section className="text-center py-20 px-6 bg-burgundy-50/60">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-burgundy-900 drop-shadow-sm">
                    Discover Literature that Moves You
                </h1>
                <p className="text-lg md:text-xl text-burgundy-700 mb-10">
                    Build your shelf, share your insights.
                </p>
                <Link
                    to="/catalog"
                    className="inline-block bg-burgundy-800 hover:bg-burgundy-700 text-white px-8 py-3 rounded-full shadow-lg transition"
                >
                    Browse Catalog
                </Link>
            </section>

            {/* Feature Cards */}
            <section className="max-w-7xl mx-auto py-24 px-6 grid gap-14 md:grid-cols-3">
                {cards.map((c) => (
                    <div key={c.id} className="group text-center">
                        <img
                            src={c.img}
                            alt={c.title}
                            className="mx-auto w-full max-w-xs rounded-lg shadow-md group-hover:shadow-xl transition"
                        />
                        <h3 className="mt-6 text-2xl font-semibold text-burgundy-900">{c.title}</h3>
                        <p className="text-burgundy-700 mt-2 mb-6 px-4 leading-relaxed">{c.tagline}</p>
                        <Link
                            to={c.href}
                            className="inline-block border border-burgundy-800 text-burgundy-800 px-6 py-2 rounded-full group-hover:bg-burgundy-800 group-hover:text-white transition"
                        >
                            {c.cta}
                        </Link>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <footer className="bg-burgundy-900 py-8 text-center text-sm text-burgundy-100">
                © 2025 Edwards Library. Curating stories since 1873.
            </footer>
        </div>
    );
}


