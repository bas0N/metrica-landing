import { GetServerSidePropsContext } from "next";
import React from "react";
import HistoryTableMobile from "../../components/dashboard/HistoryTableMobile";
import { GetSurveysPaginated, Survey } from "../../types/survey";

function index() {
  return (
    <div className="h-screen w-full flex justify-center">
      <h1 className="text-3xl">company description page</h1>
    </div>
  );
}

export default index;
