import ArrowUpIcon from "./UI/ArrowUpIcon";

export default function TrainingConsultant() {
  const features = [
    {
      title: "Expert-Led Learning",
      description:
        "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Interactive Workshops",
      description:
        "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Global Recognition",
      description:
        "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];

  return (
    <section className="bg-purple-100 px-4 sm:px-8 md:px-10 py-8 sm:py-12">
      <div className="w-full max-w-9/10 xl:max-w-4/5 mx-auto flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-purple font-bold text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] leading-tight">
            Training The Consultant
          </h2>
          <p className="text-purple font-semibold text-sm sm:text-base md:text-lg">
            Maximize Your Potential as a Certified Trainer:
          </p>
          <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed mt-2">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>
        </div>

        <div className="bg-purple text-white rounded-lg p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-2">
                <h3 className="font-bold font-nunito-sans text-base sm:text-lg md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button className="bg-purple px-6 py-3 font-nunito-sans text-base sm:text-lg rounded-sm hover:opacity-90 transition-opacity text-white flex items-center justify-center gap-3">
            Learn More <ArrowUpIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
