import React from "react";
import { Button, Card, Col, Popover, Row, Text } from "@nextui-org/react";

function index() {
  return (
    <div className="flex flex-col  ">
      <h1 className="text-4xl font-bold mt-10">Description</h1>
      <div className="flex flex-col w-1/2 mt-6 mx-auto gap-8">
        <Card css={{ w: "100%", h: "400px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#9E9E9E"
              >
                Your day your way
              </Text>
              <Text h3 color="white">
                Your checklist for better sleep
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://clickup.com/landing/images/main/teams/product.png"
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={16}>
                  Get notified.
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="secondary">
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Notify Me
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Card css={{ w: "100%", h: "400px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#9E9E9E"
              >
                Your day your way
              </Text>
              <Text h3 color="white">
                Your checklist for better sleep
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://clickup.com/images/poster-images/videos/main/dashboard.png"
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={16}>
                  Get notified.
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="secondary">
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Notify Me
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Card css={{ w: "100%", h: "400px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#9E9E9E"
              >
                Your day your way
              </Text>
              <Text h3 color="white">
                Your checklist for better sleep
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://clickup.com/blog/wp-content/uploads/2021/04/image10-9.gif"
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={16}>
                  Get notified.
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Popover offset={30} placement="right">
                    <Popover.Trigger>
                      <Button auto bordered color="secondary">
                        "right"
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content className="w-64">
                      <Text css={{ p: "$10" }}>
                        This is the content of the popover. This is the content
                        of the popover. This is the content of the popover. This
                        is the content of the popover. This is the content of
                        the popover. This is the content of the popover.
                      </Text>
                    </Popover.Content>
                  </Popover>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default index;
