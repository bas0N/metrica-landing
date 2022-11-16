import { GetServerSidePropsContext } from "next";
import React from "react";
import HistoryTableMobile from "../../components/dashboard/HistoryTableMobile";
import { GetSurveysPaginated, Survey } from "../../types/survey";
export async function getServerSideProps(context: GetServerSidePropsContext) {
  if ("appSession" in context.req.cookies) {
    try {
      //const res = await fetch(`http://localhost:3001/survey/getSurveys`);
      //const surveys: Array<Survey> = await res.json();
      const res = await fetch(
        `http://localhost:3001/survey/getSurveysPaginated/1`
      );
      const { surveys, pagesAvailable, totalItems }: GetSurveysPaginated =
        await res.json();
      return { props: { surveys, pagesAvailable, totalItems } };
    } catch (err) {
      console.log(err);
    }

    return { props: {} };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }
}
function index({
  surveys,
  pagesAvailable,
  totalItems,
}: {
  surveys: Survey[];
  pagesAvailable: number;
  totalItems: number;
}) {
  return (
    <div className="h-screen">
      <HistoryTableMobile
        surveys={surveys}
        pagesAvailable={pagesAvailable}
        totalItems={totalItems}
      />
    </div>
  );
}

export default index;
