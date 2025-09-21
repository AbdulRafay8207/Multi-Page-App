import {Footer} from "./Footer"
import FooterCard from "./FooterCard"
import {
  Facebook,
  // Discord,
  Twitter,
  Github,
  Dribbble
} from "lucide-react";

const FooterSection = ()=>{
    return(
        <footer className="bg-white dark:bg-gray-900">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="me-3 h-8"
            alt="FlowBite Logo"
          />
          <span
            className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
            >Flowbite</span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
        {Footer.map((footer)=>(
          <FooterCard title={footer.title} links={footer.links} />
        ))}

      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023
        <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>.
        All Rights Reserved.
      </span>
      <div className="mt-4 flex sm:mt-0 sm:justify-center">
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook page</span>
        </a>
        <a
          href="#"
          className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 21 16"
          >
            <path
              d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
            />
          </svg>
          <span className="sr-only">Discord community</span>
        </a>
        <a
          href="#"
          className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter page</span>
        </a>
        <a
          href="#"
          className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub account</span>
        </a>
        <a
          href="#"
          className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Dribbble className="h-5 w-5" />
          <span className="sr-only">Dribbble account</span>
        </a>
      </div>
    </div>
  </div>
</footer>
    )
}

export default FooterSection