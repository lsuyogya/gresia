import formStyle from "@/app/_styles/form.module.css";
import PaymentForm from "@/app/_components/_payment/PaymentForm";
export default function ServiceID({ params }: { params: { id: number } }) {
  //TODO: get service data from backend
  const data = {
    serviceName: "Job Portal",
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

  return (
    <>
      <section className="p-4">
        <div className="grid md:grid-cols-2 gap-1 ">
          <div className="grid p-8 gap-20 ">
            <div className=" font-bold text-4xl place-self-center mt-6 text-blue-500">
              {data.serviceName}
            </div>
            <ul className="grid gap-4 text-lg p-6 border-t-2 border-b-2 ml-6">
              {data.serviceDetails.map((detail, index) => (
                <li className="list-disc" key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="px-24 py-8 grid gap-20 md:border-l">
            <div className="text-2xl font-semibold text-blue-500 mt-8">
              Proceed with payment
            </div>
            <PaymentForm></PaymentForm>
          </div>
        </div>
      </section>
    </>
  );
}
