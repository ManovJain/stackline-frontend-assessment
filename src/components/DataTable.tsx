import React, { useState } from 'react';

interface DataTableProps {
  data: { weekEnding: string, retailSales: number, wholesaleSales: number, unitsSold: number, retailerMargin: number }[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'ascending' | 'descending' } | null>(null);

  const sortData = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    const sorted = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setSortedData(sorted);
    setSortConfig({ key, direction });
  };

  const resetData = () => {
    setSortedData(data);
    setSortConfig(null);
  };

  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return '⬇️';
    }
    return sortConfig.direction === 'ascending' ? '⬆️' : '⬇️';
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <div className="flex justify-end mb-2">
        <button onClick={resetData} className="bg-[#042949] text-white px-2 py-1 rounded">
          Reset
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left cursor-pointer" onClick={() => sortData('weekEnding')}>
              Week Ending {getSortIcon('weekEnding')}
            </th>
            <th className="py-2 px-4 border-b text-right cursor-pointer" onClick={() => sortData('retailSales')}>
              Retail Sales {getSortIcon('retailSales')}
            </th>
            <th className="py-2 px-4 border-b text-right cursor-pointer" onClick={() => sortData('wholesaleSales')}>
              Wholesale Sales {getSortIcon('wholesaleSales')}
            </th>
            <th className="py-2 px-4 border-b text-right cursor-pointer" onClick={() => sortData('unitsSold')}>
              Units Sold {getSortIcon('unitsSold')}
            </th>
            <th className="py-2 px-4 border-b text-right cursor-pointer" onClick={() => sortData('retailerMargin')}>
              Retailer Margin {getSortIcon('retailerMargin')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-left">{new Date(item.weekEnding).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b text-right">{item.retailSales.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td className="py-2 px-4 border-b text-right">{item.wholesaleSales.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td className="py-2 px-4 border-b text-right">{item.unitsSold.toLocaleString()}</td>
              <td className="py-2 px-4 border-b text-right">{item.retailerMargin.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
