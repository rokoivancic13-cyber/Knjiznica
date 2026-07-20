// src/pages/Home.jsx

import Navbar from "../components/Navbar";

const events = [
  "Večer hrvatske kulture",
  "Smotra folklora",
  "Likovna izložba",
  "Božićni koncert",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm">
              🇭🇷 Hrvatsko kulturno društvo
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold mt-8 leading-tight">
              Čuvamo tradiciju.
              <br />
              Gradimo zajedništvo.
            </h1>

            <p className="mt-8 text-lg text-red-100 max-w-xl leading-relaxed">
              HKD Napredak kroz kulturne, obrazovne i društvene aktivnosti
              promiče hrvatsku baštinu i okuplja ljude svih generacija.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-white text-red-700 px-8 py-4 rounded-xl font-bold">
                Postani član
              </button>

              <button className="border border-white px-8 py-4 rounded-xl">
                Saznaj više
              </button>
            </div>
          </div>

          <div className="bg-white text-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-2xl font-bold text-red-700 mb-8">
              Naša zajednica
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-4xl font-bold text-red-700">120+</h3>

                <p>Aktivnih članova</p>
              </div>

              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-4xl font-bold text-red-700">30+</h3>

                <p>Događaja godišnje</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OSTATKAK TVOG KODA IDE ISPOD */}
      {/* Aktivnosti */}
      {/* Galerija */}
      {/* Kontakt */}
      {/* Footer */}
    </div>
  );
}
