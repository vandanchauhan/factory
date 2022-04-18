import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import {finishedProductsData, finishedProductData, rawMaterialData} from "../../assets/data";
import {Link} from "react-router-dom";

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

export default function FinishedProductsTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="flex flex-1 flex-row justify-between">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Finished Products
              </h3>
              <Link>
                <div classname={'border border-solid border-blueGray-100'}>
                    <span>
                    <i className="fas fa-plus-circle mr-2 text-lg text-blueGray-400"/>
                  </span>Add Product
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "text-center px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Product Name
                </th>
                <th
                    className={
                        "text-center px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                >
                  Raw Materials
                </th>
                <th
                  className={
                    "text-center px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Variant
                </th>
                <th
                  className={
                    "text-center px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Available Stock
                </th>
                <th
                  className={
                    "text-center px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Production Type
                </th>
                <th
                  className={
                    "text-center px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Requirement
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
            {finishedProductsData.map((finishedProduct, index) => {
              return <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                      src={require("assets/img/pillow.png").default}
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                  ></img>{" "}
                  <span
                      className={
                          "ml-3 font-bold " +
                          +(color === "light" ? "text-blueGray-600" : "text-white")
                      }
                  >
                    {finishedProduct.name}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  {/*{getRawMaterialData(finishedProduct.rawMaterials).map}*/}
                  <div className={'flex flex-wrap flex-1'}>
                    {getRawMaterialData(finishedProduct.rawMaterials).length > 0 &&
                        getRawMaterialData(finishedProduct.rawMaterials).map((rawMaterial, index) => {
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
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  {finishedProduct.variant?.color}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  {/*<i className="fas fa-circle text-orange-500 mr-2"></i> pending*/}
                  {finishedProduct.qty} pcs
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  {finishedProduct.productionType}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  {finishedProduct.qty > finishedProduct.required ?
                      <i className="fas fa-circle text-orange-500 mr-2"></i> :
                      <i className="fas fa-circle text-emerald-500 text-center mr-2"></i>}
                  {finishedProduct.qty > finishedProduct.required ? 'Yes, restock fast!' : 'Not yet, were good!'}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
            })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

FinishedProductsTable.defaultProps = {
  color: "light",
};

FinishedProductsTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
