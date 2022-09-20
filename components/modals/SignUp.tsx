import React, { useState } from "react";
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
  Progress,
  Dropdown,
} from "@nextui-org/react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

function SignUp() {
  const [selected2, setSelected2] = useState<any>(new Set(["text"]));

  const selectedValue2 = React.useMemo(
    () => Array.from(selected2).join(", ").replaceAll("_", " "),
    [selected2]
  );
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [selected, setSelected] = useState<any>(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  return (
    <div>
      <Button light color="success" flat as={Link} auto onClick={handler}>
        Sign up
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
            Sign up to
            <Text b size={18}>
              STACK MET
            </Text>
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
          <Input
            clearable
            bordered
            fullWidth
            color="success"
            size="lg"
            placeholder="Password"
            contentLeft={<RiLockPasswordLine fill="currentColor" />}
          />
          <Checkbox.Group
            label="Select cities"
            orientation="horizontal"
            color="success"
            defaultValue={["buenos-aires"]}
          >
            <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
            <Checkbox value="sydney">Sydney</Checkbox>
            <Checkbox value="london">London</Checkbox>
          </Checkbox.Group>
          <Dropdown>
            <Dropdown.Button
              className="self-start"
              flat
              color="success"
              css={{ tt: "capitalize" }}
            >
              {selectedValue2}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label="Multiple selection actions"
              color="success"
              disallowEmptySelection
              selectionMode="multiple"
              selectedKeys={selected}
              onSelectionChange={setSelected2}
            >
              <Dropdown.Item key="text">Text</Dropdown.Item>
              <Dropdown.Item key="number">Number</Dropdown.Item>
              <Dropdown.Item key="date">Date</Dropdown.Item>
              <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
              <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Input
            clearable
            bordered
            fullWidth
            color="success"
            size="lg"
            placeholder="Password"
            contentLeft={<RiLockPasswordLine fill="currentColor" />}
          />
          <Dropdown>
            <Dropdown.Button
              className="self-start"
              flat
              color="success"
              css={{ tt: "capitalize" }}
            >
              {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label="Single selection actions"
              color="success"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <Dropdown.Item key="text">Text</Dropdown.Item>
              <Dropdown.Item key="number">Number</Dropdown.Item>
              <Dropdown.Item key="date">Date</Dropdown.Item>
              <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
              <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Input
            clearable
            bordered
            fullWidth
            color="success"
            size="lg"
            placeholder="Password"
            contentLeft={<RiLockPasswordLine fill="currentColor" />}
          />
          <Progress color="success" value={75} />
          <Row justify="space-between">
            <Checkbox color="success">
              <Text size={14}>Remember me</Text>
            </Checkbox>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignUp;
