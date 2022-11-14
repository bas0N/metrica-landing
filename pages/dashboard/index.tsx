import { useUser } from "@auth0/nextjs-auth0";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import HistoryTable from "../../components/dashboard/HistoryTable";
import DashboardLayout from "../../components/layout/DashboardLayout";
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
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  // useEffect(() => {
  //   console.log(user);

  //   if (!user) {
  //     console.log("USER DOES NIT EXIST");
  //     router.replace("/");
  //   }
  // }, []);
  if (isLoading) {
    return <div></div>;
  } else if (user) {
    return (
      <div className="">
        <HistoryTable
          surveys={surveys}
          pagesAvailable={pagesAvailable}
          totalItems={totalItems}
        />
      </div>
    );
  } else if (!user) {
    router.replace("/");
  }
}

index.PageLayout = DashboardLayout;
export default index;
