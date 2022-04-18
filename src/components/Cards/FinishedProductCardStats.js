import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function FinishedProductCardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statQty,
  units,
  statIconColor,
  statrequiredColor,
  statProductionType,
  rawMaterials,
  capacityIconColor,
  capacityColor,
  capacity,
  id,
  requiredQty,
  restockNeeded,
  goodToGo,
}) {
  const cardColor = restockNeeded && requiredQty !== 0 ? 'bg-red-400' : 'bg-emerald-200';
  return (
    <Link to={`/admin/product/${id}`}>
      <div className={
        // requiredQty === 0 ?
          "relative my-4 cursor-pointer flex flex-row min-w-0 break-words bg-white rounded-lg xl:mb-0 shadow-lg"
          // `relative my-4 cursor-pointer flex flex-row min-w-0 break-words rounded-lg xl:mb-0 shadow-lg ${cardColor}`
      }>
        {requiredQty !== 0 && <div className={` ${cardColor} h-2 w-full absolute top-2 left-0`}/>}
        <div className="flex-auto p-3">
          <div className="flex flex-wrap">
            <div className="relative w-auto pr-4 flex-initial">
              <div
                className={
                  "text-white text-center inline-flex items-center justify-center w-16 h-16 rounded-t-lg"
                }
              >
                <img
                    alt="..."
                    className="w-full h-auto rounded-lg shadow-lg"
                    src={require("assets/img/pillow.png").default}
                />
              </div>
            </div>
            <div className="relative w-full max-w-full flex-grow flex-1">
              <span className="font-normal text-md text-blueGray-700">
                {statTitle}
              </span>
              <p className="text-blueGray-400 uppercase font-normal text-xs">
                {statSubtitle}{','} {statProductionType}
              </p>
            </div>
          </div>
          <div className={'flex flex-wrap'}>
            {rawMaterials.length > 0 && rawMaterials.map((rawMaterial, index) => {
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
                <span className={statPercentColor + "whitespace-nowrap"}>Available :</span>
                <span className={statPercentColor}>
                  {' '}{statQty}
                </span>
              </p>
              <p className="text-xs font-light text-blueGray-400 mt-1">
                <span className={capacityColor + "whitespace-nowrap"}>Production Capacity :</span>
                <span className={capacityColor}>
                  {' '}{capacity}
                </span>
              </p>
              {requiredQty !== 0 && <p className="text-xs font-light text-blueGray-400 mt-1">
                <span className={statPercentColor + "whitespace-nowrap"}>Required :</span>
                <span className={statrequiredColor}>
                  {' '}{requiredQty}
                </span>
              </p>}
            </div>
          </div>
        </div>
        <div className="relative w-auto flex flex-col justify-end items-center p-3">
          {requiredQty !== 0 && <div
              className={
                  " text-white text-sm p-3 text-center inline-flex items-center justify-center w-8 h-8 shadow-lg rounded-full " +
                  'bg-orange-500 pulse'
              }
          >
            {requiredQty}
          </div>}
          {capacity !== 0 && <div
              className={
                  "text-white mt-2 text-sm p-3 text-center inline-flex items-center justify-center w-10 h-10 shadow-lg rounded-full " +
                  capacityIconColor
              }
          >
            {capacity}
          </div>}
          <div
              className={
                  "text-white mt-2 text-sm p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
              }
          >
            {statQty}
          </div>
        </div>
      </div>
    </Link>
  );
}

FinishedProductCardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

FinishedProductCardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
