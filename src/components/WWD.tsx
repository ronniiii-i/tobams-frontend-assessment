// import Image from "next/image";
// import ListIcon from "./UI/ListIcon";

// export default function WWD() {
//   return (
//     <section className="px-8 py-4 lg:p-16">
//       <div className="flex flex-col-reverse lg:flex-row lg:pb-10 items-center justify-center lg:gap-20 gap-6 mb-4 lg:mb-0">
//         <div className="w-full lg:w-2/5 leading-[150%]">
//           <h2 className="text-black font-semibold mb-1 lg:text-[40px] tracking-[3%] hidden lg:block">
//             Corporate Trainings
//           </h2>
//           <div className="text-grey text-sm lg:text-lg">
//             <p className="">
//               Empower your team with our customised Corporate Training programs
//               designed to address the unique needs and objectives of your
//               organisation. Our expert facilitators work closely with your team
//               to deliver tailored learning experiences that align with your
//               company&apos;s goals and values.
//             </p>
//             <ul className="grid grid-cols-1 gap-x-6 gap-y-1 py-6 lg:px-6">
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Leadership Training</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Strategic Planning and Implementation</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Project Management</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Sustainability Training</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Customised Training</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="relative w-full lg:w-2/5 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto min-h-[250px] sm:min-h-[350px] rounded-tl-[30px] rounded-tr-3xl rounded-br-[23px] rounded-bl-[40px] lg:rounded-tl-[56px] lg:rounded-tr-3xl lg:rounded-bl-xl lg:rounded-br-[23px] overflow-hidden lg:mb-0 max-w-[500px] lg:max-w-none">
//           <Image
//             alt=""
//             src="/images/ct.jpg"
//             priority
//             fill
//             sizes="(max-width: 1024px) 100vw, 50vw"
//             className="object-cover object-cover"
//           />
//         </div>
//         <h2 className="text-black font-semibold text-xl mb-1 tracking-[3%] block lg:hidden w-full">
//           Corporate Trainings
//         </h2>
//       </div>
//       <div className="flex flex-col lg:flex-row lg:py-10 items-center justify-center lg:gap-20 gap-6 mb-4 lg:mb-0">
//         <h2 className="text-black font-semibold text-xl mb-1 lg:text-[40px] tracking-[3%] block lg:hidden w-full">
//           Personalised Individual Training
//         </h2>
//         <div className="relative w-full lg:w-2/5 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto min-h-[250px] sm:min-h-[350px] rounded-tl-[33px] rounded-tr-lg rounded-br-lg rounded-bl-lg overflow-hidden lg:mb-0 max-w-[500px] lg:max-w-none">
//           <Image
//             alt=""
//             src="/images/pit.png"
//             priority
//             fill
//             sizes="(max-width: 1024px) 100vw, 50vw"
//             className="object-cover object-center"
//           />
//         </div>
//         <div className="w-full lg:w-2/5 leading-[150%]">
//           <h2 className="text-black font-semibold text-xl mb-1 lg:text-[40px] tracking-[3%] hidden lg:block">
//             Personalised Individual Training
//           </h2>
//           <div className="text-grey text-sm lg:text-lg">
//             <p className="">
//               Begin a journey of lifelong learning and professional development
//               with Tobams Group&apos;s diverse range of training programs for
//               individuals. From technical skills mastery to soft skills
//               enhancement, our courses cover a wide spectrum of topics to meet
//               the evolving needs of today&apos;s professionals.
//             </p>
//             <ul className="grid grid-cols-1 gap-x-6 gap-y-1 py-6 lg:px-6">
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Leadership Development</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Soft Skills Development</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Industry Specific Knowledge</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Technical Skills Enhancement</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Time Management and Productivity</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Career Development</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col-reverse lg:flex-row lg:pt-10 items-center justify-center lg:gap-20 gap-6 mb-4 lg:mb-0">
//         <div className="w-full lg:w-2/5 leading-[150%]">
//           <h2 className="text-black font-semibold text-xl mb-1 lg:text-[40px] tracking-[3%] hidden lg:block">
//             Capacity Development
//           </h2>
//           <div className="text-grey text-sm lg:text-lg">
//             <p className="">
//               At Tobams Group, we empower individuals and organizations through
//               tailored training programs, expert-led workshops, and personalized
//               mentorship. We are committed to your success and growth. We are
//               dedicated to providing a comprehensive suite of benefits designed
//               to foster your development and success:
//             </p>
//             <ul className="grid grid-cols-1 gap-x-6 gap-y-1 py-6 lg:px-6">
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Tailored Training Programs</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Expert-Led Workshops</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Personalized Mentorship</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Technical Skills Enhancement</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Collaborative Learning Environment</span>
//               </li>
//               <li className="grid grid-cols-[auto_1fr] items-center gap-2">
//                 <ListIcon />
//                 <span>Ongoing Support and Resources</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="relative w-full lg:w-2/5 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto min-h-[250px] sm:min-h-[350px] rounded-tl-[33px] lg:rounded-tl-[40px] rounded-tr-lg rounded-br-lg rounded-bl-lg overflow-hidden lg:mb-0 max-w-[500px] lg:max-w-none">
//           <Image
//             alt=""
//             src="/images/cd.png"
//             priority
//             fill
//             sizes="(max-width: 1024px) 100vw, 50vw"
//             className="object-cover object-center"
//           />
//         </div>
//         <h2 className="text-black font-semibold text-xl mb-1 tracking-[3%] block lg:hidden w-full">
//           Capacity Development
//         </h2>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import ListIcon from "./UI/ListIcon";

