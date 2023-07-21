import React from "react";
import {
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsFillBuildingsFill,
} from "react-icons/bs";
const Contact = () => {
  const socialsStyle =
    "relative p-8 place-self-center text-center font-semibold hover:text-blue-500 transition-all after:content-[' '] after:w-0.5 after:h-14 after:bg-gray-700 after:absolute after:top-3 after:-right-1 before:content-[' '] before:w-0.5 before:h-14 before:bg-gray-700 before:absolute before:top-3 before:-right-2 after:";

  const mapLink =
    "https://www.google.com/maps/place/Gresia+Business+Group/@27.7078395,85.3176224,18.82z/data=!4m6!3m5!1s0x39eb19f06d71a569:0xec4605556ae549e8!8m2!3d27.7078481!4d85.3186848!16s%2Fg%2F11v0vlb5jk?entry=ttu";
  return (
    <div className="grid">
      <section
        aria-label="Social Links"
        className="grid grid-cols-4 place-content-center">
        <a href={mapLink} target="_blank">
          <div className={socialsStyle}>
            <div className="grid place-content-center">
              <div className=" flex flex-wrap gap-1">
                <BsFillBuildingsFill size={30} className="-mt-1" /> Come Visit
                Us
              </div>
            </div>
          </div>
        </a>
        <a href={mapLink} target="_blank">
          <div className={socialsStyle}>
            <div className="grid place-content-center">
              <div className=" flex flex-wrap gap-1">
                <BsFacebook size={30} className="-mt-1" /> Facebook
              </div>
            </div>
          </div>
        </a>
        <a href={mapLink} target="_blank">
          <div className={socialsStyle}>
            <div className="grid place-content-center">
              <div className=" flex flex-wrap gap-1">
                <BsLinkedin size={30} className="-mt-1" /> LinkedIn
              </div>
            </div>
          </div>
        </a>
        <a href={mapLink} target="_blank">
          <div
            className={
              "p-8 place-self-center text-center font-semibold hover:text-blue-500 transition-all"
            }>
            <div className="grid place-content-center">
              <div className=" flex flex-wrap gap-1">
                <BsTwitter size={30} className="-mt-1" /> LinkedIn
              </div>
            </div>
          </div>
        </a>
      </section>
      <section
        aria-label="Contact Form"
        className="grid mt-20 place-content-center">
        <div className="text-6xl text-center">
          We&#39;d Love to Hear From You
        </div>
        <div className="text-center mb-20">
          We&#39;re ready to answer any and all questions you may have
        </div>
        <form className="grid gap-4 p-4">
          <div className="formGroup grid">
            <label htmlFor="name" className="text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="formInput shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="formGroup grid">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="formInput shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="formGroup grid">
            <label htmlFor="message" className="text-lg">
              Message
            </label>
            <textarea
              id="message"
              className="formInput shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button className="bg-green-500 w-max px-6 py-2 place-self-center mt-20 rounded text-white font-semibold">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
