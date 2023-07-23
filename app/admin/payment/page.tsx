import React from "react";
const AdminLogin = () => {
  type paymentData = {
    name: string;
    email: string;
    phone: number;
    country: string;
    amount: number;
    method: string;
  };
  const paymentData: Array<paymentData> = [
    {
      name: "Mark",
      email: "mark@plier.com",
      phone: 1112223334,
      country: "Nepal",
      amount: 9000,
      method: "Card",
    },
    {
      name: "Mark",
      email: "mark@plier.com",
      phone: 1112223334,
      country: "Nepal",
      amount: 9000,
      method: "Card",
    },
    {
      name: "Mark",
      email: "mark@plier.com",
      phone: 1112223334,
      country: "Nepal",
      amount: 9000,
      method: "Card",
    },
    {
      name: "Mark",
      email: "mark@plier.com",
      phone: 1112223334,
      country: "Nepal",
      amount: 9000,
      method: "Card",
    },
    {
      name: "Mark",
      email: "mark@plier.com",
      phone: 1112223334,
      country: "Nepal",
      amount: 9000,
      method: "Card",
    },
    {
      name: "Mark",
      email: "mark@plier.com",
      phone: 1112223334,
      country: "Nepal",
      amount: 9000,
      method: "Card",
    },
    {
      name: "Mark",
      email: "mark@plier.com",
      phone: 1112223334,
      country: "Nepal",
      amount: 9000,
      method: "Card",
    },
    {
      name: "Mark",
      email: "mark@plier.com",
      phone: 1112223334,
      country: "Nepal",
      amount: 9000,
      method: "Card",
    },
    {
      name: "Mark",
      email: "mark@plier.com",
      phone: 1112223334,
      country: "Nepal",
      amount: 9000,
      method: "Card",
    },
  ];
  return (
    <div className="grid">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      SNo
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Phone
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Country
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Payment Amount
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Payment Method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paymentData.map((payment, index) => {
                    return (
                      <>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap  px-6 py-4 font-medium">
                            {index}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {payment.name}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {payment.email}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {payment.phone}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {payment.country}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {payment.amount}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {payment.method}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
