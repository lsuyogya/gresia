import formStyle from "@/app/_styles/form.module.css";

export default function serviceID({ params }: { params: { id: number } }) {
  //TODO: get service data from backend
  const data = {
    serviceName: "Product 1",
    serviceDetails:
      "jshdkfjdsj djfhdsjfhjdsh jsdfhdjshfjds sdfhdjfhj sdjhfjdhfjsdhf sdjhfjsdhfjkshdf sdjfhjsdhfjsdhfjkdhsfjhf jshdkfjdsj djfhdsjfhjdsh jsdfhdjshfjds sdfhdjfhj sdjhfjdhfjsdhf sdjhfjsdhfjkshdf sdjfhjsdhfjsdhfjkdhsfjhf jshdkfjdsj djfhdsjfhjdsh jsdfhdjshfjds sdfhdjfhj sdjhfjdhfjsdhf sdjhfjsdhfjkshdf sdjfhjsdhfjsdhfjkdhsfjhf jshdkfjdsj djfhdsjfhjdsh jsdfhdjshfjds sdfhdjfhj sdjhfjdhfjsdhf sdjhfjsdhfjkshdf sdjfhjsdhfjsdhfjkdhsfjhf",
  };
  const formGroupClass = "md:flex md:items-center mb-6";
  const inputClass =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  return (
    <>
      <section className="p-4">
        <div className="grid grid-cols-2 gap-20">
          <div className="grid">
            <div>{data.serviceName}</div>
            <div>{data.serviceDetails}</div>
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
              <button className="bg-green-400 p-4 rounded text-white w-32 place-self-center">
                PAY NOW
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
