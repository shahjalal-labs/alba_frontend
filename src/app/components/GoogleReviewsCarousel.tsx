"use client";

import { ExternalLink, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Google Logo Component
const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
}

export default function GoogleReviewsCarousel() {
  // IMPORTANT: To use real Google Reviews, you need to:
  // 1. Get a Google Places API key from: https://console.cloud.google.com/
  // 2. Enable Places API in your Google Cloud Console
  // 3. Find your Place ID using: https://developers.google.com/maps/documentation/places/web-service/place-id
  // 4. Replace YOUR_API_KEY_HERE and YOUR_PLACE_ID_HERE below
  // 5. Uncomment the useEffect and API fetch code

  // For Uenal Immobilien GmbH, you would use their actual Place ID
  // const GOOGLE_PLACE_ID = "YOUR_PLACE_ID_HERE";
  // const GOOGLE_API_KEY = "YOUR_API_KEY_HERE";

  // Mock data representing real Google Reviews structure
  // In production, these would come from the Google Places API

  const [reviews] = useState<GoogleReview[]>([
    {
      author_name: "Thorsten Obert",
      rating: 5,
      text: `Mit Ünal Immobilien haben wir unseren Traum verwirklicht. Von der kompetenten und absolut transparenten Vermittlung bis hin zur notariellen Beurkundung wurden wir hervorragend betreut. Herr Ünal und sein Team leisteten zudem entscheidende Hilfe bei der umfassenden Renovierung. Ihr Engagement, ihr exzellentes Netzwerk und ihre ständige Erreichbarkeit trugen maßgeblich dazu bei, unseren Traum Wirklichkeit werden zu lassen.
Ich kann Herrn Ünal und sein Team uneingeschränkt als seriöse und vor allem ehrliche Partner empfehlen. Ein echter Glücksgriff! Vielen Dank für alles.`,
      time: 1709568000,
      relative_time_description: "vor 3 Monaten",
    },
    {
      author_name: "Tino Möller",
      rating: 5,
      text: `Erstklassiger Immobilienmakler, erstklassiger Support! 🤩

Herr Uenal hat uns mit seiner Motivation begeistert, uns hervorragend beraten, Angebote fristgerecht eingereicht und Besichtigungen geplant, durchgeführt und nachbereitet. Absolut stressfrei. Wir danken ihm herzlich und können diesen vertrauenswürdigen Service uneingeschränkt empfehlen. Vielen Dank für Ihren Einsatz, weiter so! Ein kompetenter und regional bestens vernetzter Dienstleister; wir bleiben in Kontakt. 12/2025 Familie Silke und Tino Möller, Hut ab! 👍🍀🙋‍♂️`,
      time: 1708358400,
      relative_time_description: "vor 3 Monaten",
    },
    {
      author_name: "Johannes Scherf",
      rating: 5,
      text: "Als Hypothekengeber arbeitete ich bei einem gemeinsamen Kunden mit Uenal Immobilien zusammen. Die Zusammenarbeit war äußerst professionell, unkompliziert und zuverlässig. Sie boten schnelle Koordination, klare Kommunikation und eine durchweg kundenorientierte Arbeitsweise ",
      time: 1707148800,
      relative_time_description: "vor 3 Monaten",
    },
    {
      author_name: "Benjamin Munkhart",
      rating: 5,
      text: "Wir hatten von Anfang an ein gutes Gefühl. Herr Ünal war stets erreichbar, gab ehrliche Ratschläge und sprach Klartext. Der Ablauf war reibungslos, strukturiert und stressfrei. Genau so, wie man es sich wünscht.",
      time: 1706544000,
      relative_time_description: "vor 4 Monaten",
    },
    {
      author_name: "Erhard Furtmayr",
      rating: 5,
      text: "Als Partner schätzen wir die Zusammenarbeit mit Uenal Immobilien sehr. Wir können uns bei allen Fragen rund um Immobilien stets auf die Expertise des Teams verlassen. Unsere Gäste sind bei ihnen in besten Händen, weshalb wir Uenal Immobilien uneingeschränkt empfehlen.",
      time: 1705334400,
      relative_time_description: "vor 4 Monaten",
    },
    {
      author_name: "Anja Ulrich",
      rating: 5,
      text: "Herr Ünal hat sich wirklich Zeit genommen und alles klar erklärt. Keine Eile, kein Druck, einfach saubere Arbeit. Man merkt, dass er seinen Job ernst nimmt und Erfahrung hat.",
      time: 1704124800,
      relative_time_description: "vor 5 Monaten",
    },
    {
      author_name: "Özkan Ugurpala",
      rating: 5,
      text: `Das Team von Ünal Immobilien ist ein vertrauenswürdiges Unternehmen, das Wert auf Transparenz, Fachkompetenz und Kundenservice legt.
Sie erhalten von Anfang an kompetente Beratung und Unterstützung.
Alle Ihre Fragen werden nach bestem Wissen und Gewissen beantwortet.
Eine echte Bereicherung für die Region.
Dieses Unternehmen verdient definitiv mehr als 5 Sterne.
Weiter so! Ihr seid die Besten!`,
      time: 1702915200,
      relative_time_description: "vor 5 Monaten",
    },
    {
      author_name: "Steffen Jagdmann",
      rating: 5,
      text: `Seit zwei Jahren ist UENAL Immobilien ein überaus kompetenter Partner an unserer Seite. Zuverlässigkeit und Professionalität sind in jedem Gespräch spürbar. Man fühlt sich bestens betreut und setzt alles daran, die Kundenzufriedenheit zu gewährleisten!
Verdiente 5 von 5 Sternen!`,
      time: 1701705600,
      relative_time_description: "vor 6 Monaten",
    },
  ]);

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    // Initialize carousel layout with optimized reflow handling
    const updateCarouselLayout = () => {
      // Batch DOM reads to prevent forced reflows
      requestAnimationFrame(() => {
        const width = window.innerWidth;

        if (width < 768) {
          setSlidesToShow(1);
          setShowArrows(false);
        } else if (width < 1280) {
          setSlidesToShow(2);
          setShowArrows(true);
        } else {
          setSlidesToShow(3);
          setShowArrows(true);
        }
      });
    };

    // Call once on mount
    updateCarouselLayout();

    // Use ResizeObserver for better performance
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateCarouselLayout, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Uncomment this to fetch real reviews from Google Places API
  /*
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        // Only log errors in development environment
        if (process.env.NODE_ENV === 'development') {
          console.error("Error fetching Google reviews:", error);
        }
      }
    };

    fetchGoogleReviews();
  }, []);
  */

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    adaptiveHeight: false,
    variableWidth: false,
    centerMode: false,
    arrows: showArrows,
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("de-DE", { year: "numeric", month: "long" });
  };

  return (
    <div className="google-reviews-carousel">
      {/* Google Reviews Header */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
        <div className="w-5 h-5 sm:w-6 sm:h-6">
          <GoogleLogo />
        </div>
        <div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-xl sm:text-2xl font-bold text-black">
              5.0
            </span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FBBC04] text-[#FBBC04]"
                />
              ))}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            Basierend auf <span className="font-semibold">94 Bewertungen</span>
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel-container px-2 sm:px-6 lg:px-10">
        <Slider key={`reviews-${slidesToShow}`} {...settings}>
          {reviews.map((review, idx) => (
            <div key={idx} className="px-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-6 h-full hover:shadow-xl hover:border-[#B8A67D] transition-all duration-300"
              >
                {/* Review Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B8A67D]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#B8A67D] font-bold text-sm sm:text-lg">
                        {review.author_name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-black text-sm sm:text-base truncate">
                        {review.author_name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {review.relative_time_description}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                    <GoogleLogo />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-2 sm:mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FBBC04] text-[#FBBC04]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm line-clamp-4">
                  {review.text}
                </p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Google Link */}
      <div className="text-center mt-6 sm:mt-8">
        <a
          href="https://www.google.com/maps/search/Uenal+Immobilien+GmbH"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 sm:gap-2 text-[#B8A67D] hover:text-[#a89870] font-semibold transition-colors text-sm sm:text-base"
        >
          <span>Alle Bewertungen auf Google ansehen</span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </div>

      <style>{`
        .google-reviews-carousel .slick-dots {
           bottom: -35px;
        }
        
        .google-reviews-carousel .slick-dots li button:before {
          font-size: 10px;
          color: #B8A67D;
          opacity: 0.3;
        }
        
        .google-reviews-carousel .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #B8A67D;
        }

        .google-reviews-carousel .slick-prev,
        .google-reviews-carousel .slick-next {
          width: 44px;
          height: 44px;
          min-width: 44px;
          min-height: 44px;
          z-index: 20;
          border-radius: 9999px;
        }

        .google-reviews-carousel .slick-prev {
          left: -30px;
        }

        .google-reviews-carousel .slick-next {
          right: -30px;
        }

        .google-reviews-carousel .slick-prev:before,
        .google-reviews-carousel .slick-next:before {
          font-size: 28px;
          color: #B8A67D;
          opacity: 0.9;
        }

        .google-reviews-carousel .slick-prev:hover:before,
        .google-reviews-carousel .slick-next:hover:before {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .google-reviews-carousel .slick-prev {
            left: 0;
          }
          .google-reviews-carousel .slick-next {
            right: 0;
          }
        }

        @media (max-width: 640px) {
          .google-reviews-carousel .slick-prev,
          .google-reviews-carousel .slick-next {
            display: none !important;
          }
           .google-reviews-carousel .slick-dots {
             bottom: -30px;
           }
           .google-reviews-carousel .slick-dots li button:before {
             font-size: 8px;
           }
        }

         @media (max-width: 480px) {
           .google-reviews-carousel .slick-dots {
             bottom: -25px;
           }
           .google-reviews-carousel .slick-dots li button:before {
             font-size: 7px;
             padding: 0 3px;
           }
         }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
