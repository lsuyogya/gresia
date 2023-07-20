import Image from "next/image";
import style from "./landing.module.css";
import aboutSvg from "../public/AboutUs.svg";

export default function Home() {
  return (
    <div className="grid gap-8">
      <section
        className={`grid p-28 h-max ${style.bgMask}`}
        style={{
          height: "30rem",
          backgroundImage:
            "url(https://gresianepal.com/static/media/img3.1c8e447052a36a86ead0.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <span className="text-7xl">
          <span className="text-[#0c576e] text-white">Gresia </span>
          <span className="text-[#198754] text-white">Family</span>
        </span>
        <span className="text-7xl text-white">Welcomes You</span>
        <span className="text-7xl text-white">
          With{" "}
          <span
            // style={{
            //   backgroundImage: "linear-gradient(45deg, #0c576e, #198754)",
            //   backgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            //   color: "white",
            // }}

            className="text-[#198754] text-green-500">
            Warm{" "}
          </span>
          Hands
        </span>
      </section>
      <section>
        <h1
          className="grid text-5xl place-content-center font-semibold text-blue-700"
          aria-label="About">
          About Us
        </h1>
        <div className="grid grid-cols-2 pl-20 pr-20">
          <Image priority src={aboutSvg} alt="More about us" />
          <p
            className=" pt-24 align-middle text-center flex flex-wrap h-4 gap-12 justify-center"
            style={{ marginLeft: "-2rem" }}>
            The management software's robust reporting and analytics
            capabilities provided us with detailed insights into our financial
            performance, enabling us to quickly identify areas for improvement
            and take proactive steps to optimize our operations and increase
            profitability. The management software's robust reporting and
            analytics capabilities provided us with detailed insights into our
            financial performance, enabling us to quickly identify areas for
            improvement and take proactive steps to optimize our operations and
            increase profitability. The management software's robust reporting
            and analytics capabilities provided us with detailed insights into
            our financial performance, enabling us to quickly identify areas for
            improvement and take proactive steps to optimize our operations and
            increase profitability. The management software's robust reporting
            and analytics capabilities provided us with detailed insights into
            our financial performance, enabling us to quickly identify areas for
            improvement and take proactive steps.
            <button className=" bg-green-500 w-48 p-2 rounded text-white span col-start-2  ">
              Read More About Us
            </button>
          </p>
        </div>
      </section>
    </div>
  );
}
