import { CONTACT_INFO } from "@/constants/contact";

export default function Datenschutz() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Datenschutzerklärung</h1>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12 text-gray-700 leading-relaxed">
          <div className="border-b border-gray-200 pb-6">
            <p className="font-semibold text-lg text-black">Stand: August 2026</p>
            <p className="mt-4">
              Mit den folgenden Informationen geben wir Ihnen einen Überblick über die Verarbeitung Ihrer personenbezogenen Daten durch uns und über Ihre Rechte aus dem Datenschutzrecht. Welche Daten im Einzelnen verarbeitet und in welcher Weise genutzt werden, richtet sich nach den jeweils angefragten oder vereinbarten Leistungen. Daher treffen nicht alle Teile dieser Information auf Sie zu.
            </p>
          </div>

          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">1. Verantwortlicher</h2>
            <div className="space-y-2">
              <p className="font-semibold text-black">Uenal Immobilien GmbH</p>
              <p>
                Carl-Benz-Str. 5<br />
                26655 Westerstede
              </p>
              <p>
                Telefon: {CONTACT_INFO.phone.display}<br />
                E-Mail: info@uenal-immobilien.de<br />
                Amtsgericht Oldenburg, HRB 218496<br />
                Geschäftsführer: Alparslan Ünal
              </p>
            </div>
          </div>

          {/* 2. Ansprechpartner für den Datenschutz */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-black mb-4">2. Ansprechpartner für den Datenschutz</h2>
            <p className="mb-3">
              Ein Datenschutzbeauftragter ist nach § 38 Absatz 1 BDSG nicht zu bestellen. Für Fragen zum Datenschutz und zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an:
            </p>
            <p className="font-medium text-black">
              Alparslan Ünal, Uenal Immobilien GmbH, Carl-Benz-Str. 5, 26655 Westerstede<br />
              E-Mail:{" "}
              <a href="mailto:datenschutz@uenal-immobilien.de" className="text-[#B8A67D] underline hover:text-[#a39670]">
                datenschutz@uenal-immobilien.de
              </a>
            </p>
          </div>

          <div className="border-t border-gray-300 pt-8">
            <h2 className="text-3xl font-extrabold text-black mb-6">Teil A: Verarbeitung beim Besuch dieser Website</h2>

            {/* 3. Hosting und Server-Logfiles */}
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-black">3. Hosting und Server-Logfiles</h3>
              <p>
                Diese Website wird bei einem externen Dienstleister gehostet. Beim Aufruf der Website erhebt und speichert der Provider automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser übermittelt:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Verarbeitung erfolgt zur Sicherstellung eines störungsfreien Betriebs und der Sicherheit unserer Website.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Absatz 1 lit. f DSGVO.<br />
                <strong>Berechtigtes Interesse:</strong> technisch fehlerfreie Darstellung, Stabilität und Sicherheit der Website.<br />
                <strong>Speicherdauer:</strong> Die Logfiles werden für eine Dauer von 7 Tagen auf den Servern des Hosters aufbewahrt und anschließend gelöscht.<br />
                <strong>Hostinganbieter:</strong> netcup GmbH, Daimlerstraße 25, 76185 Karlsruhe, Deutschland (Server-Standort: Nürnberg, Deutschland). Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.
              </p>
            </div>

            {/* 4. Kontaktaufnahme über Formulare, Telefon und E-Mail */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">4. Kontaktaufnahme über Formulare, Telefon und E-Mail</h3>
              <p>
                Wenn Sie uns über ein Formular auf dieser Website, per E-Mail oder telefonisch kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage und für Anschlussfragen. Zur Bereitstellung des Formular-Backends nutzen wir einen geschützten Serverless-Dienst auf Vercel (Vercel Inc., USA) sowie Microsoft 365 Exchange Online für den E-Mail-Empfang.
              </p>
              <p>
                <strong>Verarbeitete Daten:</strong> Anrede, Name, Kontaktdaten, Angaben zu Ihrem Anliegen und zur betreffenden Immobilie sowie sämtliche weiteren Angaben, die Sie freiwillig machen.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Absatz 1 lit. b DSGVO, wenn die Anfrage auf den Abschluss eines Vertrages gerichtet ist, im Übrigen Art. 6 Absatz 1 lit. f DSGVO.<br />
                <strong>Berechtigtes Interesse:</strong> Bearbeitung der an uns gerichteten Anfragen.<br />
                <strong>Speicherdauer:</strong> bis zur abschließenden Bearbeitung Ihrer Anfrage, im Übrigen nach Maßgabe von Ziffer 12.
              </p>
            </div>

            {/* 5. Immobilienbewertung und Suchanfragen */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">5. Immobilienbewertung und Suchanfragen</h3>
              <p>
                Über unsere Website können Sie eine Wertindikation für Ihre Immobilie anfordern oder ein Suchprofil hinterlegen. Die dabei übermittelten Objekt- und Kontaktdaten verarbeiten wir, um Ihre Anfrage zu beantworten, Ihnen eine Einschätzung zu übermitteln und Ihnen passende Objekte anzubieten.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Absatz 1 lit. b DSGVO für die Bearbeitung Ihrer Anfrage, Art. 6 Absatz 1 lit. f DSGVO für die anschließende Betreuung als Interessent.<br />
                <strong>Berechtigtes Interesse:</strong> Vermittlung passender Immobilienangebote.
              </p>
              <p className="italic">Eine Wertindikation ersetzt kein Sachverständigengutachten.</p>
            </div>

            {/* 6. Bewerbungen über die Karriereseite */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">6. Bewerbungen über die Karriereseite</h3>
              <p>
                Wenn Sie sich bei uns bewerben, verarbeiten wir die von Ihnen übermittelten Bewerbungsdaten ausschließlich zur Durchführung des Bewerbungsverfahrens.
              </p>
              <p>
                <strong>Verarbeitete Daten:</strong> Name, Kontaktdaten, Angaben zu Qualifikation und beruflichem Werdegang sowie alle weiteren Angaben und Unterlagen, die Sie freiwillig übermitteln.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> § 26 Absatz 1 BDSG in Verbindung mit Art. 88 DSGVO sowie Art. 6 Absatz 1 lit. b DSGVO.
              </p>
              <p>
                <strong>Speicherdauer:</strong> Kommt kein Beschäftigungsverhältnis zustande, löschen wir Ihre Bewerbungsunterlagen spätestens sechs Monate nach Abschluss des Verfahrens. Eine längere Speicherung erfolgt nur mit Ihrer ausdrücklichen Einwilligung zur Aufnahme in einen Bewerberpool.
              </p>
            </div>

            {/* 7. Einsatz von Cookies und vergleichbaren Technologien */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">7. Einsatz von Cookies und vergleichbaren Technologien</h3>
              <p>
                Auf dieser Website werden technisch notwendige Cookies und vergleichbare Technologien (wie z. B. für die Session-Verwaltung) eingesetzt. Technisch notwendige Cookies sind für den Betrieb der Website erforderlich. Technisch nicht notwendige Tracking- oder Marketing-Cookies kommen auf dieser Seite nicht zum Einsatz.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> § 25 Absatz 2 TDDDG für technisch notwendige Speicherung und Zugriffe.
              </p>
            </div>

            {/* 8. Eingebundene Dienste Dritter */}
            <div className="space-y-4 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-black">8. Eingebundene Dienste Dritter</h3>

              <div className="space-y-2">
                <p>
                  <strong>Schriftarten:</strong> Schriftarten werden lokal von unserem Server ausgeliefert. Eine Verbindung zu Servern Dritter, insbesondere zu Google Fonts, findet dabei nicht statt.
                </p>
              </div>

              <div className="space-y-2">
                <p>
                  <strong>Schutz unserer Formulare vor Missbrauch (Cloudflare Turnstile):</strong> Zur Absicherung unserer Kontaktformulare gegen automatisierte Anfragen (Bots, Spam) nutzen wir den Dienst Cloudflare Turnstile der Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA. Turnstile analysiert das Verhalten der Website-Besucher anhand verschiedener Merkmale (z. B. IP-Adresse, Verweildauer, Mausbewegungen), um festzustellen, ob eine Mensch- oder Bot-Eingabe vorliegt. Dabei können Daten an Cloudflare übermittelt werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Schutz unserer IT-Infrastruktur vor Missbrauch und Spam).
                </p>
              </div>

              <div className="space-y-2">
                <p>
                  <strong>Kundenbewertungen (Trustlocal):</strong> Auf unserer Website binden wir ein Widget des Dienstes Trustlocal (Trustlocal B.V., Netherlands) ein, um Kundenbewertungen anzuzeigen. Hierbei wird das Script static.trustlocal.de geladen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der transparenten Darstellung von Kundenbewertungen und unserer Servicequalität).
                </p>
              </div>

              <div className="space-y-2">
                <p>
                  <strong>Kartendienst:</strong> Es ist kein externer Kartendienst (wie z. B. Google Maps) eingebunden; stattdessen wird eine lokal gehostete Vektorgrafik der Deutschlandkarte verwendet.
                </p>
              </div>

              <div className="space-y-2">
                <p>
                  <strong>Webanalyse:</strong> Auf dieser Website werden keine Webanalyse- oder Tracking-Tools (wie z. B. Google Analytics oder Matomo) eingesetzt.
                </p>
              </div>

              <div className="space-y-2">
                <p>
                  <strong>Videos und Social-Media-Einbindungen:</strong> Wir betten keine externen Videos oder Social-Media-Feeds direkt auf unserer Website ein. Es befinden sich lediglich Verlinkungen zu unseren Social-Media-Profilen (Instagram, LinkedIn, YouTube, Facebook, TikTok).
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <p>
                  <strong>Kontaktaufnahme über WhatsApp:</strong> Auf unserer Website befindet sich ein Link, über den Sie uns per WhatsApp kontaktieren können. Erst wenn Sie diesen Link aktiv anklicken, werden Sie zum Dienst weitergeleitet und es findet eine Verarbeitung durch den Anbieter statt. Anbieter ist die WhatsApp Ireland Limited, Merrion Road, Dublin 4, Irland. Eine Verarbeitung durch Konzerngesellschaften in den Vereinigten Staaten kann nicht ausgeschlossen werden. Wenn Sie dies nicht wünschen, nutzen Sie bitte Telefon, E-Mail oder das Kontaktformular.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Absatz 1 lit. f DSGVO.<br />
                  <strong>Berechtigtes Interesse:</strong> niedrigschwellige Erreichbarkeit für Interessenten.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8">
            <h2 className="text-3xl font-extrabold text-black mb-6">Teil B: Verarbeitung im Rahmen unserer Maklertätigkeit</h2>

            {/* 9. Zwecke und Rechtsgrundlagen */}
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-black">9. Zwecke und Rechtsgrundlagen</h3>
              <div className="space-y-3">
                <p>
                  <strong>a) Anbahnung und Durchführung des Maklervertrages.</strong> Nachweis und Vermittlung von Immobilien, Organisation von Besichtigungen, Beratung und Abwicklung des Maklervertrages.<br />
                  Rechtsgrundlage: Art. 6 Absatz 1 lit. b DSGVO.
                </p>
                <p>
                  <strong>b) Anbahnung und Abwicklung des Hauptvertrages.</strong> Abstimmung mit der Gegenseite, mit Notaren, Hausverwaltungen und Finanzierungspartnern.<br />
                  Rechtsgrundlage: Art. 6 Absatz 1 lit. b DSGVO, bei Personen, die nicht selbst unsere Vertragspartner sind, Art. 6 Absatz 1 lit. f DSGVO.<br />
                  Berechtigtes Interesse: Durchführung des von den Beteiligten gewünschten Immobiliengeschäfts.
                </p>
                <p>
                  <strong>c) Betreuung von Interessenten und Zusendung passender Angebote.</strong> Abgleich Ihres Suchprofils mit unserem Objektbestand.<br />
                  Rechtsgrundlage: Art. 6 Absatz 1 lit. f DSGVO.<br />
                  Berechtigtes Interesse: Vermittlung passender Immobilienangebote und wirtschaftliche Tätigkeit als Immobilienmakler.
                </p>
                <p>
                  <strong>d) Reichweiten- und Erfolgsmessung in E-Mails.</strong> In unseren E-Mails setzen wir technische Elemente wie Zählpixel und individualisierte Links ein, mit denen erfasst werden kann, ob und wann eine E-Mail geöffnet und ob enthaltene Links angeklickt wurden.<br />
                  Rechtsgrundlage: Art. 6 Absatz 1 lit. a DSGVO in Verbindung mit § 25 Absatz 1 TDDDG.<br />
                  Diese Verarbeitung findet nur statt, wenn Sie eingewilligt haben. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, formlos an datenschutz@uenal-immobilien.de.
                </p>
                <p>
                  <strong>e) Prüfung der Bonität und der wirtschaftlichen Verhältnisse.</strong> Bei der Vermittlung von Miet- und Kaufobjekten prüfen wir, ob Ihre wirtschaftlichen Verhältnisse die Erfüllung des angestrebten Vertrages erwarten lassen. Legen Sie uns selbst Unterlagen vor, etwa Einkommensnachweise, eine Selbstauskunft oder eine von Ihnen beschaffte Bonitätsauskunft, ist Rechtsgrundlage Art. 6 Absatz 1 lit. b DSGVO. Holen wir eine Auskunft bei einer Auskunftei ein, geschieht dies ausschließlich mit Ihrer ausdrücklichen Einwilligung nach Art. 6 Absatz 1 lit. a DSGVO. Sofern eine Auskunftei einen Wahrscheinlichkeitswert übermittelt, beruht dieser auf einem mathematisch-statistischen Verfahren der Auskunftei; nähere Informationen erhalten Sie unmittelbar dort. Finanzielle Unterlagen fordern wir grundsätzlich erst an, wenn nach einer Besichtigung beiderseitiges Interesse besteht.
                </p>
                <p>
                  <strong>f) Erfüllung geldwäscherechtlicher Pflichten.</strong> Identifizierung der Vertragsparteien, ihrer Vertreter und der wirtschaftlich Berechtigten, Erhebung und Überprüfung von Ausweisdaten sowie Aufbewahrung von Dokumentenkopien. Bei Verdachtsfällen besteht eine Meldepflicht gegenüber der Zentralstelle für Finanztransaktionsuntersuchungen.<br />
                  Rechtsgrundlage: Art. 6 Absatz 1 lit. c DSGVO in Verbindung mit §§ 10 ff. GwG.
                </p>
                <p>
                  <strong>g) Erfüllung handels- und steuerrechtlicher Pflichten.</strong><br />
                  Rechtsgrundlage: Art. 6 Absatz 1 lit. c DSGVO in Verbindung mit § 257 HGB und § 147 AO.
                </p>
                <p>
                  <strong>h) Geltendmachung und Abwehr von Rechtsansprüchen.</strong><br />
                  Rechtsgrundlage: Art. 6 Absatz 1 lit. f DSGVO.<br />
                  Berechtigtes Interesse: Durchsetzung eigener Ansprüche und Verteidigung gegen Ansprüche Dritter.
                </p>
              </div>
            </div>

            {/* 10. Kategorien verarbeiteter Daten */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">10. Kategorien verarbeiteter Daten</h3>
              <p>
                Anrede, Titel, Vor- und Nachname, Geburtsdatum, Anschrift, Kontaktdaten, Angaben zur Suchanfrage und zu Präferenzen, Vertrags- und Objektdaten, Kommunikationsdaten einschließlich Schriftverkehr, Bankverbindung, Ausweisdaten nach den Vorgaben des Geldwäschegesetzes, Einkommens- und Bonitätsdaten sowie bei erteilter Einwilligung Öffnungs- und Klickdaten aus E-Mails.
              </p>
            </div>

            {/* 11. Herkunft der Daten (Art. 14 DSGVO) */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">11. Herkunft der Daten (Art. 14 DSGVO)</h3>
              <p>
                Soweit wir Daten nicht unmittelbar bei Ihnen erheben, stammen sie aus folgenden Quellen: Immobilienportale und Anfrageformulare Dritter, Eigentümer, Vermieter und Verwaltungen, Notare, Finanzierungs- und Kooperationspartner im Rahmen von Gemeinschaftsgeschäften, Auskunfteien bei erteilter Einwilligung sowie öffentlich zugängliche Quellen wie Grundbuch, Handelsregister, Liegenschaftskataster und Bodenrichtwertinformationssysteme.
              </p>
            </div>

            {/* 12. Empfänger */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">12. Empfänger</h3>
              <p>
                Ihre Daten werden nur weitergegeben, soweit dies zur Durchführung des Vertrages erforderlich ist, eine gesetzliche Pflicht besteht oder Sie eingewilligt haben. Empfänger können sein: Eigentümer, Verkäufer, Vermieter sowie Käufer und Mieter der jeweiligen Gegenseite, Hausverwaltungen, Notare, Banken und Finanzierungsvermittler, Auskunfteien, Versicherungen, Rechtsanwälte und Steuerberater, Behörden und Gerichte, andere Maklerunternehmen ausschließlich im Rahmen ausdrücklich vereinbarter Gemeinschaftsgeschäfte sowie IT- und Dienstleistungsunternehmen (z. B. Propstack CRM, Vercel, Microsoft, Cloudflare), die für uns als Auftragsverarbeiter nach Art. 28 DSGVO tätig sind.
              </p>
            </div>

            {/* 13. Dauer der Speicherung */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">13. Dauer der Speicherung</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Aufzeichnungen nach dem Geldwäschegesetz: fünf Jahre nach Ende der Geschäftsbeziehung (§ 8 Absatz 4 GwG)</li>
                <li>handels- und steuerrechtlich aufbewahrungspflichtige Unterlagen: sechs beziehungsweise zehn Jahre (§ 257 HGB, § 147 AO)</li>
                <li>Daten zu abgeschlossenen Vermittlungen: bis zum Ablauf der gesetzlichen Verjährungsfristen möglicher Ansprüche</li>
                <li>Daten von Interessenten ohne Vertragsschluss: Löschung spätestens zwölf Monate nach dem letzten Kontakt</li>
                <li>auf einer Einwilligung beruhende Daten: bis zum Widerruf</li>
              </ul>
            </div>

            {/* 14. Übermittlung in Drittländer */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">14. Übermittlung in Drittländer</h3>
              <p>
                Wir setzen Dienste ein, bei denen eine Verarbeitung außerhalb der Europäischen Union nicht ausgeschlossen ist, insbesondere Microsoft 365 für E-Mail, Kalender und Dateiablage, Vercel Inc. für die Bereitstellung unseres Kontaktformular-Backends, Cloudflare Inc. für den Formular-Schutz (Turnstile) sowie WhatsApp, sofern Sie diesen Kommunikationsweg selbst wählen. Grundlage der Übermittlung ist der Angemessenheitsbeschluss der Europäischen Kommission zum EU-US Data Privacy Framework, soweit der Anbieter zertifiziert ist, im Übrigen Standardvertragsklauseln nach Art. 46 Absatz 2 lit. c DSGVO. Wenn Sie eine Übermittlung an diese Anbieter nicht wünschen, kommunizieren Sie mit uns bitte telefonisch oder postalisch.
              </p>
            </div>

            {/* 15. Erforderlichkeit der Bereitstellung */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">15. Erforderlichkeit der Bereitstellung</h3>
              <p>
                Die Angabe Ihrer Kontakt- und Objektdaten ist für die Anbahnung und Durchführung des Vertrages erforderlich. Ohne diese Angaben können wir Sie nicht beraten und keine Vermittlungsleistung erbringen. Die Erhebung von Ausweisdaten im Rahmen des Geldwäschegesetzes ist gesetzlich vorgeschrieben. Kommen Sie Ihren Mitwirkungspflichten nach § 11 Absatz 6 GwG nicht nach, dürfen wir die Geschäftsbeziehung nicht begründen oder müssen sie beenden. Die Einwilligung in die Reichweitenmessung in E-Mails und in die Einholung von Auskünften bei Auskunfteien ist freiwillig.
              </p>
            </div>

            {/* 16. Automatisierte Entscheidungsfindung */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">16. Automatisierte Entscheidungsfindung</h3>
              <p>
                Eine ausschließlich auf einer automatisierten Verarbeitung beruhende Entscheidung mit rechtlicher Wirkung oder ähnlich erheblicher Beeinträchtigung im Sinne des Art. 22 DSGVO findet nicht statt. Der Abgleich von Suchprofilen mit unserem Objektbestand dient allein der Vorauswahl von Angeboten; die Entscheidung über Besichtigungen und Vertragsabschlüsse treffen Menschen.
              </p>
            </div>

            {/* 17. Ihre Rechte */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">17. Ihre Rechte</h3>
              <p>
                Sie haben das Recht auf Auskunft nach Art. 15, auf Berichtigung nach Art. 16, auf Löschung nach Art. 17, auf Einschränkung der Verarbeitung nach Art. 18 und auf Datenübertragbarkeit nach Art. 20 DSGVO. Soweit die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich hierzu an die unter Ziffer 2 genannte Adresse.
              </p>
            </div>

            {/* 18. WIDERSPRUCHSRECHT NACH ART. 21 DSGVO (Visually Separated Box) */}
            <div className="my-10 border-2 border-[#B8A67D] bg-[#B8A67D]/10 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-black uppercase tracking-wide">
                18. WIDERSPRUCHSRECHT NACH ART. 21 DSGVO
              </h2>
              <p className="font-semibold text-gray-900 leading-relaxed">
                Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen, die auf Grundlage des Art. 6 Absatz 1 lit. f DSGVO erfolgt. Das betrifft insbesondere die Betreuung als Interessent und die Zusendung von Objektangeboten.
              </p>
              <p className="font-semibold text-gray-900 leading-relaxed">
                Werden Ihre Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit ohne Angabe von Gründen Widerspruch gegen diese Verarbeitung einzulegen. Nach einem solchen Widerspruch verarbeiten wir Ihre Daten nicht mehr zu diesem Zweck.
              </p>
              <p className="font-semibold text-gray-900 leading-relaxed">
                Der Widerspruch ist an keine Form gebunden und kann formlos an{" "}
                <a href="mailto:datenschutz@uenal-immobilien.de" className="text-[#B8A67D] underline hover:text-[#a39670]">
                  datenschutz@uenal-immobilien.de
                </a>{" "}
                gerichtet werden.
              </p>
            </div>

            {/* 19. Beschwerderecht bei einer Aufsichtsbehörde */}
            <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-black">19. Beschwerderecht bei einer Aufsichtsbehörde</h3>
              <p>
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für uns zuständig ist:
              </p>
              <p className="font-medium text-black">
                Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
                Prinzenstraße 5, 30159 Hannover<br />
                Telefon: 0511 120 4500<br />
                E-Mail: poststelle@lfd.niedersachsen.de
              </p>
            </div>

            {/* 20. Änderungen dieser Datenschutzerklärung */}
            <div className="space-y-4 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-black">20. Änderungen dieser Datenschutzerklärung</h3>
              <p>
                Wir passen diese Datenschutzerklärung an, wenn sich unsere Verarbeitung oder die rechtlichen Vorgaben ändern. Die jeweils aktuelle Fassung finden Sie unter{" "}
                <a href="https://uenal-immobilien.de/datenschutz" className="text-[#B8A67D] underline hover:text-[#a39670]">
                  https://uenal-immobilien.de/datenschutz
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
