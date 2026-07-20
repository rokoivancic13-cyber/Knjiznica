import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* HEADER */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            O nama
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-8">HKD Napredak</h1>

          <p className="mt-6 text-lg text-red-100 max-w-3xl mx-auto">
            Društvo koje čuva knjige, tradiciju i zajedništvo kroz generacije.
          </p>
        </div>
      </section>

      {/* SADRŽAJ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-96 rounded-3xl bg-red-700 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-8xl">🇭🇷</div>

              <h2 className="text-3xl font-bold mt-5">
                Tradicija i zajedništvo
              </h2>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-red-700 mb-6">Naša priča</h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              HKD Napredak je mjesto gdje se susreću kultura, obrazovanje i
              ljudi koji žele doprinijeti zajednici.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Kroz različite projekte, događaje i aktivnosti njegujemo
              vrijednosti koje povezujemo s tradicijom i budućnošću.
            </p>
          </div>
        </div>
      </section>

      {/* KARTICE */}
      <section className="bg-red-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow">
            <div className="text-4xl mb-4">📚</div>

            <h3 className="text-xl font-bold">Obrazovanje</h3>

            <p className="text-gray-600 mt-3">
              Razvoj znanja i kulturnih vrijednosti.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <div className="text-4xl mb-4">🎭</div>

            <h3 className="text-xl font-bold">Kultura</h3>

            <p className="text-gray-600 mt-3">
              Očuvanje tradicije kroz događaje i programe.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <div className="text-4xl mb-4">🤝</div>

            <h3 className="text-xl font-bold">Zajednica</h3>

            <p className="text-gray-600 mt-3">
              Povezivanje ljudi i stvaranje prijateljstva.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
