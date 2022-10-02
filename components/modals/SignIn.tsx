import React from "react";
import {
  Row,
  Button,
  Card,
  Checkbox,
  Input,
  Modal,
  Spacer,
  Text,
  Link,
  FormElement,
  useInput,
} from "@nextui-org/react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";

function SignIn() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<FormElement>) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePasswordChange = (e: ChangeEvent<FormElement>) => {
    setPassword(e.target.value);
    console.log(password);
  };
  return (
    <div>
      <Button
        light
        className="text-white"
        flat
        as={Link}
        auto
        onPress={handler}
      >
        Sign in
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Sign in to
            <Text b size={18}>{`STACK MET`}</Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="success"
            size="lg"
            placeholder="Email"
            aria-label="login"
            onChange={handleEmailChange}
            contentLeft={<AiOutlineMail fill="currentColor" />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="success"
            size="lg"
            onChange={handlePasswordChange}
            placeholder="Password"
            contentLeft={<RiLockPasswordLine fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox color="success">
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignIn;
