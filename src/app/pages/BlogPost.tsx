"use client";

import {
  ArrowLeft,
  Calendar,
  Clock,
  Mail,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Button } from "../components/ui/button";

// Blog posts data with full SEO-optimized content
export const blogPostsData = [
  {
    slug: "immobilie-verkaufen-5-haeufigste-fehler",
    title:
      "Immobilie verkaufen: Die 5 häufigsten Fehler und wie Sie diese vermeiden",
    metaDescription:
      "Von unrealistischen Preisvorstellungen bis hin zu mangelhafter Vorbereitung – wir zeigen Ihnen die 5 häufigsten Fehler beim Immobilienverkauf und wie Sie diese vermeiden.",
    excerpt:
      "Von unrealistischen Preisvorstellungen bis hin zu mangelhafter Vorbereitung – wir zeigen Ihnen, worauf es wirklich ankommt.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    category: "Verkaufstipps",
    date: "10. März 2025",
    readTime: "2 Min.",
    author: "Uenal Immobilien Team",
    content: `
      <h2>Die 5 häufigsten Fehler beim Immobilienverkauf</h2>
      
      <p>Der Verkauf einer Immobilie ist für die meisten Menschen eine einmalige Angelegenheit. Umso wichtiger ist es, typische Fallstricke zu kennen und zu vermeiden. Als erfahrene Dealmaker aus dem Nordwesten haben wir in über 100 vermittelten Objekten immer wieder dieselben Fehler beobachtet.</p>

      <h3>1. Unrealistische Preisvorstellungen</h3>
      
      <p>Der mit Abstand häufigste Fehler: Eigentümer überschätzen den Wert ihrer Immobilie massiv. Emotionale Bindung, selbst durchgeführte Renovierungen und Erinnerungen verzerren die Wahrnehmung.</p>

      <p><strong>Die Folgen:</strong></p>
      <ul>
        <li>Lange Vermarktungszeiten (6+ Monate)</li>
        <li>Immobilie wird als "Ladenhüter" wahrgenommen</li>
        <li>Preis muss später deutlich reduziert werden</li>
        <li>Am Ende wird weniger erzielt als mit realistischem Einstiegspreis</li>
      </ul>

      <p><strong>Unsere Lösung:</strong> Wir setzen auf marktgerechte Bewertungen. Keine Schönfärberei, keine unrealistischen Versprechungen. Ein ehrlicher Preis verkauft sich schneller und zu besseren Konditionen.</p>

      <h3>2. Mangelhafte Objektvorbereitung</h3>
      
      <p>Viele Eigentümer unterschätzen die Bedeutung des ersten Eindrucks. Eine unaufgeräumte, schlecht präsentierte Immobilie verkauft sich schwerer – selbst wenn die Substanz gut ist.</p>

      <p><strong>Was oft fehlt:</strong></p>
      <ul>
        <li>Professionelle Fotografie (Smartphone-Bilder reichen nicht!)</li>
        <li>Grundreinigung und Entrümpelung</li>
        <li>Kleine Reparaturen und Ausbesserungen</li>
        <li>Neutralisierung zu persönlicher Einrichtung</li>
      </ul>

      <p>Investitionen von 500-2000€ in Homestaging und Fotografie können den Verkaufspreis um 5-15% steigern. Das ist nachweislich die beste Rendite.</p>

      <h3>3. Unvollständige oder fehlende Unterlagen</h3>
      
      <p>Fehlende Dokumente verzögern den Verkaufsprozess erheblich und schaffen Misstrauen bei Kaufinteressenten.</p>

      <p><strong>Diese Unterlagen sollten vorliegen:</strong></p>
      <ul>
        <li>Energieausweis (seit 2024 verpflichtend bei Vermarktung)</li>
        <li>Grundrisse und Flächenberechnungen</li>
        <li>Baubeschreibung und Modernisierungsnachweise</li>
        <li>Grundbuchauszug</li>
        <li>Teilungserklärung (bei Eigentumswohnungen)</li>
        <li>Protokolle der letzten Eigentümerversammlungen</li>
      </ul>

      <h3>4. Falsche Vermarktungsstrategie</h3>
      
      <p>Nicht jede Immobilie sollte auf allen Portalen geschaltet werden. Premium-Objekte profitieren oft von diskreter Off-Market-Vermarktung. Standard-Objekte brauchen maximale Reichweite.</p>

      <p>Wir entwickeln für jedes Objekt eine individuelle Strategie – keine 0815-Vermarktung.</p>

      <h3>5. Keine professionelle Begleitung</h3>
      
      <p>Der Versuch, Zeit und Provision zu sparen, kostet am Ende oft deutlich mehr Geld:</p>

      <ul>
        <li>Zeitaufwand wird massiv unterschätzt (50+ Stunden sind normal)</li>
        <li>Rechtliche Fallstricke werden übersehen</li>
        <li>Verhandlungsgeschick fehlt in der entscheidenden Phase</li>
        <li>Kaufpreis liegt 5-15% unter Marktwert</li>
      </ul>

      <h2>Fazit: Ehrlichkeit schlägt Wunschdenken</h2>
      
      <p>Als Dealmaker aus dem Nordwesten stehen wir für einen realistischen, strategischen Ansatz. Wir versprechen nicht das Blaue vom Himmel, sondern liefern Ergebnisse.</p>

      <p><strong>Ihre Immobilie verdient eine professionelle Vermarktung.</strong> Lassen Sie uns gemeinsam den bestmöglichen Deal erzielen – ehrlich, strategisch, erfolgreich.</p>
    `,
  },
  {
    slug: "immobilien-vermarktung-strategie",
    title:
      "Warum Strategie Wunschdenken schlägt: Erfolgreiche Immobilienvermarktung im Nordwesten",
    metaDescription:
      "Erfolgreiche Immobilienvermarktung basiert auf Strategie, nicht auf Wunschdenken. Erfahren Sie, wie durchdachte Konzepte den Unterschied machen.",
    excerpt:
      "Erfahren Sie, wie durchdachte Verkaufsstrategien den Unterschied zwischen Erfolg und Enttäuschung ausmachen.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    category: "Strategie",
    date: "22. März 2025",
    readTime: "2 Min.",
    author: "Uenal Immobilien Team",
    content: `
      <h2>Strategie schlägt Wunschdenken: So funktioniert erfolgreiche Immobilienvermarktung</h2>
      
      <p>In über 100 vermittelten Immobilien haben wir eines gelernt: Der Markt belohnt Strategie, nicht Hoffnung. Während viele Makler auf Standardprozesse setzen, entwickeln wir für jedes Objekt ein individuelles Konzept.</p>

      <h3>Die 3 Säulen erfolgreicher Vermarktung</h3>

      <h4>1. Realistische Marktanalyse statt Phantasiepreise</h4>
      
      <p>Wir beginnen immer mit einer ehrlichen Bewertung. Keine Schönfärberei, keine überzogenen Versprechen nur um den Auftrag zu bekommen. Warum?</p>

      <ul>
        <li>Überteuerte Objekte bleiben monatelang unverkauft</li>
        <li>Lange Standzeiten führen zu Preisreduzierungen</li>
        <li>Am Ende wird weniger erzielt als mit realistischem Start</li>
      </ul>

      <p><strong>Unser Ansatz:</strong> Marktgerechte Bewertung + strategische Positionierung = schnellerer Verkauf zum besseren Preis.</p>

      <h4>2. Individuelle Vermarktungsstrategie</h4>
      
      <p>Nicht jede Immobilie sollte gleich vermarktet werden:</p>

      <p><strong>Premium-Objekte (800.000€+):</strong></p>
      <ul>
        <li>Off-Market-Vermarktung für maximale Diskretion</li>
        <li>Exklusive Käuferansprache aus unserem Netzwerk</li>
        <li>Private Viewings statt Massenbesichtigungen</li>
      </ul>

      <p><strong>Standard-Objekte:</strong></p>
      <ul>
        <li>Maximale Online-Reichweite (ImmobilienScout24, Immowelt, etc.)</li>
        <li>Professionelles Marketing-Paket</li>
        <li>Strukturierte Besichtigungstouren</li>
      </ul>

      <p><strong>Renovierungsobjekte:</strong></p>
      <ul>
        <li>Ansprache von Investoren und Projektentwicklern</li>
        <li>Potenzialanalyse und Renditecalculation</li>
        <li>Gezieltes Marketing in Fachkreisen</li>
      </ul>

      <h4>3. Professionelle Objektaufbereitung</h4>
      
      <p>Der erste Eindruck entscheidet. Deshalb investieren wir in:</p>

      <ul>
        <li>Professionelle Immobilienfotografie (HDR, Drohnenaufnahmen)</li>
        <li>3D-Grundrisse und virtuelle Rundgänge bei Premium-Objekten</li>
        <li>Homestaging-Beratung</li>
        <li>Exposés mit echtem Mehrwert statt Standardtexten</li>
      </ul>

      <h3>Timing ist alles: Der richtige Zeitpunkt</h3>
      
      <p>Viele unterschätzen saisonale Effekte im Immobilienmarkt:</p>

      <ul>
        <li><strong>Frühling (März-Mai):</strong> Höchste Nachfrage, beste Verkaufszeit</li>
        <li><strong>Sommer (Juni-August):</strong> Urlaubszeit, weniger Aktivität</li>
        <li><strong>Herbst (September-November):</strong> Zweite starke Phase</li>
        <li><strong>Winter (Dezember-Februar):</strong> Geringste Aktivität, außer bei Anlageimmobilien</li>
      </ul>

      <h3>Verhandlungsstrategie: Wo der Deal gemacht wird</h3>
      
      <p>Die beste Vermarktung nützt nichts ohne professionelle Verhandlungsführung:</p>

      <ul>
        <li>Mehrere Interessenten parallel führen (Wettbewerbssituation)</li>
        <li>Klare Kommunikation von Anforderungen</li>
        <li>Professionelle Bonitätsprüfung der Käufer</li>
        <li>Strukturierte Preisverhandlungen mit klaren Argumenten</li>
      </ul>

      <h2>Fallbeispiel: Einfamilienhaus Oldenburg</h2>
      
      <p><strong>Objekt:</strong> Einfamilienhaus, 180m², Oldenburg-Kreyenbrück<br/>
      <strong>Herausforderung:</strong> Renovierungsstau, schwierige Lage<br/>
      <strong>Vorheriger Makler:</strong> 6 Monate erfolglos zu 450.000€</p>

      <p><strong>Unsere Strategie:</strong></p>
      <ol>
        <li>Realistische Neubewertung: 385.000€</li>
        <li>Gezielte Ansprache von Handwerkern und Selbstrenovierern</li>
        <li>Kalkulation des Renovierungspotentials transparent dargestellt</li>
        <li>Verkauft in 6 Wochen zu 392.000€</li>
      </ol>

      <p><strong>Ergebnis:</strong> Statt monatelangem Stillstand ein erfolgreicher Deal – durch Strategie statt Wunschdenken.</p>

      <h2>Warum "Die Dealmaker aus dem Nordwesten"?</h2>
      
      <p>Wir sind keine klassischen Makler. Wir sind Dealmaker, die:</p>

      <ul>
        <li>Ehrlich bewerten statt schönzureden</li>
        <li>Individuelle Strategien entwickeln statt 0815-Vermarktung</li>
        <li>Dort anfangen, wo andere aufhören</li>
        <li>Deals machen, wo andere aufgeben</li>
      </ul>

      <p><strong>Ihre Immobilie verdient eine durchdachte Strategie.</strong> Keine leeren Versprechen, keine Standardprozesse – nur ehrliche, professionelle Arbeit mit einem Ziel: den bestmöglichen Deal für Sie.</p>
    `,
  },
  {
    slug: "immobilienmarkt-nordwest-2025",
    title: "Immobilienmarkt Nordwest 2025: Trends, Chancen und Prognosen",
    metaDescription:
      "Der Immobilienmarkt im Nordwesten 2025: Aktuelle Trends, Preisentwicklungen und Prognosen für Oldenburg, Bremen, Delmenhorst und Umgebung.",
    excerpt:
      "Der Immobilienmarkt im Nordwesten bleibt dynamisch. Wir analysieren die wichtigsten Entwicklungen für Käufer und Verkäufer.",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800",
    category: "Marktanalyse",
    date: "12. Februar 2025",
    readTime: "3 Min.",
    author: "Uenal Immobilien Team",
    content: `
      <h2>Immobilienmarkt Nordwest 2025: Was Eigentümer und Käufer jetzt wissen müssen</h2>
      
      <p>Nach den turbulenten Jahren 2022-2024 beruhigt sich der Immobilienmarkt im Nordwesten zunehmend. Wir analysieren die wichtigsten Trends für Oldenburg, Bremen, Delmenhorst und die Region.</p>

      <h3>Preisentwicklung 2025: Stabilisierung auf hohem Niveau</h3>
      
      <p>Die Preisexplosion ist vorbei, aber das Niveau bleibt hoch:</p>

      <p><strong>Oldenburg (Stadt):</strong></p>
      <ul>
        <li>Einfamilienhäuser: Ø 4.200-5.800 €/m² (Vorjahr: 4.500-6.200 €/m²)</li>
        <li>Eigentumswohnungen: Ø 3.600-4.900 €/m² (Vorjahr: 3.800-5.200 €/m²)</li>
        <li>Tendenz: Leichte Korrektur, jetzt Stabilisierung</li>
      </ul>

      <p><strong>Bremen (attraktive Lagen):</strong></p>
      <ul>
        <li>Einfamilienhäuser: Ø 3.800-5.200 €/m²</li>
        <li>Eigentumswohnungen: Ø 3.200-4.500 €/m²</li>
        <li>Tendenz: Stabil</li>
      </ul>

      <p><strong>Delmenhorst:</strong></p>
      <ul>
        <li>Einfamilienhäuser: Ø 2.800-3.600 €/m²</li>
        <li>Eigentumswohnungen: Ø 2.400-3.200 €/m²</li>
        <li>Tendenz: Leichte Preissteigerung durch Nachfrageverschiebung</li>
      </ul>

      <h3>Zinsentwicklung: Der entscheidende Faktor</h3>
      
      <p>Die Bauzinsen haben sich bei 3,5-4,5% eingependelt. Das ist deutlich höher als 2020-2021 (0,8-1,5%), aber niedriger als der Peak von 4,5-5,0% in 2023.</p>

      <p><strong>Auswirkungen:</strong></p>
      <ul>
        <li>Kaufkraft ist um ca. 25-30% gesunken im Vergleich zu 2021</li>
        <li>Käufer achten stärker auf Preis-Leistung</li>
        <li>Verhandlungsspielraum hat sich für Käufer verbessert</li>
      </ul>

      <h3>Angebot vs. Nachfrage: Das Marktgleichgewicht verschiebt sich</h3>
      
      <p><strong>2021-2022:</strong> Extremer Käufermarkt - zu wenig Angebot, zu viel Nachfrage<br/>
      <strong>2023-2024:</strong> Markt dreht sich - mehr Angebot, weniger Nachfrage<br/>
      <strong>2025:</strong> Ausgeglichener Markt - realistisches Gleichgewicht</p>

      <p>Das bedeutet konkret:</p>
      <ul>
        <li>Keine Verkäufe mehr über Angebotspreis</li>
        <li>Längere Vermarktungszeiten (3-6 Monate sind normal)</li>
        <li>Verhandlungen sind wieder Standard (5-10% Nachlass möglich)</li>
        <li>Qualität und Zustand werden entscheidender</li>
      </ul>

      <h3>Top-Trends 2025</h3>

      <h4>1. Energetische Sanierung wird Pflicht</h4>
      
      <p>Das Gebäudeenergiegesetz (GEG) verschärft die Anforderungen:</p>
      <ul>
        <li>Neue Heizungen müssen zu 65% erneuerbar sein (ab 2024 Neubau, ab 2028 schrittweise Bestand)</li>
        <li>Energieausweis ist Pflicht bei Vermarktung</li>
        <li>Sanierungskosten müssen in Bewertung einfließen</li>
      </ul>

      <p><strong>Folge:</strong> Unsanierte Objekte verlieren an Wert, energetisch hochwertige Immobilien gewinnen.</p>

      <h4>2. Homeoffice bleibt wichtig</h4>
      
      <p>Die Nachfrage nach Arbeitszimmern und flexiblen Räumen bleibt hoch:</p>
      <ul>
        <li>Objekte mit separatem Arbeitszimmer sind gefragter</li>
        <li>Gute Internetanbindung ist Grundvoraussetzung</li>
        <li>Flexible Grundrisse steigern Verkaufschancen</li>
      </ul>

      <h4>3. Urbanisierung vs. Landlust</h4>
      
      <p>Interessanter Trend: Der Markt spaltet sich</p>

      <p><strong>Wachsende Nachfrage:</strong></p>
      <ul>
        <li>Zentrale Innenstadtlagen (Oldenburg, Bremen)</li>
        <li>Speckgürtel mit guter Anbindung (30-Minuten-Umkreis)</li>
      </ul>

      <p><strong>Sinkende Nachfrage:</strong></p>
      <ul>
        <li>Sehr ländliche Lagen ohne Infrastruktur</li>
        <li>Regionen mit schlechter ÖPNV-Anbindung</li>
      </ul>

      <h4>4. Neubau vs. Bestand</h4>
      
      <p>Neubauten sind durch gestiegene Baukosten 30-40% teurer als vor 3 Jahren. Das macht gut erhaltenen Bestand attraktiver:</p>

      <ul>
        <li>Renovierte Bestandsimmobilien sind preislich konkurrenzfähig</li>
        <li>Charme und Stil von Altbauten werden geschätzt</li>
        <li>Sofortige Verfügbarkeit ist ein Vorteil</li>
      </ul>

      <h3>Prognose für 2025-2026</h3>
      
      <p><strong>Kurzfristig (2025):</strong></p>
      <ul>
        <li>Preise bleiben weitgehend stabil</li>
        <li>Leichte Erholung der Nachfrage im Frühjahr/Herbst</li>
        <li>Qualität wird wichtiger als Quantität</li>
      </ul>

      <p><strong>Mittelfristig (2026-2027):</strong></p>
      <ul>
        <li>Leichte Preissteigerungen bei Top-Lagen (2-4% p.a.)</li>
        <li>Stagnation bei durchschnittlichen Lagen</li>
        <li>Preisdruck bei unsanierten/ungünstigen Objekten</li>
      </ul>

      <h3>Was bedeutet das für Verkäufer?</h3>
      
      <p><strong>Jetzt verkaufen oder warten?</strong></p>

      <p>Die richtige Antwort: Es kommt auf Ihr Objekt an.</p>

      <p><strong>Jetzt verkaufen macht Sinn bei:</strong></p>
      <ul>
        <li>Unsanierten Objekten (bevor GEG greift)</li>
        <li>Sehr speziellen Immobilien (lange Vermarktungszeit)</li>
        <li>Dringenden persönlichen Gründen</li>
      </ul>

      <p><strong>Warten kann sinnvoll sein bei:</strong></p>
      <ul>
        <li>Top-Objekten in besten Lagen</li>
        <li>Kürzlich energetisch sanierten Immobilien</li>
        <li>Wenn Sie auf den Verkauf nicht angewiesen sind</li>
      </ul>

      <h3>Was bedeutet das für Käufer?</h3>
      
      <p><strong>Chancen 2025:</strong></p>
      <ul>
        <li>Wieder echte Verhandlungsspielräume (5-10%)</li>
        <li>Größere Auswahl als 2021-2022</li>
        <li>Zeit für fundierte Entscheidungen</li>
        <li>Verkäufer sind kompromissbereiter</li>
      </ul>

      <p><strong>Herausforderungen:</strong></p>
      <ul>
        <li>Höhere Zinsen bedeuten weniger Kaufkraft</li>
        <li>Gute Objekte werden weiterhin schnell verkauft</li>
        <li>Energetische Sanierung muss einkalkuliert werden</li>
      </ul>

      <h2>Fazit: Ein realistischer Markt kehrt zurück</h2>
      
      <p>Nach Jahren der Extreme normalisiert sich der Immobilienmarkt im Nordwesten. Das ist positiv für alle Beteiligten:</p>

      <ul>
        <li>Verkäufer können bei realistischen Preisen erfolgreich verkaufen</li>
        <li>Käufer haben wieder Verhandlungsmacht</li>
        <li>Qualität und Strategie schlagen Wunschdenken</li>
      </ul>

      <p><strong>Genau hier sind wir als Dealmaker in unserem Element:</strong> Realistische Bewertungen, strategische Vermarktung, erfolgreiche Verhandlungen. Kein Hype, keine falschen Versprechen – nur ehrliche, professionelle Arbeit.</p>
    `,
  },
  {
    slug: "homestaging-immobilie-in-szene-setzen",
    title: "Homestaging: Wie Sie Ihre Immobilie optimal in Szene setzen",
    metaDescription:
      "Mit professionellem Homestaging erzielen Sie bis zu 15% höhere Verkaufspreise. Erfahren Sie, wie Sie Ihre Immobilie optimal präsentieren.",
    excerpt:
      "Mit professionellem Homestaging erzielen Sie bis zu 15% höhere Verkaufspreise. So funktioniert's.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    category: "Verkaufstipps",
    date: "26. Januar 2025",
    readTime: "3 Min.",
    author: "Uenal Immobilien Team",
    content: `
      <h2>Homestaging: Die Kunst, Ihre Immobilie perfekt zu präsentieren</h2>
      
      <p>Studien zeigen: Professionell inszenierte Immobilien verkaufen sich 30-50% schneller und erzielen 5-15% höhere Preise. Homestaging ist keine Täuschung, sondern strategische Präsentation.</p>

      <h3>Was ist Homestaging?</h3>
      
      <p>Homestaging bedeutet, eine Immobilie so zu präsentieren, dass Kaufinteressenten sich sofort vorstellen können, dort zu leben. Es geht darum:</p>

      <ul>
        <li>Räume optimal zu inszenieren</li>
        <li>Stärken hervorzuheben</li>
        <li>Schwächen zu kaschieren</li>
        <li>Emotionen zu wecken</li>
      </ul>

      <h3>Die 3 Level des Homestagings</h3>

      <h4>Level 1: Basics (DIY - Kosten: 0-500€)</h4>
      
      <p>Diese Maßnahmen kann jeder selbst umsetzen:</p>

      <ul>
        <li><strong>Entrümpelung:</strong> Weniger ist mehr. Entfernen Sie 50% der Möbel und Deko</li>
        <li><strong>Tiefenreinigung:</strong> Fenster putzen, Böden wischen, Fugen reinigen</li>
        <li><strong>Neutralisierung:</strong> Persönliche Fotos entfernen, bunte Wände weiß streichen</li>
        <li><strong>Kleine Reparaturen:</strong> Tropfende Wasserhähne, lockere Türgriffe, Kratzer ausbessern</li>
        <li><strong>Gerüche eliminieren:</strong> Lüften, Teppichreinigung, neutrale Raumdüfte</li>
      </ul>

      <p><strong>Effekt:</strong> +5-8% höherer Verkaufspreis bei minimalen Kosten</p>

      <h4>Level 2: Professional Staging (Kosten: 1.000-3.000€)</h4>
      
      <p>Hier kommen Profis ins Spiel:</p>

      <ul>
        <li><strong>Professionelle Fotografie:</strong> HDR-Aufnahmen, optimale Perspektiven, Bildbearbeitung</li>
        <li><strong>Möblierung leerer Räume:</strong> Gezielte Akzente mit Leih-Möbeln</li>
        <li><strong>Lichtkonzept:</strong> Strategische Beleuchtung für perfekte Atmosphäre</li>
        <li><strong>Styling-Beratung:</strong> Professionelle Raumgestaltung</li>
      </ul>

      <p><strong>Effekt:</strong> +10-15% höherer Verkaufspreis, 40% kürzere Vermarktungszeit</p>

      <h4>Level 3: Luxury Staging (Kosten: 5.000-15.000€)</h4>
      
      <p>Für Premium-Immobilien ab 800.000€:</p>

      <ul>
        <li>Komplette Möblierung durch Interior Designer</li>
        <li>3D-Visualisierungen und virtuelle Rundgänge</li>
        <li>Drohnenaufnahmen und Videoproduktion</li>
        <li>Professionelle Gartengestaltung</li>
      </ul>

      <p><strong>Effekt:</strong> Verkauf deutlich über Marktwert möglich, Premium-Käufer werden angesprochen</p>

      <h3>Raum für Raum: So geht's richtig</h3>

      <h4>Wohnzimmer</h4>
      <ul>
        <li>Sofa im 45°-Winkel statt an der Wand</li>
        <li>Couchtisch freiräumen (max. 1 Deko-Element)</li>
        <li>Vorhänge öffnen für maximales Licht</li>
        <li>Neutrale Farben (beige, grau, weiß)</li>
      </ul>

      <h4>Küche</h4>
      <ul>
        <li>Arbeitsplatten komplett leerräumen</li>
        <li>Nur 1-2 hochwertige Geräte sichtbar (z.B. Kaffeemaschine)</li>
        <li>Frisches Obst in schöner Schale</li>
        <li>Blumen auf dem Esstisch</li>
      </ul>

      <h4>Schlafzimmer</h4>
      <ul>
        <li>Hotel-Style: Perfekt gemachtes Bett mit vielen Kissen</li>
        <li>Nachttische symmetrisch mit Lampen</li>
        <li>Kleiderschrank komplett geschlossen und aufgeräumt</li>
        <li>Maximal 2 Deko-Elemente</li>
      </ul>

      <h4>Badezimmer</h4>
      <ul>
        <li>Wie im 5-Sterne-Hotel: alles blitzsauber</li>
        <li>Frische weiße Handtücher</li>
        <li>Alle persönlichen Produkte in Schränken</li>
        <li>Duftkerze oder frische Blumen</li>
      </ul>

      <h3>Die häufigsten Homestaging-Fehler</h3>

      <p><strong>1. Zu viel persönliche Note</strong><br/>
      Familienfotos, religiöse Symbole, individuelle Kunstwerke – all das verhindert, dass Käufer sich selbst in der Immobilie sehen.</p>

      <p><strong>2. Zu wenig Licht</strong><br/>
      Dunkle Räume wirken klein und ungemütlich. Öffnen Sie alle Vorhänge, schalten Sie alle Lampen an – auch tagsüber!</p>

      <p><strong>3. Gerüche ignorieren</strong><br/>
      Haustiere, Raucher, Kochgerüche – unsere Nase gewöhnt sich daran, Besucher riechen es sofort. Professionelle Reinigung ist Pflicht.</p>

      <p><strong>4. Unordnung unterschätzen</strong><br/>
      Ein vollgestellter Raum wirkt klein. Leere Flächen suggerieren Platz und Großzügigkeit.</p>

      <h3>ROI: Lohnt sich Homestaging?</h3>
      
      <p>Klare Antwort: Ja!</p>

      <p><strong>Beispielrechnung Einfamilienhaus (400.000€):</strong></p>
      <ul>
        <li>Investment Homestaging: 2.000€</li>
        <li>Preissteigerung: +8% = 32.000€</li>
        <li>ROI: 1.500%</li>
        <li>Zusatzbonus: 6 Wochen statt 4 Monate Vermarktungszeit</li>
      </ul>

      <p>Selbst bei konservativer Rechnung (+5%) ergibt sich ein ROI von 900%. Kein anderes Marketing-Instrument liefert bessere Ergebnisse.</p>

      <h3>Fazit: Der erste Eindruck zählt</h3>
      
      <p>In Zeiten von Online-Besichtigungen und 30-Sekunden-Aufmerksamkeitsspanne entscheiden die ersten Fotos über Erfolg oder Misserfolg. Homestaging ist keine Option, sondern Pflicht für erfolgreiche Vermarktung.</p>

      <p><strong>Wir bieten unseren Verkäufern professionelles Homestaging als Teil unseres Service-Pakets.</strong> Weil wir wissen: Eine perfekt präsentierte Immobilie verkauft sich schneller und teurer – zum Vorteil aller Beteiligten.</p>
    `,
  },
  {
    slug: "off-market-verkauf-diskretion",
    title: "Off-Market-Verkauf: Diskretion als Erfolgsfaktor",
    metaDescription:
      "Off-Market-Verkauf: Warum immer mehr hochwertige Immobilien diskret vermittelt werden und welche Vorteile dies für Verkäufer bietet.",
    excerpt:
      "Warum immer mehr hochwertige Immobilien im Stillen vermittelt werden und welche Vorteile dies bietet.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
    category: "Premium-Service",
    date: "14. Februar 2025",
    readTime: "3 Min.",
    author: "Uenal Immobilien Team",
    content: `
      <h2>Off-Market-Verkauf: Wenn Diskretion zum Erfolgsfaktor wird</h2>
      
      <p>Nicht jede Immobilie gehört auf ImmobilienScout24. Premium-Objekte, sensible Verkaufssituationen oder exklusive Lagen profitieren oft von diskreter Vermarktung. Wir erklären, wie Off-Market-Verkäufe funktionieren.</p>

      <h3>Was ist Off-Market-Vermarktung?</h3>
      
      <p>Off-Market bedeutet: Die Immobilie wird nicht öffentlich auf Portalen inseriert, sondern gezielt und diskret an ausgewählte Interessenten herangetragen.</p>

      <p><strong>Merkmale:</strong></p>
      <ul>
        <li>Keine öffentlichen Inserate</li>
        <li>Gezielte Ansprache qualifizierter Käufer</li>
        <li>Exklusive Besichtigungen (keine Massenveranstaltungen)</li>
        <li>Höchste Diskretion</li>
      </ul>

      <h3>Für wen eignet sich Off-Market?</h3>

      <h4>1. Premium-Immobilien (ab 800.000€)</h4>
      
      <p>Hochpreisige Objekte haben einen sehr begrenzten Käuferkreis. Massenvermarktung bringt hier keine Vorteile:</p>

      <ul>
        <li>Zu viele Besichtigungen mit unqualifizierten Interessenten</li>
        <li>Gefahr des "Ladenhüter"-Effekts</li>
        <li>Hoher Zeitaufwand für Eigentümer</li>
      </ul>

      <p><strong>Off-Market-Vorteil:</strong> Nur ernsthafte, finanziell geprüfte Käufer werden angesprochen.</p>

      <h4>2. Promis, Geschäftsführer, öffentliche Personen</h4>
      
      <p>Wenn der Verkauf aus persönlichen Gründen nicht öffentlich werden soll:</p>

      <ul>
        <li>Scheidung</li>
        <li>Finanzielle Schwierigkeiten</li>
        <li>Berufliche Veränderungen</li>
        <li>Erbschaft</li>
      </ul>

      <p>Öffentliche Inserate würden Fragen aufwerfen, die vermieden werden sollen.</p>

      <h4>3. Besondere Architektur oder Ausstattung</h4>
      
      <p>Extravagante Immobilien mit sehr speziellem Geschmack brauchen den richtigen Käufer, nicht die meisten Besichtigungen:</p>

      <ul>
        <li>Architekten-Villen</li>
        <li>Denkmalgeschützte Objekte</li>
        <li>Außergewöhnliche Grundrisse</li>
      </ul>

      <h4>4. Nachbarschaftssensible Situationen</h4>
      
      <p>Manchmal sollen Nachbarn nicht vorschnell vom Verkauf erfahren:</p>

      <ul>
        <li>Mehrfamilienhaus-Verkauf (Mieterwechsel-Sorgen vermeiden)</li>
        <li>Geschäftsaufgabe (keine vorzeitige Unruhe)</li>
        <li>Private Gründe</li>
      </ul>

      <h3>Wie funktioniert Off-Market konkret?</h3>

      <h4>Phase 1: Analyse & Käuferprofil</h4>
      
      <p>Wir erstellen ein detailliertes Profil des idealen Käufers:</p>
      <ul>
        <li>Einkommensklasse</li>
        <li>Lebenssituation (Familie, Single, Rentner)</li>
        <li>Berufliche Situation</li>
        <li>Geografische Präferenzen</li>
      </ul>

      <h4>Phase 2: Gezielte Ansprache</h4>
      
      <p>Wir nutzen unser Netzwerk:</p>
      <ul>
        <li><strong>Käuferdatenbank:</strong> Über 200 registrierte Kaufinteressenten in unserer Datenbank</li>
        <li><strong>Kooperationspartner:</strong> Andere Makler, Bauträger, Investoren</li>
        <li><strong>Direktansprache:</strong> Gezielte Ansprache passender Zielgruppen</li>
        <li><strong>Diskrete Netzwerkarbeit:</strong> Mundpropaganda in exklusiven Kreisen</li>
      </ul>

      <h4>Phase 3: Qualifizierung</h4>
      
      <p>Bevor ein Interessent die Immobilie sieht:</p>
      <ul>
        <li>Bonitätsprüfung (Finanzierungsbestätigung)</li>
        <li>Ernsthaftigkeit des Interesses</li>
        <li>Passung zum Objekt</li>
      </ul>

      <p>Nur qualifizierte Interessenten bekommen Zugang.</p>

      <h4>Phase 4: Exklusive Besichtigungen</h4>
      
      <p>Keine Massen-Viewings, sondern:</p>
      <ul>
        <li>Individuelle Terminvereinbarungen</li>
        <li>Persönliche Begleitung</li>
        <li>Zeit für Fragen und Details</li>
        <li>Höchste Diskretion</li>
      </ul>

      <h3>Vorteile von Off-Market</h3>

      <p><strong>Für Verkäufer:</strong></p>
      <ul>
        <li>✓ Maximale Diskretion</li>
        <li>✓ Keine Neugierigen oder Konkurrenz-Checker</li>
        <li>✓ Weniger Zeitaufwand (nur qualifizierte Besichtigungen)</li>
        <li>✓ Immobilie bleibt "frisch" (kein Ladenhüter-Effekt)</li>
        <li>✓ Verhandlungsposition bleibt stark</li>
        <li>✓ Höhere Verkaufspreise durch exklusiven Charakter</li>
      </ul>

      <p><strong>Für Käufer:</strong></p>
      <ul>
        <li>✓ Zugang zu Objekten vor dem breiten Markt</li>
        <li>✓ Keine Bieterwettbewerbe</li>
        <li>✓ Zeit für fundierte Entscheidungen</li>
        <li>✓ Exklusivität</li>
      </ul>

      <h3>Nachteile: Wann Off-Market NICHT sinnvoll ist</h3>

      <p>Off-Market ist nicht für jede Immobilie die beste Strategie:</p>

      <p><strong>NICHT geeignet bei:</strong></p>
      <ul>
        <li>Standard-Objekten unter 400.000€ (breite Zielgruppe profitiert von Massenvermarktung)</li>
        <li>Zeitdruck (Off-Market braucht Zeit)</li>
        <li>Schwer verkäuflichen Objekten (maximale Reichweite erforderlich)</li>
        <li>Sehr speziellen Zielgruppen (z.B. Denkmal-Käufer sind rar)</li>
      </ul>

      <h3>Hybrid-Ansatz: Das Beste aus beiden Welten</h3>
      
      <p>Oft kombinieren wir beide Strategien:</p>

      <p><strong>Phase 1 (Wochen 1-4): Off-Market</strong></p>
      <ul>
        <li>Gezielte Ansprache unserer Käuferdatenbank</li>
        <li>Netzwerk aktivieren</li>
        <li>Wenn passender Käufer gefunden → Deal!</li>
      </ul>

      <p><strong>Phase 2 (ab Woche 5): Public-Market</strong></p>
      <ul>
        <li>Falls Off-Market nicht erfolgreich</li>
        <li>Breite Vermarktung auf allen Portalen</li>
        <li>Immobilie ist immer noch "frisch"</li>
      </ul>

      <p>So kombinieren wir die Diskretion von Off-Market mit der Reichweite von Public-Market.</p>

      <h3>Erfolgsbeispiel: Villa Oldenburg</h3>
      
      <p><strong>Objekt:</strong> Architektenvilla, 380m², Pool, Oldenburg-Eversten<br/>
      <strong>Verkaufspreis:</strong> 1,85 Mio. €<br/>
      <strong>Strategie:</strong> 100% Off-Market</p>

      <p><strong>Ablauf:</strong></p>
      <ol>
        <li>Gezielte Ansprache von 12 qualifizierten Interessenten aus unserer Datenbank</li>
        <li>4 Besichtigungen mit bonitätsgeprüften Käufern</li>
        <li>2 Kaufangebote</li>
        <li>Verkauft in 5 Wochen – ohne ein einziges öffentliches Inserat</li>
      </ol>

      <p><strong>Vorteil für Verkäufer:</strong> Null Stress, maximale Diskretion, Verkaufspreis über Gutachtenwert.</p>

      <h2>Fazit: Qualität vor Quantität</h2>
      
      <p>Off-Market-Vermarktung ist die Premium-Strategie für Premium-Immobilien. Nicht die meisten Besichtigungen führen zum Erfolg, sondern die richtigen Interessenten.</p>

      <p><strong>Als Dealmaker verfügen wir über das Netzwerk und die Expertise für erfolgreiche Off-Market-Verkäufe.</strong> Diskret, professionell, erfolgreich – so wie es sein soll.</p>
    `,
  },
  {
    slug: "energieausweis-2025-pflichten",
    title: "Energieausweis 2025: Was Eigentümer jetzt wissen müssen",
    metaDescription:
      "Energieausweis 2025: Neue Regelungen, Pflichten und Anforderungen für Immobilieneigentümer. Der komplette Guide mit allen wichtigen Informationen.",
    excerpt:
      "Neue Regelungen, Fristen und Anforderungen – der komplette Guide zum Energieausweis.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    category: "Recht & Gesetz",
    date: "9. Januar 2025",
    readTime: "3 Min.",
    author: "Uenal Immobilien Team",
    content: `
      <h2>Energieausweis 2025: Alles was Eigentümer wissen müssen</h2>
      
      <p>Der Energieausweis ist seit 2024 verpflichtend bei jeder Immobilienvermarktung. Wir erklären, was Sie beachten müssen, welche Kosten entstehen und welche Strafen drohen.</p>

      <h3>Was ist ein Energieausweis?</h3>
      
      <p>Der Energieausweis ist der "Stromrechnung" Ihrer Immobilie vergleichbar. Er zeigt:</p>

      <ul>
        <li>Energieverbrauch bzw. Energiebedarf</li>
        <li>Energieeffizienzklasse (A+ bis H)</li>
        <li>CO2-Emissionen</li>
        <li>Empfohlene Modernisierungsmaßnahmen</li>
      </ul>

      <h3>Wann ist ein Energieausweis Pflicht?</h3>
      
      <p><strong>Verpflichtend bei:</strong></p>
      <ul>
        <li>Verkauf einer Immobilie</li>
        <li>Vermietung einer Immobilie</li>
        <li>Neubau (nach Fertigstellung)</li>
      </ul>

      <p><strong>Wichtig:</strong> Der Energieausweis muss bereits in der Immobilienanzeige angegeben werden, nicht erst bei Besichtigung!</p>

      <p><strong>Pflichtangaben in Immobilienanzeigen:</strong></p>
      <ul>
        <li>Art des Energieausweises (Bedarfs- oder Verbrauchsausweis)</li>
        <li>Energieträger der Heizung (Gas, Öl, Fernwärme, etc.)</li>
        <li>Baujahr des Gebäudes</li>
        <li>Energieeffizienzklasse</li>
        <li>Endenergieverbrauch/-bedarf</li>
      </ul>

      <h3>Bedarfs- vs. Verbrauchsausweis: Was ist der Unterschied?</h3>

      <h4>Verbrauchsausweis</h4>
      
      <p><strong>Basis:</strong> Tatsächlicher Energieverbrauch der letzten 3 Jahre</p>

      <p><strong>Vorteile:</strong></p>
      <ul>
        <li>Günstiger (ca. 50-100€)</li>
        <li>Schneller erstellt</li>
        <li>Basiert auf echten Daten</li>
      </ul>

      <p><strong>Nachteile:</strong></p>
      <ul>
        <li>Abhängig vom Nutzerverhalten</li>
        <li>Leerstand verfälscht Werte</li>
        <li>Nicht bei allen Gebäuden zulässig</li>
      </ul>

      <p><strong>Zulässig bei:</strong> Gebäuden mit mehr als 4 Wohneinheiten ODER Baujahr nach 1977</p>

      <h4>Bedarfsausweis</h4>
      
      <p><strong>Basis:</strong> Technische Gebäudeanalyse (Dämmung, Heizung, Fenster, etc.)</p>

      <p><strong>Vorteile:</strong></p>
      <ul>
        <li>Objektiv und nutzerunabhängig</li>
        <li>Präziser bei der Bewertung des Gebäudes</li>
        <li>Pflicht bei Altbauten</li>
      </ul>

      <p><strong>Nachteile:</strong></p>
      <ul>
        <li>Teurer (ca. 300-500€)</li>
        <li>Aufwendigere Erstellung</li>
        <li>Vor-Ort-Termin meist erforderlich</li>
      </ul>

      <p><strong>Verpflichtend bei:</strong> Gebäuden mit weniger als 5 Wohneinheiten UND Bauantrag vor dem 1. November 1977</p>

      <h3>Energieeffizienzklassen: Was bedeuten sie?</h3>
      
      <p>Seit 2014 gibt es die Einstufung in Klassen (wie bei Kühlschränken):</p>

      <ul>
        <li><strong>A+:</strong> unter 30 kWh/m²a (Passivhaus-Standard)</li>
        <li><strong>A:</strong> 30-50 kWh/m²a (KfW-Effizienzhaus)</li>
        <li><strong>B:</strong> 50-75 kWh/m²a (Neubau-Standard)</li>
        <li><strong>C:</strong> 75-100 kWh/m²a (Gut sanierter Altbau)</li>
        <li><strong>D:</strong> 100-130 kWh/m²a (Durchschnittlicher Altbau)</li>
        <li><strong>E:</strong> 130-160 kWh/m²a (Sanierungsbedarf)</li>
        <li><strong>F:</strong> 160-200 kWh/m²a (Hoher Sanierungsbedarf)</li>
        <li><strong>G:</strong> 200-250 kWh/m²a (Sehr hoher Sanierungsbedarf)</li>
        <li><strong>H:</strong> über 250 kWh/m²a (Dringender Sanierungsbedarf)</li>
      </ul>

      <h3>Kosten: Was kostet ein Energieausweis?</h3>
      
      <p><strong>Verbrauchsausweis:</strong></p>
      <ul>
        <li>Online-Anbieter: 50-100€</li>
        <li>Lokaler Energieberater: 100-150€</li>
      </ul>

      <p><strong>Bedarfsausweis:</strong></p>
      <ul>
        <li>Einfamilienhaus: 300-500€</li>
        <li>Mehrfamilienhaus: 500-800€</li>
        <li>Mit Vor-Ort-Begehung: +100-200€</li>
      </ul>

      <h3>Gültigkeit: Wie lange ist ein Energieausweis gültig?</h3>
      
      <p><strong>10 Jahre ab Ausstellungsdatum</strong></p>

      <p><strong>Aber Achtung:</strong> Bei energetischen Modernisierungen (neue Heizung, neue Fenster, Dämmung) muss ein neuer Energieausweis erstellt werden!</p>

      <h3>Strafen bei fehlendem Energieausweis</h3>
      
      <p>Die Strafen wurden 2024 verschärft:</p>

      <ul>
        <li><strong>Fehlende Angaben in Anzeige:</strong> bis 15.000€ Bußgeld</li>
        <li><strong>Kein Energieausweis bei Besichtigung:</strong> bis 15.000€ Bußgeld</li>
        <li><strong>Kein Energieausweis bei Verkauf/Vermietung:</strong> bis 15.000€ Bußgeld</li>
      </ul>

      <p><strong>Wichtig:</strong> Kontrollen haben 2024 massiv zugenommen. Das Risiko erwischt zu werden ist real!</p>

      <h3>Wer darf Energieausweise ausstellen?</h3>
      
      <p>Nicht jeder darf Energieausweise ausstellen. Berechtigt sind:</p>

      <ul>
        <li>Architekten und Bauingenieure</li>
        <li>Handwerksmeister bestimmter Gewerke</li>
        <li>Energieberater mit Zertifizierung</li>
        <li>Schornsteinfeger (nur Verbrauchsausweise)</li>
      </ul>

      <p><strong>Vorsicht vor unseriösen Anbietern:</strong> Extrem günstige Online-Angebote (unter 30€) sind oft nicht rechtssicher!</p>

      <h3>Einfluss auf den Verkaufspreis</h3>
      
      <p>Studien zeigen klare Zusammenhänge:</p>

      <ul>
        <li><strong>Klasse A-B:</strong> +8-12% höherer Verkaufspreis</li>
        <li><strong>Klasse C-D:</strong> Durchschnittspreis</li>
        <li><strong>Klasse E-F:</strong> -5-10% niedrigerer Verkaufspreis</li>
        <li><strong>Klasse G-H:</strong> -10-20% niedrigerer Verkaufspreis</li>
      </ul>

      <p>Grund: Käufer rechnen Sanierungskosten ein. Eine Immobilie in Klasse H benötigt oft 50.000-100.000€ Investition für Heizung, Fenster und Dämmung.</p>

      <h3>Modernisierungsempfehlungen im Energieausweis</h3>
      
      <p>Jeder Energieausweis enthält Empfehlungen für Verbesserungen:</p>

      <p><strong>Typische Maßnahmen:</strong></p>
      <ul>
        <li>Heizungstausch (z.B. auf Wärmepumpe)</li>
        <li>Fassadendämmung</li>
        <li>Dachdämmung</li>
        <li>Fenstertausch</li>
        <li>Kellerdeckendämmung</li>
      </ul>

      <p><strong>Diese Empfehlungen sind NICHT verpflichtend</strong> (außer bei Eigentümerwechsel gelten bestimmte Nachrüstpflichten).</p>

      <h3>Sonderfall: Denkmalgeschützte Gebäude</h3>
      
      <p>Auch denkmalgeschützte Immobilien brauchen einen Energieausweis!</p>

      <p><strong>Aber:</strong> Modernisierungsempfehlungen müssen nicht umgesetzt werden, wenn sie dem Denkmalschutz widersprechen.</p>

      <h3>Checkliste: So vermeiden Sie Fehler</h3>
      
      <p>✓ Energieausweis VOR Vermarktungsbeginn erstellen lassen<br/>
      ✓ Alle Pflichtangaben in Immobilienanzeige eintragen<br/>
      ✓ Bei Besichtigungen Original oder Kopie vorlegen<br/>
      ✓ Bei Verkauf dem Käufer übergeben (original oder Kopie)<br/>
      ✓ Nur zertifizierte Aussteller beauftragen<br/>
      ✓ Nach Modernisierung neuen Ausweis erstellen</p>

      <h2>Fazit: Energieausweis ist Pflicht – und das ist gut so</h2>
      
      <p>Der Energieausweis schafft Transparenz. Käufer und Mieter wissen, welche Energiekosten auf sie zukommen. Verkäufer müssen sich der energetischen Qualität ihrer Immobilie bewusst sein.</p>

      <p><strong>Unser Tipp:</strong> Sehen Sie den Energieausweis nicht als lästige Pflicht, sondern als Verkaufsargument. Eine gute Energieeffizienzklasse ist Geld wert!</p>

      <p><strong>Wir unterstützen unsere Verkäufer bei der Beschaffung korrekter Energieausweise und beraten zu sinnvollen Modernisierungen vor dem Verkauf.</strong> Strategie statt Wunschdenken – auch beim Energieausweis.</p>
    `,
  },
];

