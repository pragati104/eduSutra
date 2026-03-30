import Link from "next/link";

const LatestNewsCard = ({ data }) => {
  const { title, image, timing, article } = data;
  return (
    <div class="relative flex md:w-80 w-[90%] mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-6">
      <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <div class="p-6">
        <h5 class="mb-2 block font-sans h-20 text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased overflow-hidden">
          {title}{" "}
        </h5>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased h-20  overflow-hidden">
          {article}
        </p>
      </div>
      <div class="p-6 pt-0">
        <Link
          href={`/latest-news/${title}`}
          data-ripple-light="true"
          type="button"
          class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default LatestNewsCard;
