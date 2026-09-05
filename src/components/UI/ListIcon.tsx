export default function ListIcon({
  className = "w-3.5 h-4 text-black",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0`}
    >
      <path
        d="M7.87301 0.761963V6.98419H13.2063L6.09523 16.762V10.5397H0.761902L7.87301 0.761963Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.52381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
