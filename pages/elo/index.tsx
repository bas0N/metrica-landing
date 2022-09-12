import React from "react";
import { Button } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";
import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Progress, Grid } from "@nextui-org/react";

function index() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      <h1 className="text-rose-400">siemka</h1>
      <Button className="text-rose-400 bg-cyan-600">Click me</Button>;
      <Button css={{ bg: "$green600" }}>Click me</Button>;
      <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Body>
          <Text>A hoverable card.</Text>
        </Card.Body>
      </Card>
      <Grid.Container xs={12} sm={6} gap={2}>
        <Grid>
          <Progress color="primary" value={75} />
        </Grid>
        <Grid>
          <Progress color="primary" value={55} />
        </Grid>
        <Grid>
          <Progress color="primary" value={35} />
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default index;
