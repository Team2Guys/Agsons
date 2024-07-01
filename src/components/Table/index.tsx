import React from 'react';

const Table = () => {
  const data = [
    {
      item: "Total Thickness",
      RichmondSPCECO: "5.5 MM",
      RichmondSPCHerringbone: "5.5 MM",
      RichmondSPCPrime: "6.5 MM",
      RichmondComfortLVT: "5 MM",
      RichmondLuxuryLVT: "6 MM",
    },
    {
      item: "Core",
      RichmondSPCECO: "4.0MM Virgin White Stone",
      RichmondSPCHerringbone: "4.0MM Virgin White Stone",
      RichmondSPCPrime: "5.0MM Virgin White Stone",
      RichmondComfortLVT: "5.0MM Extruded Vinyl Core",
      RichmondLuxuryLVT: "6.0MM Extruded Vinyl Core",
    },
    {
      item: "Pre Attached IXPE UNDERLAY",
      RichmondSPCECO: "1.5 MM",
      RichmondSPCHerringbone: "1.5 MM",
      RichmondSPCPrime: "1.5 MM",
      RichmondComfortLVT: "None",
      RichmondLuxuryLVT: "None",
    },
    {
      item: "Plank Size",
      RichmondSPCECO: "183X1220MM",
      RichmondSPCHerringbone: "128X640MM",
      RichmondSPCPrime: "228X1524MM",
      RichmondComfortLVT: "1220X180MM",
      RichmondLuxuryLVT: "1220X228MM",
    },
    {
      item: "Wear Layer",
      RichmondSPCECO: "0.5MM",
      RichmondSPCHerringbone: "0.5MM",
      RichmondSPCPrime: "0.5MM",
      RichmondComfortLVT: "0.55MM",
      RichmondLuxuryLVT: "0.55MM",
    },
    {
      item: "EDGE Details",
      RichmondSPCECO: "4Side Click Lock",
      RichmondSPCHerringbone: "4Side Click Lock",
      RichmondSPCPrime: "4Side Click Lock",
      RichmondComfortLVT: "4Side Click Lock",
      RichmondLuxuryLVT: "4Side Click Lock",
    },
    {
      item: "Finish",
      RichmondSPCECO: "Matt with UV Protection",
      RichmondSPCHerringbone: "Matt with UV Protection",
      RichmondSPCPrime: "Matt with UV Protection",
      RichmondComfortLVT: "Matt with UV Protection",
      RichmondLuxuryLVT: "Matt with UV Protection",
    },
    {
      item: "Embossing",
      RichmondSPCECO: "3D Natural Embossing",
      RichmondSPCHerringbone: "3D Natural Embossing",
      RichmondSPCPrime: "3D Natural Embossing",
      RichmondComfortLVT: "3D Natural Embossing",
      RichmondLuxuryLVT: "3D Natural Embossing",
    },
    {
      item: "SQM Per Carton",
      RichmondSPCECO: "2.01",
      RichmondSPCHerringbone: "0.82",
      RichmondSPCPrime: "2.432",
      RichmondComfortLVT: "2.196",
      RichmondLuxuryLVT: "2.432",
    },
    {
      item: "Pieces Per Carton",
      RichmondSPCECO: "9PCS",
      RichmondSPCHerringbone: "10PCS",
      RichmondSPCPrime: "7PCS",
      RichmondComfortLVT: "10PCS",
      RichmondLuxuryLVT: "8PCS",
    },
    {
      item: "Residential Limited Warranty",
      RichmondSPCECO: "15 Years",
      RichmondSPCHerringbone: "15 Years",
      RichmondSPCPrime: "20 Years",
      RichmondComfortLVT: "15 Years",
      RichmondLuxuryLVT: "15 Years",
    },
    {
      item: "Commercial Limited Warranty",
      RichmondSPCECO: "5 Years",
      RichmondSPCHerringbone: "5 Years",
      RichmondSPCPrime: "7 Years",
      RichmondComfortLVT: "5 Years",
      RichmondLuxuryLVT: "5 Years",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <caption className="py-2 text-start font-bold text-lg">TECHNICAL DATA SHEET RICHMOND</caption>
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-start text-sm font-bold uppercase">Item</th>
                  <th scope="col" className="px-6 py-3 text-start text-sm font-bold uppercase">Richmond SPC ECO</th>
                  <th scope="col" className="px-6 py-3 text-start text-sm font-bold uppercase">Richmond SPC Herringbone</th>
                  <th scope="col" className="px-6 py-3 text-start text-sm font-bold uppercase">Richmond SPC Prime</th>
                  <th scope="col" className="px-6 py-3 text-start text-sm font-bold uppercase">Richmond Comfort LVT</th>
                  <th scope="col" className="px-6 py-3 text-start text-sm font-bold uppercase">Richmond Luxury LVT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{row.item}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.RichmondSPCECO}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.RichmondSPCHerringbone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.RichmondSPCPrime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.RichmondComfortLVT}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.RichmondLuxuryLVT}</td>
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

export default Table;
