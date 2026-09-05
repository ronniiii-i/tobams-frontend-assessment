import Image from "next/image";
import ArrowUpIcon from "./UI/ArrowUpIcon";

export default function LMS() {
  return (
    <section className="bg-purple-100 my-12">
      <div className="flex items-center justify-center flex-col lg:flex-row p-6 sm:p-10 md:p-12 lg:px-16 lg:py-16 gap-8 md:gap-12 lg:gap-12 xl:gap-20 m-auto">
        <h2 className="text-purple font-semibold text-xl sm:text-2xl md:text-3xl lg:hidden w-full text-center sm:text-left">
          Learning Management System
        </h2>

        <div className="relative w-full lg:w-1/2 max-w-[350px] sm:max-w-[450px] md:max-w-[520px] lg:max-w-[600px] aspect-[556.88/568] rounded-full overflow-hidden">
          <Image
            src="/images/lms.jpg"
            alt="Learning Management System"
            fill
            priority
            sizes="(max-width: 640px) 350px, (max-width: 768px) 450px, (max-width: 1024px) 520px, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
          <h2 className="text-purple font-semibold lg:text-[36px] xl:text-[40px] hidden lg:block">
            Learning Management System
          </h2>

          <div className="bg-purple-100 p-6 rounded-lg text-black">
            <p className="text-sm sm:text-base lg:text-base xl:text-lg">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today&apos;s competitive
              tech landscape.
            </p>

            <div className="py-3">
              <p className="font-bold text-purple text-base md:text-lg">
                Some of our courses include:
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 p-2 text-sm sm:text-base lg:text-base xl:text-lg">
                <li className="list-disc list-inside">Business Analysis</li>
                <li className="list-disc list-inside">Design Thinking</li>
                <li className="list-disc list-inside">
                  Effective Communication
                </li>
                <li className="list-disc list-inside">Entrepreneurship</li>
                <li className="list-disc list-inside">Career Development</li>
                <li className="list-disc list-inside">Business Model</li>
              </ul>
            </div>

            <button className="bg-purple px-6 py-3 font-nunito-sans text-base sm:text-lg mt-3 rounded-sm hover:opacity-90 transition-opacity text-white flex items-center justify-center gap-3 max-w-50 lg:hidden">
              Learn More <ArrowUpIcon />
            </button>
          </div>

          <button className="bg-purple px-6 py-3 font-nunito-sans text-lg mt-2 rounded-sm hover:opacity-90 transition-opacity text-white lg:flex items-center justify-center gap-3 max-w-50 hidden">
            Learn More <ArrowUpIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
