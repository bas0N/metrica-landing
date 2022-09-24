import React from "react";
import HistoryTable from "../../components/dashboard/HistoryTable";
import Link from "next/link";
type Props = {
  children: React.ReactNode;
};
function DashboardLayout({ children }: Props) {
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="bg-neutral-900   flex flex-col">
        <Link href="/dashboard/">
          <div className="cursor-pointer bg-gray-500 hover:bg-gray-700  px-2 py-4 rounded-lg">
            Manage Forms
          </div>
        </Link>

        <Link href="/dashboard/send-form">
          <div className="cursor-pointer bg-gray-500 hover:bg-gray-700 px-2 py-4 rounded-lg">
            Send Form
          </div>
        </Link>
        <Link href="/dashboard/manage-recruitments">
          <div className="cursor-pointer bg-gray-500 hover:bg-gray-700 px-2 py-4 rounded-lg ">
            Manage Recruitments
          </div>
        </Link>
      </div>
      <div className="col-span-4  flex flex-col justify-around">{children}</div>
    </div>
  );
}

export default DashboardLayout;
