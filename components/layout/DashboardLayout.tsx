import React, { MouseEventHandler, useState } from "react";
import HistoryTable from "../../components/dashboard/HistoryTable";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};
function DashboardLayout({ children }: Props) {
  const [chosen, setChosen] = useState(0);
  const router = useRouter();

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="bg-inherit shadow-2xl border-black  flex flex-col">
        <Button.Group
          size="xl"
          vertical
          className="bg-green-400 text-inherit p-0 m-0 rounded-t-none"
        >
          <Button
            className={`text-black border-0 hover:bg-green-500 ${
              chosen === 1 ? "bg-green-500" : ""
            }`}
            onPress={() => {
              router.push("/dashboard");
              setChosen(1);
            }}
          >
            Manage Forms
          </Button>
          <Button
            className={`text-black border-0 hover:bg-green-500 ${
              chosen === 2 ? "bg-green-500" : ""
            }`}
            onPress={() => {
              router.push("/dashboard/send-form");
              setChosen(2);
            }}
          >
            Send Form
          </Button>
          <Button
            className={`text-black border-0 hover:bg-green-500 ${
              chosen === 3 ? "bg-green-500" : ""
            }`}
            onPress={() => {
              router.push("/dashboard/manage-recruitments");
              setChosen(3);
            }}
          >
            Manage Recruitments
          </Button>
        </Button.Group>
      </div>
      <div className="col-span-4  flex flex-col justify-around">{children}</div>
    </div>
  );
}

export default DashboardLayout;
