export default function Services() {
  return (
    <section
      aria-label="Services"
      id="Services"
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
            Boost your business&#39;s financial efficiency with Busy Accounting
            Software&#39;s powerful tools, providing quick access to accounting
            transactions, vouchers, and financial statements
          </p>
        </div>
        <div
          className=" row-start-1 col-start-3 flex flex-wrap gap-4 p-4 rounded"
          style={{ backdropFilter: "blur(20px)" }}>
          <h2 className=" text-4xl text-white">Web Inventory Management</h2>
          <p className="text-white">
            Simplify your inventory management with our comprehensive software
            solution, providing detailed information on Batch No., Serial Nos.,
            and Parameters like Colour, Size, Style, and more.
          </p>
        </div>
        <div
          className=" row-start-2 col-start-2 flex flex-wrap gap-4 p-4 rounded"
          style={{ backdropFilter: "blur(20px)" }}>
          <h2 className=" text-4xl text-white">Configurable Invoicing</h2>
          <p className="text-white">
            Efficiently manage your GST compliance with our powerful GST
            Accounting Software, providing detailed insights into your financial
            records and allowing you to generate professional invoices as per
            business requirements.
          </p>
        </div>
        <div
          className=" row-start-4 col-start-1 flex flex-wrap gap-4 p-4 rounded"
          style={{ backdropFilter: "blur(20px)" }}>
          <h2 className=" text-4xl text-white">Online and Offline Reporting</h2>
          <p className="text-white">
            Experience flexibility in reporting with our management software
            that offers offline and online reporting options, allowing you to
            generate reports on-the-go or when you&#39;re back online.
          </p>
        </div>
        <div
          className=" row-start-4 col-start-3 flex flex-wrap gap-4 p-4 rounded"
          style={{ backdropFilter: "blur(20px)" }}>
          <h2 className=" text-4xl text-white">Networking and Hardware</h2>
          <p className="text-white">
            Whether you&#39;re looking for hardware upgrades or network
            optimization, our expert team of technicians provides end-to-end
            solutions to meet your hardware and networking needs.
          </p>
        </div>
      </div>
    </section>
  );
}
