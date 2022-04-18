import React from "react";
import PropTypes from "prop-types";

export default function RawMaterialCardStats({
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
    required,
}) {
  return (
    <>
      <div className="relative my-4 cursor-pointer flex flex-col min-w-0 break-words bg-white rounded-lg xl:mb-0 shadow-lg">
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
                {statTitle}
              </span>
              <h5 className="text-blueGray-400 uppercase font-normal text-xs">
                {statSubtitle}
              </h5>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center mt-5">
            <div className={'flex flex-col'}>
              <p className="text-xs font-light text-blueGray-400 mt-1">
                <span className={statPercentColor + "whitespace-nowrap"}>Available :</span>
                <span className={statPercentColor}>
              {' '}{statPercent}
            </span>
              </p>
              {required !== 0 && <p className="text-xs font-light text-blueGray-400 mt-1">
                <span className={statPercentColor + "whitespace-nowrap"}>Required :</span>
                <span className={statrequiredColor}>
                  {' '}{required}
                </span>
              </p>}
            </div>
            <div className="relative w-auto flex-initial">
                {required !== 0 && <div
                  className={
                      "text-white text-sm p-3 text-center inline-flex items-center justify-center w-8 h-8 shadow-lg rounded-full " +
                      'bg-orange-500'
                  }
              >
                {required}
              </div>}
              <div
                  className={
                      "text-white ml-2 text-sm p-3 text-center inline-flex items-center justify-center w-10 h-10 shadow-lg rounded-full " +
                      statIconColor
                  }
              >
                {statQty}
              </div>
            </div>
          </div>
          {/*<p className="text-sm text-blueGray-400 mt-4">*/}
          {/*  <span className={statPercentColor + " mr-2"}>*/}
          {/*    <i*/}
          {/*      className={*/}
          {/*        statArrow === "up"*/}
          {/*          ? "fas fa-arrow-up"*/}
          {/*          : statArrow === "down"*/}
          {/*          ? "fas fa-arrow-down"*/}
          {/*          : ""*/}
          {/*      }*/}
          {/*    ></i>{" "}*/}
          {/*    {statPercent}%*/}
          {/*  </span>*/}
          {/*  <span className="whitespace-nowrap">{statDescripiron}</span>*/}
          {/*</p>*/}
          {/*<p className="text-sm text-blueGray-400 mt-2">*/}
          {/*  <span className="whitespace-nowrap">Available qty :</span>*/}
          {/*  <span className={statPercentColor + " mr-2"}>*/}
          {/*    {' '}{statPercent}*/}
          {/*  </span>*/}
          {/*</p>*/}
        </div>
      </div>
    </>
  );
}

RawMaterialCardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

RawMaterialCardStats.propTypes = {
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
