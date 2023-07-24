import React from "react";
import withAuth from "@/app/_components/_auth/withAdminPrivateRoute";
const AdminLogin = () => {
  type contactData = {
    id: number;
    name: string;
    email: string;
    message: string;
  };
  const contactData: Array<contactData> = [
    {
      id: 1,
      name: "Mark",
      email: "mark@plier.com",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      name: "Mark",
      email: "mark@plier.com",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      name: "Mark",
      email: "mark@plier.com",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <div className="grid">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light table-fixed">
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
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contactData.map((contact, index) => {
                    return (
                      <>
                        <tr
                          className="border-b dark:border-neutral-500"
                          key={contact.id}>
                          <td className="whitespace-nowrap  px-6 py-4 font-medium">
                            {index}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {contact.name}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {contact.email}
                          </td>
                          <td className="px-6 py-4 line-clamp-6">
                            <div className=" overflow-clip">
                              {contact.message}
                            </div>
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

export default withAuth(AdminLogin);
