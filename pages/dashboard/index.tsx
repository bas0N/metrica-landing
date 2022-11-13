import { useUser } from "@auth0/nextjs-auth0";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import HistoryTable from "../../components/dashboard/HistoryTable";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { Survey } from "../../types/survey";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if ("appSession" in context.req.cookies) {
    try {
      const res = await fetch(`http://localhost:3001/survey/getSurveys`);
      const surveys: Array<Survey> = await res.json();
      return { props: { surveys } };
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
function index({ surveys }: { surveys: Survey[] }) {
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
        <HistoryTable surveys={surveys} />
      </div>
    );
  } else if (!user) {
    router.replace("/");
  }
}

index.PageLayout = DashboardLayout;
export default index;
