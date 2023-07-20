import formStyle from "@/app/_styles/form.module.css";

export default function serviceID({ params }: { params: { id: number } }) {
  //TODO: get service data from backend
  const data = {
    serviceName: "Product 1",
    serviceDetails: [
      "Specially designed for Stockists, Wholesalers, Distributors, Pharma C&Fs",
      "Ensure 0% losses due to Expiry & Dump Stock",
      "Do effortless Stock Management & Accounting",
      "Complete business management to increase your revenues",
      "Uninterrupted GST Billing, Return Filing & E-way Bill",
      "Manage multiple Warehouses & Godowns",
      "Increase your sales with easy Shipping & Deliveries",
    ],
  };
  const formGroupClass = "md:flex md:items-center mb-6";
  const inputClass =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  return (
    <>
      <section className="p-4">
        <div className="grid grid-cols-2 gap-20">
          <div className="grid p-8 gap-20">
            <div className=" font-bold text-xl place-self-center mt-6">
              {data.serviceName}
            </div>
            <ul className="grid gap-4 text-lg md:p-4">
              {data.serviceDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="p-12">
            <form className=" bg-gray-400 p-12 rounded grid">
              <div className={formGroupClass}>
                <div className="md:w-1/3">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="md:w-2/3">
                  <input type="text" id="name" className={inputClass} />
                </div>
              </div>
              <div className={formGroupClass}>
                <div className="md:w-1/3">
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="md:w-2/3">
                  <input type="text" id="phone" className={inputClass} />
                </div>
              </div>
              <button className="bg-green-500 p-4 rounded text-white w-32 place-self-center">
                Order Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
