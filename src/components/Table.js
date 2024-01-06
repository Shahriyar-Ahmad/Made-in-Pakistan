import React from 'react';

const Table = () => {

  return (
    <div className="container my-8 mx-auto">
      <h2 className='min-[200px]:text-lg md:text-3xl mb-4 text-center font-bold min-[200px]:w-60 md:w-96 m-auto shadow-lg px-1 py-3 rounded-md bg-green-600 text-white stroke-green-600'>Some Infomation</h2>
      <table className="w-[80%] m-auto bg-white border border-gray-300 text-left">
        <thead className='bg-green-600 text-white'>
          <tr>
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Total Brands</th>
          </tr>
        </thead>
        <tbody>
            <tr >
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">Groceries</td>
              <td className="py-2 px-4 border-b">9</td>
            </tr>
            <tr >
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Food & Beverage</td>
              <td className="py-2 px-4 border-b">6</td>
            </tr>
            <tr >
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">Personal Care</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
            <tr >
              <td className="py-2 px-4 border-b">4</td>
              <td className="py-2 px-4 border-b">Electronics & Home appliances</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr >
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">Clothing and Apparel</td>
              <td className="py-2 px-4 border-b">8</td>
            </tr>
            <tr >
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">Medications and Health Products</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
