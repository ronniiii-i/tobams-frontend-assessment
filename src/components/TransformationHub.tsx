import Image from "next/image";
import ArrowUpIcon from "./UI/ArrowUpIcon";

export default function TransformationHub() {
  const topics = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="py-12">
      <div className="bg-pink-200 rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-9/10 xl:max-w-4/5 mx-auto flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-blue italic font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Learning With Our CEO:
          </span>
          <h2 className="text-purple italic font-bold text-xl sm:text-2xl md:text-[28px] lg:text-[32px] leading-[130%]">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed mt-2">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your
            career or enhance your leadership skills, the Transformation Hub
            provides a transformative learning experience to unlock your full
            potential and drive success in your endeavours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch justify-between">
          <div className="relative w-full lg:w-1/2 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto min-h-[250px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[350px] rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/images/lwoc.jpg"
              alt="Transformation Hub With Jite Newton"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="bg-white/30 rounded-2xl p-4 sm:p-6 lg:p-8 w-full lg:w-1/2 flex flex-col gap-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="bg-white rounded-xl px-4 py-3.5 flex items-center gap-3 shadow-xs"
                >
                  <svg
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-5 shrink-0`}
                  >
                    <path
                      d="M7.87301 0.761963V6.98419H13.2063L6.09523 16.762V10.5397H0.761902L7.87301 0.761963Z"
                      fill="#DDD0DA"
                      stroke="#571244"
                      strokeWidth="1.52381"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-black font-semibold text-xs sm:text-sm md:text-base leading-snug">
                    {topic}
                  </span>
                </li>
              ))}
            </ul>

            <button className="bg-purple px-6 py-3 font-nunito-sans text-base sm:text-lg rounded-sm hover:opacity-90 transition-opacity text-white flex items-center justify-center gap-3 w-fit">
              Learn More <ArrowUpIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
