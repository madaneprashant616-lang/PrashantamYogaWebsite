import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudioShowcase = () => {
    // Placeholder images - REPLACE with Cloudinary links when provided
    const showcaseImages = [
        {
            id: 1,
            src: 'https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1200/v1768030292/WhatsApp_Image_2026-01-10_at_12.40.37_olf98e.jpg',
            alt: 'Group yoga session at Prashantam Yoga studio'
        },
        {
            id: 2,
            src: 'https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1200/v1768030291/WhatsApp_Image_2026-01-10_at_12.40.37_1_zqe3uo.jpg',
            alt: 'Therapeutic yoga practice session'
        },
        {
            id: 3,
            src: 'https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1200/v1768030290/WhatsApp_Image_2026-01-10_at_12.38.14_bwi4af.jpg',
            alt: 'Yoga asana practice in class'
        },
        {
            id: 4,
            src: 'https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1200/v1768030289/WhatsApp_Image_2026-01-10_at_12.38.15_aoien9.jpg',
            alt: 'Indoor yoga class environment'
        },
        {
            id: 5,
            src: 'https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1200/v1768030288/WhatsApp_Image_2026-01-10_at_12.38.17_qdyyav.jpg',
            alt: 'Focused yoga posture practice'
        },
        {
            id: 6,
            src: 'https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1200/v1768030287/WhatsApp_Image_2026-01-10_at_12.38.19_pkzjdf.jpg',
            alt: 'Instructor guided yoga session'
        },
        {
            id: 7,
            src: 'https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1200/v1768030270/WhatsApp_Image_2026-01-08_at_16.11.00_1_xkqa9w.jpg',
            alt: 'Evening yoga session for relaxation'
        },
        {
            id: 8,
            src: 'https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1200/v1768030269/WhatsApp_Image_2026-01-08_at_16.11.00_2_yy4zpf.jpg',
            alt: 'Posture correction yoga class'
        },
        {
            id: 9,
            src: 'https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1200/v1768030268/WhatsApp_Image_2026-01-08_at_16.11.01_ra37bb.jpg',
            alt: 'Group yoga practice with discipline'
        },
        {
            id: 10,
            src: 'https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1200/v1768030270/WhatsApp_Image_2026-01-08_at_16.11.00_vsieox.jpg',
            alt: 'Holistic yoga session at Prashantam Yoga'
        }

    ];

    // Duplicate the array to create an infinite loop effect
    const carouselImages = [...showcaseImages, ...showcaseImages];

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container-custom mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center space-x-2 text-blue-600 font-semibold mb-4">
                        <Camera className="w-5 h-5" />
                        <span className="uppercase tracking-wider text-sm">Our Space</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Explore Our <span className="gradient-text">Sanctuary</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A peaceful environment designed for your healing and growth.
                        Experience the tranquility of Prashantam Yoga.
                    </p>
                </motion.div>
            </div>

            {/* Infinite Horizontal Scroll */}
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex space-x-6 w-max px-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {carouselImages.map((image, index) => (
                        <div
                            key={`${image.id}-${index}`}
                            className="relative w-[300px] h-[200px] md:w-[400px] md:h-[300px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient Overlay - Always visible */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 flex items-end p-6">
                                <p className="text-white font-bold text-lg drop-shadow-md">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex justify-center mt-12">
                <Link
                    to="/gallery"
                    className="btn-outline group flex items-center space-x-2"
                >
                    <span>View All Photos</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
};

export default StudioShowcase;
