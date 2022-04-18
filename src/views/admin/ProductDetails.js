import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import RawMaterialsTable from "../../components/Cards/RawMaterialsTable";
import FinishedProductsTable from "../../components/Cards/FinishedProductsTable";
import {finishedProductsData, rawMaterialData} from "../../assets/data";

const getRawMaterialData = (rawMaterials) => {
    return rawMaterials.map((item, index) => {
        const rawMaterialId = item.id;
        const rawMaterialItem = rawMaterialData.find((item) => item.id === rawMaterialId);
        const rawMaterialQty = item.qty;
        return {
            name: rawMaterialItem.name,
            qty: rawMaterialQty
        }
    });
}

export default function ProductDetails(props) {
    const ProductId = props?.match?.params?.productId;
    const product = finishedProductsData.find((item) => item.code === ProductId);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
            <>
                <p className={'text-lg'}>Product Details : {product.name} <span className={'text-xs'}>({product.code})</span></p>
                <div className="relative my-4 cursor-pointer flex flex-row min-w-0 break-words bg-white rounded-lg xl:mb-0 shadow-lg">
                    <div className="flex-auto p-3">
                        <div className="flex flex-wrap">
                            <div className="relative w-auto pr-4 flex-initial">
                                <div
                                    className={
                                        "text-white text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-lg"
                                    }
                                >
                                    <img
                                        alt="..."
                                        className="w-full rounded-lg"
                                        src={require("assets/img/pillow.png").default}
                                    />
                                </div>
                            </div>
                            <div className="relative w-full max-w-full flex-grow flex-1">
              <span className="font-normal text-md text-blueGray-700">
                {product.name}
              </span>
                                <p className="text-blueGray-400 uppercase font-normal text-xs">
                                    {product.code}{','} {product.productionType}
                                </p>
                            </div>
                        </div>
                        <div className={'flex flex-wrap'}>
                            {getRawMaterialData(product.rawMaterials).length > 0 &&
                                getRawMaterialData(product.rawMaterials).map((rawMaterial, index) => {
                                    return <div className={'flex flex-row w-16 overflow-x-auto bg-blueGray-200 rounded-full p-2 py-1 mt-2 mr-1'}>
                                        <p className="text-blueGray-600 font-light text-xxs whitespace-nowrap overflow-hidden">
                    <span className="text-blueGray-600 font-light text-xxs whitespace-nowrap overflow-hidden">
                      {rawMaterial.name}
                    </span>
                                        </p>
                                        <span className="text-blueGray-600 font-light text-xxs whitespace-nowrap">
                        ...
                      </span>
                                    </div>
                                })}
                        </div>
                        <div className="flex flex-wrap justify-between items-center mt-5">
                            <div className={'flex flex-col'}>
                                <p className="text-xs font-light text-blueGray-400 mt-1">
                                    <span className={'text-emerald-500' + "whitespace-nowrap"}>Available :</span>
                                    <span className={'text-emerald-500'}>
                  {' '}{product.qty}
                </span>
                                </p>
                                <p className="text-xs font-light text-blueGray-400 mt-1">
                                    <span className={'bg-blue' + "whitespace-nowrap"}>Production Capacity :</span>
                                    <span className={'bg-blue'}>
                  {' '}{product.qty}
                </span>
                                </p>
                                <p className="text-xs font-light text-blueGray-400 mt-1">
                                    <span className={'text-orange-500' + "whitespace-nowrap"}>Required :</span>
                                    <span className={'text-orange-500'}>
                  {' '}{product.qty}
                </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-auto flex flex-col justify-end items-center p-3">
                        <div
                            className={
                                "text-white text-sm p-3 text-center inline-flex items-center justify-center w-8 h-8 shadow-lg rounded-full " +
                                'bg-orange-500'
                            }
                        >
                            200
                        </div>
                        <div
                            className={
                                "text-white mt-2 text-sm p-3 text-center inline-flex items-center justify-center w-10 h-10 shadow-lg rounded-full " +
                                'bg-blue'
                            }
                        >
                            98
                        </div>
                        <div
                            className={
                                "text-white mt-2 text-sm p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                                'bg-emerald-500'
                            }
                        >
                            12
                        </div>
                    </div>
                </div>
            </>
        </div>
      </div>
    </>
  );
}
