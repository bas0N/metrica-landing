import React, { useEffect, useState } from "react";
import { Button, Card, Col, Popover, Row, Text } from "@nextui-org/react";

function index() {
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const Mobile = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024) {
        return true;
      }
      return false;
    }
    return false;
  };
  useEffect(() => {
    setWidth(window.innerWidth - 20);
    setIsMobile(Mobile());
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
          console.log("is intersecting");
          entry.target.classList.add("show-element");
        } else {
          console.log("is not intersecting");

          entry.target.classList.remove("show-element");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hide-element");
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  });

  return (
    <div className="flex flex-col px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <Text className="text-5xl sm:text-7xl font-extrabold  mt-10">
        How does it work?
      </Text>

      <div className="flex flex-col  mt-20  gap-8 ">
        <div className="flex flex-col sm:flex-row gap-10 hide-element ">
          <div className={`flex flex-col  ${isMobile ? "w-full" : "w-1/2"}`}>
            <Text className="text-4xl sm:text-5xl font-semibold">
              Manage your recruitments
            </Text>
            <Text className="mt-8">
              Our recruitment management feature is designed to be flexible and
              customizable, so you can tailor the hiring process to meet your
              specific needs. Whether you are a small startup or a large
              multinational corporation, our platform is designed to support
              your recruitment goals and help you find the best candidates for
              your open positions.
            </Text>
          </div>
          <Card
            css={{
              w: isMobile ? "100%" : "50%",
              h: isMobile ? "200px" : "300px",
            }}
          >
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#9E9E9E"
                ></Text>
                <Text h3 color="white"></Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="https://drive.google.com/uc?id=1LCPbCJmuavjFABuITOrSKyNAlBdGlcWO"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Relaxing app background"
              />
            </Card.Body>
          </Card>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 mt-20 hide-element">
          <div className={`flex flex-col  ${isMobile ? "w-full" : "w-1/2"}`}>
            <Text className="text-4xl sm:text-5xl font-semibold">
              Add your processes
            </Text>

            <Text className="mt-8">
              Metrica is designed to make the recruitment process smoother and
              more efficient for IT companies. By allowing adding recruitments
              processes feature, our tool offers a flexible and customizable
              solution for managing your recruitment process. This feature
              allows you to streamline your recruitment process, saving time and
              effort for you and your team.
            </Text>
          </div>
          <Card
            css={{
              w: isMobile ? "100%" : "50%",
              h: isMobile ? "200px" : "300px",
            }}
          >
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="https://drive.google.com/uc?id=1hhU4x1GEWp5OO5bOQhiea_I7ba2qMCVy"
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
                    Manage your recruitments
                  </Text>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button flat auto rounded color="success">
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Check out
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </div>

        <div className="mx-auto mt-12">
          <iframe
            width={isMobile ? width - 20 : 600}
            height={isMobile ? width * (9 / 16) : 600 * (9 / 16)}
            src={`https://www.youtube.com/embed/sQIx6YeMRR8`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div className="flex flex-col my-12 hide-element">
          <Text className="text-4xl sm:text-5xl font-semibold mb-12">
            Discover more
          </Text>
          <Text className="text-xl mb-8 text-center	">
            The questionnaire is designed to be user-friendly and intuitive, so
            candidates can complete it quickly and easily. The platform also
            provides instant validation to ensure that the information provided
            is accurate and up-to-date.
          </Text>
          <Card
            css={{
              w: "100%",
              h: isMobile ? "200px" : "700px",
            }}
          >
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#9E9E9E"
                >
                  Filling the form{" "}
                </Text>
                <Text h3 color="white">
                  Metrica recruitment questionare
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="https://drive.google.com/uc?id=1QMA5ULcDBkqv9mJyQGYvgoKVqGGoEX7f"
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
                    Filling the form
                  </Text>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Popover offset={30} placement="right">
                      <Popover.Trigger>
                        <Button auto bordered color="success">
                          Check out
                        </Button>
                      </Popover.Trigger>
                      <Popover.Content className="w-64">
                        <Text css={{ p: "$10" }}>
                          Description of filling the form process
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
