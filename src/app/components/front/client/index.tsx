import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ClientSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // Sample client logos - replace with actual school logos
  const clientLogos = [
    {
      id: 1,
      name: "SD Mutiara Hati",
      logo: "/sd-mutiara-hati.png",
    },
    // {
    //   id: 2,
    //   name: "SMP Harapan Bangsa",
    //   logo: "/smp-harapan-bangsa.png",
    // },
    // {
    //   id: 3,
    //   name: "SMA Prestasi",
    //   logo: "/sma-prestasi.png",
    // },
    // {
    //   id: 4,
    //   name: "SD Cerdas Mandiri",
    //   logo: "/sd-cerdas-mandiri.png",
    // },
    // {
    //   id: 5,
    //   name: "SMP Bina Karya",
    //   logo: "/smp-bina-karya.png",
    // },
  ];

  // Auto-scroll carousel - disabled for single client
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === clientLogos.length - 4 ? 0 : prevIndex + 1
  //     );
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [clientLogos.length]);

  // Get visible logos (show only 1 when there's only 1 client)
  const getVisibleLogos = () => {
    if (clientLogos.length === 1) {
      return clientLogos;
    }

    const visible = [];
    for (let i = 0; i < Math.min(4, clientLogos.length); i++) {
      const index = (currentIndex + i) % clientLogos.length;
      visible.push(clientLogos[index]);
    }
    return visible;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clientLogos.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientLogos.length - 4 : prevIndex - 1
    );
  };

  return (
    <motion.section
      id="client-kami"
      className="p-10 sm:p-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header Section */}
      <motion.div className="text-center mb-16" variants={fadeUp}>
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Klien <span className="text-[#00B5AD]">Terpercaya</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Bergabunglah dengan sekolah yang telah mempercayai program kami
        </p>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="relative overflow-hidden">
          {/* Carousel Container */}
          <div className="flex items-center justify-center">
            {/* Previous Button - Hidden when only 1 client */}
            {clientLogos.length > 1 && (
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Logos Grid - Centered for single client */}
            <div
              className={`grid gap-6 ${
                clientLogos.length === 1
                  ? "grid-cols-1 justify-items-center"
                  : "grid-cols-2 lg:grid-cols-4 px-16"
              }`}
            >
              {getVisibleLogos().map((client, index) => (
                <motion.div
                  key={`${client.id}-${currentIndex}`}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center h-24 mb-4">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-center text-gray-800 dark:text-white">
                    {client.name}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Next Button - Hidden when only 1 client */}
            {clientLogos.length > 1 && (
              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Carousel Indicators - Hidden when only 1 client */}
          {clientLogos.length > 4 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: clientLogos.length - 3 }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[#00B5AD] scale-125"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                )
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Bottom Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-[#00B5AD] mb-2">1</div>
          <div className="text-gray-600 dark:text-gray-300">Sekolah Mitra</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[#00B5AD] mb-2">10</div>
          <div className="text-gray-600 dark:text-gray-300">
            Siswa Terdaftar
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[#00B5AD] mb-2">95%</div>
          <div className="text-gray-600 dark:text-gray-300">
            Tingkat Kepuasan
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ClientSection;
