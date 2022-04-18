import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import RawMaterialsTable from "../../components/Cards/RawMaterialsTable";
import FinishedProductsTable from "../../components/Cards/FinishedProductsTable";

export default function FinishedProducts() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <FinishedProductsTable />
        </div>
      </div>
    </>
  );
}