export default function WWD() {
  return (
    <section className="px-8 sm:px-12 md:px-16 py-4 sm:py-8 lg:p-16">
      <div className="flex flex-col-reverse lg:flex-row lg:pb-10 items-center justify-center lg:gap-12 xl:gap-20 gap-6 mb-8 sm:mb-12 lg:mb-0">
        <div className="w-full lg:w-1/2 xl:w-2/5 leading-[150%]">
          <h2 className="text-black font-semibold mb-1 lg:text-[32px] xl:text-[40px] tracking-[3%] hidden lg:block mb-4">
            Corporate Trainings
          </h2>
          <div className="text-grey text-sm md:text-base lg:text-lg">
            <p className="">
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company&apos;s goals and values.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-1 py-4 sm:py-6 lg:px-6">
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Leadership Training</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Strategic Planning and Implementation</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Project Management</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Sustainability Training</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Customised Training</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 xl:w-2/5 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[420px] xl:min-h-none rounded-tl-[30px] rounded-tr-3xl rounded-br-[23px] rounded-bl-[40px] lg:rounded-tl-[56px] lg:rounded-tr-3xl lg:rounded-bl-xl lg:rounded-br-[23px] overflow-hidden lg:mb-0 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-none">
          <Image
            alt="Corporate Trainings"
            src="/images/ct.jpg"
            priority
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <h2 className="text-black font-semibold text-xl sm:text-2xl md:text-3xl mb-1 tracking-[3%] block lg:hidden w-full">
          Corporate Trainings
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:py-10 items-center justify-center lg:gap-12 xl:gap-20 gap-6 mb-8 sm:mb-12 lg:mb-0">
        <h2 className="text-black font-semibold text-xl sm:text-2xl md:text-3xl mb-1 lg:text-[40px] tracking-[3%] block lg:hidden w-full">
          Personalised Individual Training
        </h2>

        <div className="relative w-full lg:w-1/2 xl:w-2/5 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[420px] xl:min-h-none rounded-tl-[33px] rounded-tr-lg rounded-br-lg rounded-bl-lg overflow-hidden lg:mb-0 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-none">
          <Image
            alt="Personalised Individual Training"
            src="/images/pit.png"
            priority
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="w-full lg:w-1/2 xl:w-2/5 leading-[150%]">
          <h2 className="text-black font-semibold mb-1 lg:text-[32px] xl:text-[40px] tracking-[3%] hidden lg:block mb-4">
            Personalised Individual Training
          </h2>
          <div className="text-grey text-sm md:text-base lg:text-lg">
            <p className="">
              Begin a journey of lifelong learning and professional development
              with Tobams Group&apos;s diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today&apos;s professionals.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-1 py-4 sm:py-6 lg:px-6">
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Leadership Development</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Soft Skills Development</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Industry Specific Knowledge</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Technical Skills Enhancement</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Time Management and Productivity</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Career Development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:pt-10 items-center justify-center lg:gap-12 xl:gap-20 gap-6 mb-4 lg:mb-0">
        <div className="w-full lg:w-1/2 xl:w-2/5 leading-[150%]">
          <h2 className="text-black font-semibold mb-1 lg:text-[32px] xl:text-[40px] tracking-[3%] hidden lg:block mb-4">
            Capacity Development
          </h2>
          <div className="text-grey text-sm md:text-base lg:text-lg">
            <p className="">
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-1 py-4 sm:py-6 lg:px-6">
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Tailored Training Programs</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Expert-Led Workshops</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Personalized Mentorship</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Technical Skills Enhancement</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Collaborative Learning Environment</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-2">
                <ListIcon />
                <span>Ongoing Support and Resources</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 xl:w-2/5 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[420px] xl:min-h-none rounded-tl-[33px] lg:rounded-tl-[40px] rounded-tr-lg rounded-br-lg rounded-bl-lg overflow-hidden lg:mb-0 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-none">
          <Image
            alt="Capacity Development"
            src="/images/cd.png"
            priority
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <h2 className="text-black font-semibold text-xl sm:text-2xl md:text-3xl mb-1 tracking-[3%] block lg:hidden w-full">
          Capacity Development
        </h2>
      </div>
    </section>
  );
}
