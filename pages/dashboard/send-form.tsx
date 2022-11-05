import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import SendFormToApplicant from "../../components/dashboard/SendForm";
function SendForm() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user]);
  if (isLoading) {
    return <div></div>;
  } else if (user) {
    return <SendFormToApplicant />;
  } else if (!user) {
    router.replace("/");
  }
}
SendForm.PageLayout = DashboardLayout;
export default SendForm;
