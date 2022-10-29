import React, { useState } from "react";
import { Logo } from "../../assets/Logo";
import {
  Navbar,
  Button,
  Text,
  Card,
  Radio,
  Avatar,
  Dropdown,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset, login } from "../../features/auth/authSlice";
import { Link as UiLink } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/router";
import SignIn from "../modals/SignIn";
import SignUp from "../modals/SignUp";
import Link from "next/link";
import { AppDispatch } from "../../app/store";
import { useEffect } from "react";
function NavbarComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const [userState, setUserState] = useState("");
  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    setUserState(user);
  }, [user]);
  const router = useRouter();

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push("/");
  };

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Link href="/">
        <Navbar.Brand
          className="cursor-pointer flex items-center"
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Logo />
          <Text className="cursor-pointer ml-3" b color="inherit" hideIn="xs">
            STACK METRICS
          </Text>
        </Navbar.Brand>
      </Link>

      <Navbar.Content activeColor="success" hideIn="xs" variant="underline">
        <Navbar.Link isActive={router.pathname === "/"} href="/">
          Main
        </Navbar.Link>
        <Navbar.Link isActive={router.pathname === "/offer"} href="/offer">
          Offer
        </Navbar.Link>
        <Navbar.Link isActive={router.pathname === "/pricing"} href="/pricing">
          Pricing
        </Navbar.Link>
        <Navbar.Link isActive={router.pathname === "/company"} href="/company">
          Company
        </Navbar.Link>
        <Navbar.Link isActive={router.pathname === "/faq"} href="/faq">
          FAQ
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Navbar.Content>
          <Switch
            color="success"
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
          {userState ? (
            <Button onClick={onLogout} bordered color="success" auto>
              Logout
            </Button>
          ) : (
            <>
              <Navbar.Item>
                {/*  <SignIn /> */}
                <Button
                  onClick={() => {
                    router.push("/api/auth/login");
                  }}
                >
                  Sign In
                </Button>
              </Navbar.Item>
              <Navbar.Item>
                {/*  <SignIn /> */}
                <Button
                  onClick={() => {
                    router.push("/api/auth/logout");
                  }}
                >
                  Logout
                </Button>
              </Navbar.Item>

              <Navbar.Item>
                <SignUp />
              </Navbar.Item>
            </>
          )}
        </Navbar.Content>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="warning"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <UiLink
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </UiLink>
          </Navbar.CollapseItem>
        ))}
        <Navbar.CollapseItem>
          <Switch
            color="success"
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