interface BlogPostProps {
  slug?: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const post = blogPostsData.find((p) => p.slug === slug);

  useEffect(() => {
    // Use scrollIntoView for better browser support instead of deprecated scrollTo
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artikel nicht gefunden</h1>
          <Link href="/blog">
            <Button>Zurück zum Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Note: Document title and meta tags should be set via Next.js Metadata API
  // in the page.tsx file or layout.tsx, not via DOM manipulation
  // This is handled at build time for better SEO and performance

  // Shared child reveal used with parent stagger containers.
  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const params = useParams();
  const slugFromParams = params.slug;
  console.log("slugparams", slugFromParams);

  const shareUrl = `http://www.uenal-immobilien.de/blog/${slugFromParams}`;
  console.log("shareurl", shareUrl);

  return (
    <article className="bg-white">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>

            <div className="mb-4">
              <span className="px-4 py-2 bg-[#B8A67D] text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} Lesezeit</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="prose prose-lg max-w-none"
        >
          <div
            className="tinymce-content blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold text-black mb-2">
                Artikel teilen
              </h3>
              <p className="text-gray-600">
                Teilen Sie diesen Artikel mit Ihrem Netzwerk
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-[#B8A67D] text-gray-700 hover:text-white rounded-full transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-[#B8A67D] text-gray-700 hover:text-white rounded-full transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`}
                className="p-3 bg-gray-100 hover:bg-[#B8A67D] text-gray-700 hover:text-white rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#B8A67D] to-[#A39670] rounded-2xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Haben Sie Fragen zu Ihrer Immobilie?
          </h3>
          <p className="text-lg mb-6 opacity-95">
            Lassen Sie uns sprechen – persönlich, direkt, ehrlich.
          </p>
          <Link href="/#kontakt">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white">
              Jetzt Kontakt aufnehmen
            </Button>
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-black mb-6">
            Weitere interessante Artikel
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPostsData
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#B8A67D] mb-2 block">
                      {relatedPost.category}
                    </span>
                    <h4 className="text-lg font-bold text-black group-hover:text-[#B8A67D] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Render JSON-LD as raw script content to avoid hydration text escaping mismatches. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            image: post.image,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Uenal Immobilien GmbH",
              logo: {
                "@type": "ImageObject",
                url: "https://uenal-immobilien.de/logo.png",
              },
            },
          }),
        }}
      />
    </article>
  );
}
