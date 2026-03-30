import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";

const ContactPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-5  ">
      <div className="grid grid-cols-1 md:grid-cols-12 border rounded-lg">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white rounded-lg">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </p>

          <div className="flex items-center gap-2 mt-5">
            <HiOutlineBuildingOffice size={40} className="text-[#4F46E5]" />
            <span className="text-sm">
              House #14, Street #12, Boring Road, Patna, Bihar.
            </span>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <MdOutlineAttachEmail size={28} className="text-[#4F46E5]" />
            <span className="text-sm">admin@Pragatis.site</span>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <Ri24HoursFill size={28} className="text-[#4F46E5]" />

            <span className="text-sm">+91 6205526522</span>
          </div>
        </div>
        <form
          action="https://fabform.io/f/{form-id}"
          method="post"
          className="md:col-span-8 p-10"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block text-gray-500 font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <button
                className="shadow bg-primaryLight hover:bg-primaryDark focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
