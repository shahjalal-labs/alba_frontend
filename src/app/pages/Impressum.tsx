import { CONTACT_INFO } from "@/constants/contact";

export default function Impressum() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Impressum</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12 text-gray-700 leading-relaxed">
          {/* Angaben gemäß § 5 DDG */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Angaben gemäß § 5 DDG</h2>
            <div className="space-y-4">
              <p className="font-semibold text-lg text-black">Uenal Immobilien GmbH</p>
              <p>
                Carl-Benz-Str. 5<br />
                26655 Westerstede
              </p>
              <p>
                Telefon: {CONTACT_INFO.phone.display}<br />
                E-Mail: info@uenal-immobilien.de<br />
                Web: www.uenal-immobilien.de
              </p>
            </div>
          </div>

          {/* Vertretungsberechtigter Geschäftsführer */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Vertretungsberechtigter Geschäftsführer</h2>
            <p>Alparslan Ünal</p>
          </div>

          {/* Registereintrag */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Registereintrag</h2>
            <p>Amtsgericht Oldenburg, HRB 218496</p>
          </div>

          {/* Umsatzsteuer-Identifikationsnummer */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Umsatzsteuer-Identifikationsnummer</h2>
            <p>USt-IdNr. gemäß § 27a UStG: DE354868735</p>
          </div>

          {/* Verantwortlich für den Inhalt nach § 18 Absatz 2 MStV */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Verantwortlich für den Inhalt nach § 18 Absatz 2 MStV</h2>
            <p>Alparslan Ünal, Carl-Benz-Str. 5, 26655 Westerstede</p>
          </div>

          {/* Berufsrechtliche Angaben */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Berufsrechtliche Angaben</h2>
            <p className="mb-2"><strong>Berufsbezeichnung:</strong> Immobilienmakler</p>
            <p className="mb-2"><strong>Verliehen in:</strong> Bundesrepublik Deutschland</p>
            <p className="mb-4">
              Erlaubnis nach § 34c Absatz 1 Satz 1 Nummer 1 GewO, erteilt durch die Oldenburgische Industrie- und Handelskammer.
            </p>
            <p className="mb-2 font-semibold text-black">Es gelten folgende berufsrechtliche Regelungen:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>§ 34c Gewerbeordnung (GewO)</li>
              <li>Verordnung über die Pflichten der Immobilienmakler, Darlehensvermittler, Bauträger und Baubetreuer (MaBV)</li>
              <li>Gesetz zur Regelung der Wohnungsvermittlung (WoVermRG)</li>
            </ul>
            <p>
              Die Regelungen sind einsehbar unter{" "}
              <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer" className="text-[#B8A67D] underline hover:text-[#a39670]">
                www.gesetze-im-internet.de
              </a>
            </p>
          </div>

          {/* Zuständige Aufsichtsbehörde */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Zuständige Aufsichtsbehörde für die Tätigkeit nach § 34c GewO</h2>
            <p>
              Oldenburgische Industrie- und Handelskammer<br />
              Moslestraße 6, 26122 Oldenburg
            </p>
          </div>

          {/* Berufshaftpflichtversicherung */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Berufshaftpflichtversicherung</h2>
            <p className="mb-1"><strong>Versicherer:</strong> ARAG SE, ARAG Platz 1, 40472 Düsseldorf</p>
            <p><strong>Räumlicher Geltungsbereich:</strong> Bundesrepublik Deutschland</p>
          </div>

          {/* Verbraucherstreitbeilegung */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 Absatz 1 Nummer 1 VSBG).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
