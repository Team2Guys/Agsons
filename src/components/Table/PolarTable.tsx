import React from 'react';

const PolarTable = () => {
  const data = [
    {
      item: "Total Thickness",
      PolarSPC: "4.0 MM",
      PolarHerringbone: "4.0 MM",
      PolarLVT: "4.0 MM",
    },
    {
      item: "Core",
      PolarSPC: "4.0MM Virgin White Stone",
      PolarHerringbone: "4.0MM Virgin White Stone",
      PolarLVT: "4.0MM Extruded Vinyl Core",
    },
    {
      item: "Pre Attached IXPE UNDERLAY",
      PolarSPC: "None",
      PolarHerringbone: "None",
      PolarLVT: "None",
    },
    {
      item: "Plank Size",
      PolarSPC: "183X1220MM",
      PolarHerringbone: "128X640MM",
      PolarLVT: "1220X180MM",
    },
    {
      item: "Wear Layer",
      PolarSPC: "0.3MM",
      PolarHerringbone: "0.3MM",
      PolarLVT: "0.3MM",
    },
    {
      item: "EDGE Details",
      PolarSPC: "4Side Click Lock",
      PolarHerringbone: "4Side Click Lock",
      PolarLVT: "4Side Click Lock",
    },
    {
      item: "Finish",
      PolarSPC: "Matt",
      PolarHerringbone: "Matt",
      PolarLVT: "Matt",
    },
    {
      item: "Embossing",
      PolarSPC: "3D Natural",
      PolarHerringbone: "3D Natural",
      PolarLVT: "3D Natural",
    },
    {
      item: "SQM Per Carton",
      PolarSPC: "2.01",
      PolarHerringbone: "0.82",
      PolarLVT: "2.635",
    },
    {
      item: "Pieces Per Carton",
      PolarSPC: "9PCS",
      PolarHerringbone: "10PCS",
      PolarLVT: "10PCS",
    },
    {
      item: "Residential Limited Warranty",
      PolarSPC: "5 Years",
      PolarHerringbone: "5 Years",
      PolarLVT: "5 Years",
    },
    {
      item: "Commercial Limited Warranty",
      PolarSPC: "2 Years",
      PolarHerringbone: "2 Years",
      PolarLVT: "2 Years",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <caption className="py-2 text-start font-bold text-lg">TECHNICAL DATA SHEET POLAR</caption>
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-start text-sm font-bold uppercase">Item</th>
                  <th scope="col" className="px-6 py-3 text-start text-sm font-bold uppercase">Polar SPC</th>
                  <th scope="col" className="px-6 py-3 text-start text-sm font-bold uppercase">Polar Herringbone</th>
                  <th scope="col" className="px-6 py-3 text-start text-sm font-bold uppercase">Polar LVT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{row.item}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.PolarSPC}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.PolarHerringbone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.PolarLVT}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolarTable;
