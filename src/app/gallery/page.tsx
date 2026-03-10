"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const moreImages = [
  "/images/gallery/img-gallery-7.png",
  "/images/gallery/img-gallery-6.png",
  "/images/gallery/img-gallery-5.png",
];

export default function MoreGalleryPage() {
  return (
    <section className="from-white pb-[100px] container-fluid to-gray-50 dark:from-gray-950 dark:to-gray-900 pt-10 px-6 md:px-12">
      <div className="container">
        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
          <h2>Creative Designs</h2>
          <p className="text-xl text-orange-500">( 05 )</p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl m-auto"
          style={{ gap: "24px" }}
        >
          {moreImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer bg-gray-100 dark:bg-gray-800"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={600}
                height={400}
                className="object-contain w-full h-80 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-medium tracking-wide">
                  {/* Project {index + 7} */}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <section id="gallery">
          <div className="text-center mt-16 ">
            <Link href="/gallery/more">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // className="px-8 py-3 rounded-full border border-black/20 dark:border-white/20 text-gray-900 dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                className="btn-primary relative overflow-hidden cursor-pointer w-50 py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
              >
                <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                  Open Gallery
                </span>
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
