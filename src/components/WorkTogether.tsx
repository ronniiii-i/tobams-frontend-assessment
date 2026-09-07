export default function WorkTogether() {
  return (
    <section className="bg-footer-background border-b border-footer-border text-white py-10 w-full">
      <div className="max-w-9/10 xl:max-w-4/5 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
        {/* Left Column: Heading & Subtitle */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <p className="text-sm md:text-base lg:text-lg font-normal">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold leading-tight tracking-wide">
            Let&apos;s work together to create a difference
          </h2>
        </div>

        <button className="bg-purple px-6 py-3 font-nunito-sans text-sm sm:text-base md:text-lg rounded-sm hover:opacity-90 transition-opacity text-white shrink-0">
          Get In Touch
        </button>
      </div>
    </section>
  );
}
