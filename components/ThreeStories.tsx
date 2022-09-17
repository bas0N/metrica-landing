import { Card, Link, Text, Spacer } from "@nextui-org/react";
import React from "react";

function ThreeStories() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:justify-around  ">
      <Card isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Header>
          <Text className="font-bold text-3xl">Feature #1</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Spacer y={1} />

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Spacer y={2} />
          <Link color="success" href="#">
            Check something
          </Link>
        </Card.Body>
      </Card>{" "}
      <Card isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Header>
          <Text className="font-bold text-3xl">Feature #2</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Spacer y={1} />

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Spacer y={2} />
          <Link color="success" href="#">
            Check something
          </Link>
        </Card.Body>
      </Card>{" "}
      <Card isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Header>
          <Text className="font-bold text-3xl">Feature #3</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Spacer y={1} />

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Spacer y={2} />
          <Link color="success" href="#">
            Check something
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ThreeStories;
