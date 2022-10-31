import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import HistoryTable from "../../components/dashboard/HistoryTable";
import DashboardLayout from "../../components/layout/DashboardLayout";

function index() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user]);
  return (
    <div className="">
      <HistoryTable />
    </div>
  );
}

index.PageLayout = DashboardLayout;
export default index;
