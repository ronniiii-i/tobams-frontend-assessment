"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Yusuf",
    role: "Founder",
    company: "CraftHub NG",
    avatar: "/images/aisha.png",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    id: 2,
    name: "John Davies",
    role: "Marketing Manager",
    company: "E-Commerce Emporium",
    avatar: "/images/john.png",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    id: 3,
    name: "Chinonso Nwankwo",
    role: "HR Director",
    company: "FutureTech Solutions",
    avatar: "/images/chinonso.png",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    id: 4,
    name: "Rita Ahmed",
    role: "Creative Director",
    company: "ArtInnovate Studios",
    avatar: "/images/rita.jpg",
    text: "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
  },
  {
    id: 5,
    name: "David Johnson",
    role: "Small Business Owner",
    company: "",
    avatar: "/images/david.png",
    text: "Tobams Group's Digital Marketing tips transformed my small business. Their guidance is simple, effective, and perfect for anyone looking to grow online.",
  },
  {
    id: 6,
    name: "Femi Adekunle",
    role: "IT Professional",
    company: "",
    avatar: "/images/femi.png",
    text: "As an IT professional, Tobams Group's Tech Talent Development program sharpened my skills. The hands-on approach and mentorship are invaluable",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  // Dynamically calculate visible cards for accurate bounds
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(3.2); // ~3 cards
      } else if (window.innerWidth >= 640) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, Math.ceil(testimonials.length - cardsPerPage));

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-[40px] font-bold text-black mb-8 sm:mb-12 tracking-tight">
          Testimonials
        </h2>
      </div>

      <div className="w-full pl-4 sm:pl-6 xl:pl-[calc((80vw-80rem)/2+2rem)] pr-0">
        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / Math.floor(cardsPerPage))}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-96/100 sm:w-[calc(49%-12px)] lg:w-[30%] shrink-0 bg-white rounded-2xl p-6 shadow-sm border-l-4 border-pink flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-sm sm:text-base leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-grey leading-tight">
                        {item.role}
                        {item.company ? `, ${item.company}` : ""}
                      </p>
                    </div>
                  </div>

                  <p className="text-grey text-xs sm:text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-2 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-pink-background text-pink flex items-center justify-center hover:opacity-80 transition-opacity active:scale-95"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-pink-background text-pink flex items-center justify-center hover:opacity-80 transition-opacity active:scale-95"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
