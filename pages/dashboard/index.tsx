import React from "react";
import HistoryTable from "../../components/dashboard/HistoryTable";
import DashboardLayout from "../../components/layout/DashboardLayout";

function index() {
  return (
    <div className="">
      <HistoryTable />
    </div>
  );
}

index.PageLayout = DashboardLayout;
export default index;
