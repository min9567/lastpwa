import React, { useState } from "react";
import { Line } from "@ant-design/plots";

const MyChart = () => {
    const [data, setData] = React.useState([
        {
          date: "2023-01-01",
          value: 10,
        },
        {
          date: "2023-01-02",
          value: 20,
        },
        {
          date: "2023-01-03",
          value: 30,
        },
        {
          date: "2023-01-04",
          value: 40,
        },
        {
          date: "2023-01-05",
          value: 50,
        },
      ]);
  
    const lineConfig = {
    data,
    xField: "date",
    yField: "value",
  };

  const changeDate = () => {
    
  }

  return (
    <>
      <div>MyChart</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <div style={{ width: "70%" }}>
          <Line {...lineConfig} />
        </div>
        <div style={{width: "30%"}}>
            <Button>버튼</Button>
        </div>
      </div>
    </>
  );
};

export default MyChart;
