import React, { useState } from 'react';
import ListPic from '../assets/hp-product.png';
import DataMerk from './DataMerk';

function Product() {
  const [showMoreBestSeller, setShowMoreBestSeller] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState(null);
  
  //filter merk hp
  const [item, setItem] = useState(DataMerk)
  const menuItem = [...new Set(DataMerk.map((value) => value.merk))]
  const filterItem = (merkCategory) => {
    const newItem = DataMerk.filter((newValue) => newValue.merk === merkCategory)
    setItem(newItem)
  }

  const bestSellerProducts = [
    { name: 'Vivo', id: 1 },
    { name: 'Oppo', id: 2 },
    { name: 'Samsung', id: 3 },
    { name: 'Rog', id: 4 },
    { name: 'Iphone 12', id: 5 },
    { name: 'Samsung Z flip', id: 6 },
    { name: 'Rog', id: 7 },
    { name: 'Huawei', id: 8 }
  ];

  const renderProductSection = (sectionProducts, sectionTitle, showMore, setShowMore) => {
    const maxItemsToShow = showMore ? sectionProducts.length : 5;
  
    return (
      <div className="p-6 my-8">
        <h2 className="text-center text-2xl mb-4">{sectionTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sectionProducts.slice(0, maxItemsToShow).map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl border-2 border-slate-100 hover:shadow-2xl">
              <img
                src={ListPic}
                alt="list-img"
                className="w-full h-32 object-contain mb-2"
              />
              <p className="text-center">{product.name}</p>
              <div className="flex justify-center mt-2">
                <button className="bg-blue-400 text-white py-1 px-3 rounded">Buy</button>
              </div>
            </div>
          ))}
        </div>
        {sectionProducts.length > 3 && !showMore && (
          <div className="text-center my-4">
            <button
              onClick={() => setShowMore(true)}
              className="py-2 px-3 rounded bg-blue-400 text-white"
            >
              Read More {sectionTitle}
            </button>
          </div>
        )}
        <div className="pt-6">
          <h2 className="text-2xl text-center mb-4">Find the right phone for you</h2>
          <div className="mt-3 py-3 px-4 flex justify-center rounded-lg shadow-lg">
            <div className="flex flex-wrap justify-center gap-3">{menuItem.map(value => (
            
              <button onClick={() => {
                filterItem(value);  
                setSelectedBrand((prevBrand) => (prevBrand === value ? null : value));
                }
              } 
              className={`py-2 px-4 ${selectedBrand === value ? 'bg-blue-400 text-white' : 'bg-transparent border-2 border-blue-400 text-blue-400'} rounded`}>{value}</button>
            ))}
            <button onClick={() => {
            setItem(DataMerk);
            setSelectedBrand(null);
            }
          } 
          className={`py-2 px-4  ${selectedBrand === null ? 'bg-blue-400 text-white' : 'bg-transparent border-2 border-blue-400 text-blue-400'} rounded`}>ALL</button>
            </div>
          </div>
  
          <div className="pt-8">
            <div className="flex flex-wrap justify-center gap-3">{item.map((value) => (
              <div key={value.id} className="p-2 w-[200px] rounded-md border-2 border-slate-100 hover:shadow-lg">
                  <img src={value.pic} alt="Handphone" />
                  <p className="pt-2 text-lg text-center">{value.merk}</p>
                  <p className="text-md text-center">{value.seri}</p>
                  <p className="pt-2 text-md text-center">{value.price}</p>
                  <div className="flex justify-center mt-2">
                    <button className="bg-blue-400 text-white py-1 px-3 rounded">Buy</button>
                  </div>
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <div className="my-8 p-2">
      {renderProductSection(
        bestSellerProducts,
        'Best Seller Products',
        showMoreBestSeller,
        setShowMoreBestSeller
      )}
    </div>
  );
}

export default Product;
