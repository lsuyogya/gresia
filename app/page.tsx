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

            className="text-[#198754] text-yellow-300">
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

      <section
        aria-label="Services"
        style={{
          backgroundImage:
            "url(https://gresianepal.com/static/media/img2.712c3f17ab23d04d9a42.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <h1
          className="grid text-5xl place-content-center font-semibold text-yellow-400 mt-8 "
          aria-label="Services">
          Our Services
        </h1>
        <div className="grid grid-cols-3 p-24 gap-4">
          <div
            className=" col-start-1 flex flex-wrap gap-4 p-4 rounded"
            style={{ backdropFilter: "blur(20px)" }}>
            <h2 className=" text-4xl text-white">Financial Accounting</h2>
            <p className="text-white">
              Boost your business's financial efficiency with Busy Accounting
              Software's powerful tools, providing quick access to accounting
              transactions, vouchers, and financial statements
            </p>
          </div>
          <div
            className=" row-start-1 col-start-3 flex flex-wrap gap-4 p-4 rounded"
            style={{ backdropFilter: "blur(20px)" }}>
            <h2 className=" text-4xl text-white">Web Inventory Management</h2>
            <p className="text-white">
              Simplify your inventory management with our comprehensive software
              solution, providing detailed information on Batch No., Serial
              Nos., and Parameters like Colour, Size, Style, and more.
            </p>
          </div>
          <div
            className=" row-start-2 col-start-2 flex flex-wrap gap-4 p-4 rounded"
            style={{ backdropFilter: "blur(20px)" }}>
            <h2 className=" text-4xl text-white">Configurable Invoicing</h2>
            <p className="text-white">
              Efficiently manage your GST compliance with our powerful GST
              Accounting Software, providing detailed insights into your
              financial records and allowing you to generate professional
              invoices as per business requirements.
            </p>
          </div>
          <div
            className=" row-start-4 col-start-1 flex flex-wrap gap-4 p-4 rounded"
            style={{ backdropFilter: "blur(20px)" }}>
            <h2 className=" text-4xl text-white">
              Online and Offline Reporting
            </h2>
            <p className="text-white">
              Experience flexibility in reporting with our management software
              that offers offline and online reporting options, allowing you to
              generate reports on-the-go or when you're back online.
            </p>
          </div>
          <div
            className=" row-start-4 col-start-3 flex flex-wrap gap-4 p-4 rounded"
            style={{ backdropFilter: "blur(20px)" }}>
            <h2 className=" text-4xl text-white">Networking and Hardware</h2>
            <p className="text-white">
              Whether you're looking for hardware upgrades or network
              optimization, our expert team of technicians provides end-to-end
              solutions to meet your hardware and networking needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
