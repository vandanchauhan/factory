import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import HeaderStats from "../../components/Headers/HeaderStats";
import CardStats from "../../components/Cards/CardStats";
import RawMaterialCardStats from "../../components/Cards/RawMaterialCardStats";
import FinishedProductCardStats from "../../components/Cards/FinishedProductCardStats";
import {finishedProductsData, rawMaterialData} from "../../assets/data";

const renderRawMaterialsSection = () => {
    return <div className={'mb-8'}>
        <div className={'mb-4 pl-4'}>
            <h5 className="text-blueGray-600 uppercase font-semibold text-lg font-light">
                Most consumed raw materials <i className={'far fa-arrow-alt-circle-down ml-2 w-15'}></i>
            </h5>
            <h5 className="text-blueGray-400 uppercase font-semibold text-xs font-light">
                this week
            </h5>
        </div>
        <div className="flex flex-wrap">
            {rawMaterialData.map((itemData, index) => {
                return <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <RawMaterialCardStats
                        statTitle={itemData.name}
                        statSubtitle={itemData.type}
                        statArrow="up"
                        statPercent={itemData.qty}
                        statPercentColor="text-emerald-500"
                        statrequiredColor="text-orange-500"
                        statDescripiron="Since last month"
                        statIconName="far fa-chart-bar"
                        statIconColor="bg-emerald-500"
                        statQty={itemData.qty}
                        units={itemData.units}
                        required={itemData.required}
                    /></div>
            })}
        </div>
    </div>
}

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

const getProductionCapacity = (itemData) => {
    const rawMaterials = itemData.rawMaterials;
    let productionCapacity;
    rawMaterialData.forEach((item, index) => {
        rawMaterials.forEach((rawMaterial, index) => {
            if (rawMaterial.id === item.id) {
                console.log('raw material found : ' + item.id + ',' + rawMaterial.id);
                if (index === 0) {
                    productionCapacity = Math.abs(item.qty / rawMaterial.qtyConsumed);
                    console.log('Production capacity : ' + productionCapacity + ' initial ' + item.id);
                } else {
                    const bla = productionCapacity > Math.abs(item.qty / rawMaterial.qtyConsumed);
                    if (productionCapacity > Math.abs(item.qty / rawMaterial.qtyConsumed)) {
                        console.log('Production capacity : ' + productionCapacity + ' altered ' + item.id);
                        productionCapacity = Math.abs(item.qty / rawMaterial.qtyConsumed);
                    }
                }
            }
        });
    });
    return parseInt(productionCapacity);
}

const renderFinishedProductsSection = () => {
    return <div className={'mb-8'}>
        <div className={'mb-4 pl-4'}>
            <h5 className="text-blueGray-600 uppercase font-semibold text-lg font-light">
                Most sold Products <i className={'far fa-arrow-alt-circle-down ml-2 w-15'}></i>
            </h5>
            <h5 className="text-blueGray-400 uppercase font-semibold text-xs font-light">
                this week
            </h5>
        </div>
        <div className="flex flex-wrap">
            {finishedProductsData.map((itemData, index) => {
                return <div className="w-full lg:w-3/12 xl:w-4/12 px-4">
                    <FinishedProductCardStats
                        statTitle={itemData.name}
                        statSubtitle={itemData.code}
                        statArrow="up"
                        statPercent={itemData.qty}
                        statPercentColor="text-emerald-500"
                        statrequiredColor="text-orange-500"
                        statDescripiron="Since last month"
                        statIconName="far fa-chart-bar"
                        statIconColor="bg-emerald-500"
                        statQty={itemData.qty}
                        units={itemData.units}
                        rawMaterials={getRawMaterialData(itemData.rawMaterials)}
                        statProductionType={itemData.productionType}
                        capacityIconColor="bg-blue"
                        capacityColor="text-blue-500"
                        capacity={getProductionCapacity(itemData)}
                        id={itemData.code}
                        requiredQty={itemData.required}
                        restockNeeded={getProductionCapacity(itemData) + itemData.qty < itemData.required}
                        goodToGo={getProductionCapacity(itemData) + itemData.qty > itemData.required}
                    /></div>
            })}
        </div>
    </div>
}

export default function Dashboard() {
    return (
        <>
            {renderRawMaterialsSection()}
            <hr className="mb-4 border-b-1 border-blueGray-200"/>
            {renderFinishedProductsSection()}
            {/*<div className="flex flex-wrap mt-10">*/}
            {/*    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">*/}
            {/*        <CardLineChart/>*/}
            {/*    </div>*/}
            {/*    <div className="w-full xl:w-4/12 px-4">*/}
            {/*        <CardBarChart/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="flex flex-wrap mt-4">*/}
            {/*    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">*/}
            {/*        <CardPageVisits/>*/}
            {/*    </div>*/}
            {/*    <div className="w-full xl:w-4/12 px-4">*/}
            {/*        <CardSocialTraffic/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}
