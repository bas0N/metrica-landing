import { Card, Link, Text, Spacer } from "@nextui-org/react";
import React from "react";

function ThreeStories() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:justify-around  ">
      <Card isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Header>
          <Text className="font-bold text-3xl">Customizable Forms</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>
            With the ability to send customized questionnaires for different
            technical positions, our IT recruitment tool allows you to tailor
            your screening process to your specific needs.
          </Text>
          <Spacer y={1} />

          <Text>
            Whether you're hiring for a software developer, network engineer, or
            any other IT role, you can create questionnaires that test the
            specific skills and knowledge required for each position.
          </Text>
          <Spacer y={2} />
          <Link color="success" href="#">
            Check it
          </Link>
        </Card.Body>
      </Card>{" "}
      <Card isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Header>
          <Text className="font-bold text-3xl">
            Simplicity Meets Efficiency
          </Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>
            Our questionnaires are designed to be simple and intuitive. We use
            vivid icons to present the technologies being tested, helping
            candidates quickly identify their areas of expertise and providing a
            more engaging experience.
          </Text>
          <Spacer y={1} />

          <Text>
            Additionally, the straightforward format of the questionnaires saves
            time for both HR personnel and candidates, ensuring an efficient
            screening process.
          </Text>
          <Spacer y={2} />
          <Link color="success" href="#">
            Check it
          </Link>
        </Card.Body>
      </Card>{" "}
      <Card isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Header>
          <Text className="font-bold text-3xl">Convenient Dashboard</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>
            With our recruitment dashboard, you can see all the answers to your
            questionnaires in one place. This allows you to easily compare the
            results of all currently running recruitment processes and identify
            the most suitable candidates for each role.
          </Text>
          <Spacer y={1} />

          <Text>
            Say goodbye to manual data tracking and hello to a more efficient
            recruitment process with our convenient dashboard.
          </Text>
          <Spacer y={2} />
          <Link color="success" href="#">
            Check it
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ThreeStories;
