"use client";

import { jsPDF } from "jspdf";
import CompanyLogo from "@/public/CompanyLogo.png";
import autoTable from "jspdf-autotable";

export default function PDF() {
  const getBase64StringFromDataURL = (dataURL: any) =>
    dataURL.replace("data:", "").replace(/^.+,/, "");
  const invoiceTableHeaders = [
    "S.No.",
    "Description",
    "Quantity",
    "Price",
    "Total",
  ];
  type dataRow = {
    No: string;
    Description: string;
    Quantity: string;
    Price: string;
    Total: string;
  };
  const invoiceContents: Array<dataRow> = [
    {
      Description: "Product Name",
      No: "1",
      Quantity: "2",
      Total: "2000.0",
      Price: "1000.0",
    },
    {
      Description: "Product Name",
      No: "1",
      Quantity: "2",
      Total: "2000.0",
      Price: "1000.0",
    },
    {
      Description: "Product Name",
      No: "1",
      Quantity: "2",
      Total: "2000.0",
      Price: "1000.0",
    },
  ];
  let bodyCounter = 0;
  const body: Array<Array<any>> = [];
  invoiceContents.map((content, index) => {
    bodyCounter++;
    body.push([
      index + 1,
      content.Description,
      content.Quantity,
      content.Price,
      content.Total,
    ]);
  });

  const doc = new jsPDF({ format: "a4", orientation: "portrait" });

  fetch(CompanyLogo.src)
    .then((res) => res.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = getBase64StringFromDataURL(reader.result);
        doc.addImage({
          imageData: base64,
          x: 14,
          y: 12,
          format: "PNG",
          width: 30,
          height: 30,
        });
      };
      reader.readAsDataURL(blob);
    });
  const leftXAdjustment = 4;
  const rightXAdjustment = -4;
  doc.setFontSize(24);
  doc.text("Invoice No.", 155 + rightXAdjustment, 15);
  doc.setFontSize(28);
  doc.text("110000", 160 + rightXAdjustment, 26);

  doc.setFontSize(12);
  doc.text("Date:", 161 + rightXAdjustment, 35);
  doc.text("2023/04/12", 176 + rightXAdjustment, 35);
  doc.text("Sell Date:", 153 + rightXAdjustment, 40);
  doc.text("2023/04/12", 176 + rightXAdjustment, 40);

  doc.setFillColor("#D3D3D3");
  doc.setDrawColor("#D3D3D3");
  doc.rect(10 + leftXAdjustment, 70, 90, 35, "FD");
  doc.rect(110 + rightXAdjustment, 70, 90, 35, "D");

  doc.setFontSize(12);
  doc.text("Invoice from:", 15 + leftXAdjustment, 69);
  doc.text("Invoice to:", 115 + rightXAdjustment, 69);

  doc.setFontSize(16);
  doc.text("Gresia Nepal", 15 + leftXAdjustment, 78);
  doc.text("Sample Company", 115 + rightXAdjustment, 78);

  const streetAddressY = 86;
  const streetAddressYInterval = 7;
  doc.setFontSize(12);
  doc.text("Gresia Street Address", 30, streetAddressY);
  doc.text("Company Street Address", 120, streetAddressY);
  doc.text("Grecia City", 30, streetAddressY + streetAddressYInterval);
  doc.text("Company City", 120, streetAddressY + streetAddressYInterval);
  doc.text("VAT Reg No", 30, streetAddressY + streetAddressYInterval * 2);
  doc.text("Vat Value", 57, streetAddressY + streetAddressYInterval * 2);
  doc.text("Company Country", 120, streetAddressY + streetAddressYInterval * 2);

  const y3 = streetAddressY + streetAddressYInterval * 2 + 15;
  autoTable(doc, {
    columnStyles: {
      // 0: { halign: "center" },
      // 2: { halign: "center" },
      3: { halign: "right" },
      4: { halign: "right" },
    },
    head: [invoiceTableHeaders],
    body: body,
    startY: y3,
    theme: "grid",
  });

  const y4 = y3 + 8 + 7.45 * bodyCounter + 20;
  doc.setFontSize(12);
  doc.text("Total Amount", 150, y4);
  doc.text("Amount", 180, y4);
  doc.text("Due Amount", 152, y4 + 7);
  doc.text("Amount", 180, y4 + 7);
  doc.text("Payment Method", 144, y4 + 7 * 2);
  doc.text("Card", 180, y4 + 7 * 2);

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    doc.output("pdfobjectnewwindow");
    doc.save("bill.pdf");
  }

  return (
    <div>
      <button className="bg-green-700 text-white" onClick={handleButtonClick}>
        Download
      </button>
    </div>
  );
}
