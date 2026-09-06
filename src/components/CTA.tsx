function CTA() {
  return (
    <section>
      <div className="bg-purple w-9/10 xl:w-4/5 my-2 sm:my-3 lg:my-4 mx-auto rounded-lg py-8 px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center text-white gap-6 sm:gap-7 lg:gap-8 font-semibold">
        <h4 className="text-center hidden lg:text-xl lg:block tracking-[3%] leading-[150%]">
          Want to accelerate professional growth and development at your
          organisation?
          <br />
          See how we can help.
        </h4>
        <h4 className="text-center lg:hidden text-base sm:text-lg tracking-[3%] leading-[150%] max-w-xl">
          Don&apos;t just dream it—let&apos;s build it! Click now and start your
          project with Tobams Group. Your journey to digital excellence begins
          here.
        </h4>
        <button className="bg-white text-purple py-3 px-6 text-sm sm:text-base lg:text-lg rounded-sm hover:opacity-90 transition-opacity">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}

export default CTA;
