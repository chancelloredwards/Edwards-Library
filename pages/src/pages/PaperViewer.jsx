/* eslint-disable no-useless-escape */
import { useState } from 'react';
import PdfModal from '../components/PdfModal';

// Single‑book metadata (replace with real details)
const book = {
    title: 'Orgins',
    description: 'Long ago, there lived the benders.',
    pdfUrl: '"C:\Users\chanc\source\repos\pages\pages\public\bookwork\Daysbefore.pdf"',
    coverUrl: '"C:\Users\chanc\source\repos\pages\pages\public\bookwork\coverart.jpg"',
};

export default function PaperViewer() {
    const [open, setOpen] = useState(false);

    return (
        <section className="px-4 py-12 flex flex-col items-center text-center max-w-3xl mx-auto">
            <img
                src={book.coverUrl}
                alt={`Cover of ${book.title}`}
                className="w-48 h-64 object-cover rounded-xl shadow-md mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
            <p className="text-gray-700 mb-8 max-w-md leading-relaxed">{book.description}</p>
            <button
                onClick={() => setOpen(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
                Read Book
            </button>

            {/* Full‑screen PDF reader */}
            <PdfModal paper={open ? book : null} onClose={() => setOpen(false)} />
        </section>
    );
}
