import { Collapse, Text } from "@nextui-org/react";
import React from "react";

function Faq() {
  return (
    <div className="my-16">
      <h1 className="text-5xl font-extrabold ml-8">FAQ</h1>
      <Collapse.Group splitted>
        <Collapse className="font-bold text-xl" title="What is Metrica?">
          <Text>
            Metrica is a software solution designed to streamline and automate
            the recruitment process for IT roles. It helps HR personnel to
            efficiently manage the screening, tracking, and assessment of IT job
            applicants.
          </Text>
        </Collapse>
        <Collapse
          className="font-bold text-xl"
          title="How does the Metrica help save time?"
        >
          <Text>
            Metrica automates time-consuming tasks such as resume screening and
            candidate tracking, freeing up HR personnel to focus on more
            critical aspects of the recruitment process such as interviewing and
            assessing candidates.
          </Text>
        </Collapse>
        <Collapse
          className="font-bold text-xl"
          title="Can I customize the questionnaires for different IT positions?"
        >
          <Text>
            Yes, Metrica allows you to create custom questionnaires for each IT
            position. You can tailor the questionnaires to test the specific
            skills and knowledge required for each role, ensuring that you only
            receive applications from truly qualified candidates.
          </Text>
        </Collapse>
        <Collapse
          className="font-bold text-xl"
          title="How does the recruitment dashboard help with the recruitment process?"
        >
          <Text>
            The recruitment dashboard summarizes all the answers to the
            questionnaires in one place, making it easy for HR personnel to
            compare the results of all currently running recruitment processes
            and identify the most suitable candidates for each role. The
            dashboard also provides a bird's-eye view of your recruitment
            efforts, allowing you to track the progress of each process and make
            informed hiring decisions.
          </Text>
        </Collapse>
        <Collapse
          className="font-bold text-xl"
          title="Is Metrica user-friendly?"
        >
          <Text>
            Yes, Metrica is designed with a user-friendly interface, making it
            easy for HR personnel to manage the recruitment process efficiently.
            The questionnaires are also designed to be simple and intuitive,
            ensuring that candidates have a positive experience while taking
            them.
          </Text>
        </Collapse>
      </Collapse.Group>
    </div>
  );
}

export default Faq;
