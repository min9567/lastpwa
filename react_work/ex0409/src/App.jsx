import "./App.css";
// import Button from "./components/Button";
import { Button } from "antd";

import { Card } from "./components/Card";
import ComboBox from "./components/ComboBox";

import Stack from "@mui/material/Stack";
import MButton from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import BasicRating from "./components/BasicRating";
import { FieldTimeOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function App() {
  return (
    <>
      <div>
        <Divider></Divider>
        <FieldTimeOutlined /><br />
        <Button>antd</Button>

        <BasicRating></BasicRating>
        <Checkbox defaultChecked />

        <Stack spacing={2} direction="row">
          <MButton variant="text">안녕</MButton>
          <MButton variant="contained">졸려</MButton>
          <MButton variant="outlined">바이</MButton>
        </Stack>
      </div>
      <ComboBox></ComboBox>
      <Card>TEST</Card>
      <Card primary={true}>TEST</Card>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
