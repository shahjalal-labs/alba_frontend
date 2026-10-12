import { CONTACT_INFO } from "@/constants/contact";

export default function Widerrufsbelehrung() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Widerrufsbelehrung
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Informationen zum Widerrufsrecht für Verbraucher
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12 text-gray-700 leading-relaxed">
          {/* Section 1: Widerrufsbelehrung */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              Widerrufsbelehrung
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Widerrufsrecht
                </h3>
                <p className="mb-3">
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von
                  Gründen diesen Vertrag zu widerrufen.
                </p>
                <p className="mb-3">
                  Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
                  Vertragsabschlusses.
                </p>
                <p className="mb-3">
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Uenal
                  Immobilien GmbH, Carl-Benz-Str. 5, 26655 Westerstede, Telefon:{" "}
                  {CONTACT_INFO.phone.display}, E-Mail:
                  <a
                    href="mailto:info@uenal-immobilien.de"
                    className="text-[#B8A67D] underline hover:text-[#a39670]"
                  >
                    info@uenal-immobilien.de
                  </a>
                  ) mittels einer eindeutigen Erklärung (z. B. ein mit der Post
                  versandter Brief oder E-Mail) über Ihren Entschluss, diesen
                  Vertrag zu widerrufen, informieren. Sie können dafür das
                  beigefügte Muster-Widerrufsformular verwenden, das jedoch
                  nicht vorgeschrieben ist.
                </p>
                <p>
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
                  Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
                  Widerrufsfrist absenden.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  Folgen des Widerrufs
                </h3>
                <p className="mb-3">
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
                  Zahlungen, die wir von Ihnen erhalten haben, einschließlich der
                  Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
                  daraus ergeben, dass Sie eine andere Art der Lieferung als die
                  von uns angebotene, günstigste Standardlieferung gewählt
                  haben), unverzüglich und spätestens binnen vierzehn Tagen ab
                  dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren
                  Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
                  Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei
                  der ursprünglichen Transaktion eingesetzt haben, es sei denn,
                  mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in
                  keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte
                  berechnet.
                </p>
                <p>
                  Haben Sie verlangt, dass die Dienstleistungen während der
                  Widerrufsfrist beginnen sollen, so haben Sie uns einen
                  angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem
                  Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts
                  hinsichtlich dieses Vertrags unterrichten, bereits erbrachten
                  Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag
                  vorgesehenen Dienstleistungen entspricht.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  Besondere Hinweise
                </h3>
                <p>
                  Ihr Widerrufsrecht erlischt vorzeitig, wenn wir die
                  Dienstleistung vollständig erbracht haben und mit der
                  Ausführung der Dienstleistung erst begonnen haben, nachdem Sie
                  dazu Ihre ausdrückliche Zustimmung gegeben haben und
                  gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr
                  Widerrufsrecht bei vollständiger Vertragserfüllung durch uns
                  verlieren.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Muster-Widerrufsformular */}
          <div className="border-t border-gray-300 pt-10">
            <h2 className="text-3xl font-bold text-black mb-4">
              Muster-Widerrufsformular
            </h2>
            <p className="mb-6 text-gray-600">
              (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
              dieses Formular aus und senden Sie es zurück.)
            </p>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-gray-50/50 space-y-6 font-mono text-sm leading-relaxed text-gray-800">
              <div>
                <p>
                  An: Uenal Immobilien GmbH, Carl-Benz-Str. 5, 26655 Westerstede,
                  E-Mail:{" "}
                  <a
                    href="mailto:info@uenal-immobilien.de"
                    className="text-[#B8A67D] underline hover:text-[#a39670]"
                  >
                    info@uenal-immobilien.de
                  </a>
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 space-y-4">
                <p>
                  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
                  abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die
                  Erbringung der folgenden Dienstleistung (*)
                </p>

                <p>Bestellt am (*)/erhalten am (*)</p>

                <p>Name des/der Verbraucher(s)</p>

                <p>Anschrift des/der Verbraucher(s)</p>

                <p>
                  Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
                  Papier)
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p>Datum</p>
              </div>

              <p className="pt-2 text-xs text-gray-500 font-sans italic">
                (*) Unzutreffendes streichen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

