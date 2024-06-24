import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setProduct } from './sales/salesSlice';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import GraphDisplay from './components/GraphDisplay';
import DataTable from './components/DataTable';
import jsonData from './data.json';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.sales.product);

  useEffect(() => {
    dispatch(setProduct(jsonData[0]));
  }, [dispatch]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
    <Header />
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="md:col-span-1">
        <ProductDisplay
          title={product.title}
          subtitle={product.subtitle}
          image={product.image}
          tags={product.tags}
        />
      </div>
      <div className="md:col-span-4 flex flex-col space-y-4">
        <GraphDisplay data={product.sales} />
        <DataTable data={product.sales} />
      </div>
    </div>
  </div>
  );
};

export default App;
