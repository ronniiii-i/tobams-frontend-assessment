export default function Hero() {
  return (
    <section className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/images/hero-img.jpg')] bg-cover bg-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] w-full flex items-center justify-center">
      <div className="flex items-center justify-center text-center flex-col text-white gap-3 p-4 sm:p-6 md:p-8 sm:max-w-xl md:max-w-3xl lg:max-w-6xl">
        
        <div className="bg-[#FFFFFF1A] py-[10px] px-8 sm:py-[11px] sm:px-10 lg:py-3 lg:px-12 text-xs md:text-sm rounded-[100px] font-nunito-sans font-semibold tracking-wide">
          WHAT WE DO
        </div>
        <h1 className="font-nunito font-bold text-[20px] sm:text-[32px] md:text-[42px] lg:text-[56px] leading-tight">
          Training and Development
        </h1>

        <p className="text-sm md:text-base lg:text-lg font-semibold font-nunito-sans max-w-xl md:max-w-2xl lg:max-w-none">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        <button className="bg-purple py-[11.5px] px-[22px] sm:px-5 sm:py-3 lg:px-6 lg:py-3 font-nunito-sans text-sm md:text-base lg:text-lg mt-4 sm:mt-6 lg:mt-8 rounded-sm hover:opacity-90 transition-opacity">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}