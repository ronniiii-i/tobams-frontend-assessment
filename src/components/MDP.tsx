import Image from "next/image";
import ListIcon from "./UI/ListIcon";

export default function MDP() {
  return (
    <section className="my-3 sm:my-6 md:my-10">
      <div className="xl:max-w-4/5 max-w-9/10 bg-dark-purple text-white flex flex-col lg:flex-row items-center justify-center lg:gap-8 xl:gap-10 m-auto p-5 sm:p-8 lg:p-10 gap-4 sm:gap-6 rounded-[20px]">
        <h2 className="text-base sm:text-xl md:text-2xl tracking-[3%] font-semibold block w-full lg:hidden">
          Management Development Program
        </h2>
        <div className="relative rounded-lg rounded-br-none overflow-hidden w-full lg:w-1/2 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[440px] xl:min-h-[580px] max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-none">
          <Image
            alt="Management Development Program"
            src="/images/mdp.jpg"
            priority
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="font-semibold tracking-[3%] lg:text-[28px] xl:text-[40px] hidden lg:block mb-3 xl:mb-4 leading-tight">
            Management Development Program
          </h2>
          <div className="text-sm md:text-base lg:text-base xl:text-lg">
            <p className="leading-relaxed">
              Tobams Group offers a comprehensive Management Development Program
              designed to equip corporate organisations with the high-performing
              leaders they need to thrive.
              <br />
              <br />
              Our program includes workshops, seminars, coaching sessions,
              online courses, and experiential learning opportunities designed
              to improve leadership, strategic thinking, communication, and
              other essential managerial competencies for corporate
              organisations.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-y-3 sm:gap-y-4 gap-x-4 pt-4 sm:py-6">
              <li className="bg-purple-background grid grid-cols-[auto_1fr] items-center gap-2 py-1.5 px-3 rounded-lg">
                <ListIcon className="text-white w-3.5 h-4 shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base">
                  Enhanced Leadership Skills
                </span>
              </li>
              <li className="bg-purple-background grid grid-cols-[auto_1fr] items-center gap-2 py-1.5 px-3 rounded-lg">
                <ListIcon className="text-white w-3.5 h-4 shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base">
                  Improved Employee Engagement
                </span>
              </li>
              <li className="bg-purple-background grid grid-cols-[auto_1fr] items-center gap-2 py-1.5 px-3 rounded-lg">
                <ListIcon className="text-white w-3.5 h-4 shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base">
                  Stronger Organisational Culture
                </span>
              </li>
              <li className="bg-purple-background grid grid-cols-[auto_1fr] items-center gap-2 py-1.5 px-3 rounded-lg">
                <ListIcon className="text-white w-3.5 h-4 shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base">
                  Sustainable Growth
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
