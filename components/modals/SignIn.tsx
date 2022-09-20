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
} from "@nextui-org/react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

function SignIn() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button
        light
        className="text-white"
        flat
        as={Link}
        auto
        onClick={handler}
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
            contentLeft={<AiOutlineMail fill="currentColor" />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="success"
            size="lg"
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
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignIn;
