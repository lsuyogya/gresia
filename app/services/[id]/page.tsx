import formStyle from "@/app/_styles/form.module.css";

export default function serviceID({ params }: { params: { id: number } }) {
  //TODO: get service data from backend
  const data = {
    serviceName: "Product 1",
    serviceDetails: [
      "Specially designed for Stockists, Wholesalers",
      "Ensure 0% losses due to Expiry & Dump Stock",
      "Do effortless Stock Management & Accounting",
      "Complete business management to increase revenues",
      "Uninterrupted GST Billing, Return Filing & E-way",
      "Manage multiple Warehouses & Godowns With Ease",
      "Increase your sales with easy Shipping & Delivery",
    ],
  };
  const formGroupClass = "grid md:items-center mb-6";
  const inputClass =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  return (
    <>
      <section className="p-4">
        <div className="grid grid-cols-2 gap-1 ">
          <div
            className="grid p-8 gap-20"
            style={{ borderRight: "1px solid #dfdfdf" }}>
            <div className=" font-bold text-xl place-self-center mt-6">
              {data.serviceName}
            </div>
            <ul className="grid gap-4 text-lg md:p-4">
              {data.serviceDetails.map((detail, index) => (
                <li className="list-disc" key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-12 " style={{ borderLeft: "1px solid #dfdfdf" }}>
            <form className="p-24 rounded grid">
              <div className={formGroupClass}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className={inputClass} />
              </div>
              <div className={formGroupClass}>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" className={inputClass} />
              </div>
              <div className={formGroupClass}>
                <label htmlFor="pin">Pin</label>
                <input type="text" id="pin" className={inputClass} />
              </div>
              <button className="bg-green-500 p-2 rounded text-white w-32 place-self-center">
                Order Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
