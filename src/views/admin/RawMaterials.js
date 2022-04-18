import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import RawMaterialsTable from "../../components/Cards/RawMaterialsTable";

export default function RawMaterials() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <RawMaterialsTable />
        </div>
      </div>
    </>
  );
}
