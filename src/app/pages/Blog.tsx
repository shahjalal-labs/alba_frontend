"use client";

import { CONTACT_INFO } from "@/constants/contact";

import { ArrowRight, Calendar, Clock, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import WhatsAppButton from "../components/WhatsAppButton";
import { blogPostsData } from "./BlogPost";

const motion = {
  div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  article: ({ children, ...props }: any) => <article {...props}>{children}</article>,
  span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
} as const;

export default function Blog() {
  // Shared child reveal used with parent stagger containers.
  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const blogPosts = blogPostsData;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B8A67D] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              className="inline-block mb-6 px-4 py-1 bg-[#B8A67D]/20 rounded-full"
              variants={fadeInUp}
            >
              <span className="text-[#B8A67D] text-sm font-semibold">BLOG</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Immobilienwissen & Marktanalysen
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Aktuelle Einblicke, Strategien und Ratgeber rund um Immobilien im
              Nordwesten
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, idx) => (
              <Link key={idx} href={`/blog/${post.slug}`}>
                <motion.article
                  variants={fadeInUp}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#B8A67D] text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-[#B8A67D] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-[#B8A67D] hover:text-[#A39670] p-0"
                      >
                        Lesen
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Haben Sie Fragen?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-12"
              variants={fadeInUp}
            >
              Lassen Sie uns sprechen – persönlich, direkt, ehrlich.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <a href={CONTACT_INFO.phone.telHref} className="w-full sm:w-[420px]">
                <Button
                  size="lg"
                  className="w-full h-14 inline-flex items-center justify-center gap-3 bg-[#B8A67D] hover:bg-[#a89870] text-white font-semibold px-8 py-0 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Jetzt anrufen
                </Button>
              </a>
              <div className="w-full sm:w-[420px]">
                <WhatsAppButton
                  variant="large"
                  text="Direkt per WhatsApp schreiben"
                  className="w-full h-14 rounded-xl px-8 py-0"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
