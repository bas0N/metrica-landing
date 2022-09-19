import React from "react";
import { Logo } from "../../assets/Logo";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Radio,
  Avatar,
  Dropdown,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/router";

function NavbarComponent() {
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
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Logo />
        <Text b color="inherit" hideIn="xs">
          STACK METRICS
        </Text>
      </Navbar.Brand>
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
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} color="success" href="#">
              Sign Up
            </Button>
          </Navbar.Item>
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
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
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
