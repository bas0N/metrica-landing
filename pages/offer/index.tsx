import React from "react";
import { Button, Card, Col, Popover, Row, Text } from "@nextui-org/react";

function index() {
  return (
    <div className="flex flex-col  ">
      <Text className="text-7xl  mt-10">How does it work?</Text>
      <div className="flex flex-col  mt-12 mx-auto gap-8">
        <div className="flex gap-10">
          <Card css={{ w: "50%", h: "300px" }}>
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
                borderTop:
                  "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
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
          <div className="flex flex-col  w-1/2">
            <Text className="text-5xl font-bold">Add your recruitment</Text>
            <Text className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col  w-1/2">
            <Text className="text-5xl font-bold"> Tell us what you need</Text>

            <Text className="mt-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </Text>
          </div>
          <Card css={{ w: "50%", h: "300px" }}>
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
                borderTop:
                  "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
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
        </div>

        <div className="mx-auto">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/sQIx6YeMRR8`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div className="flex flex-col">
          <Text className="text-5xl font-bold mb-12">
            Tell us what you need
          </Text>
          <Text className="text-xl mb-8">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </Text>
          <Card css={{ w: "100%", h: "700px" }}>
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
                borderTop:
                  "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
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
                          right
                        </Button>
                      </Popover.Trigger>
                      <Popover.Content className="w-64">
                        <Text css={{ p: "$10" }}>
                          This is the content of the popover. This is the
                          content of the popover. This is the content of the
                          popover. This is the content of the popover. This is
                          the content of the popover. This is the content of the
                          popover.
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
    </div>
  );
}

export default index;
