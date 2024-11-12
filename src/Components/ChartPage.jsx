import React from "react";
import BarChart from "../Charts/BarChart";
import OrderItems from "./Orderstatus/OrderItems";

const ChartPage = () => {
  
  return (
    <>
      <div className="w-full flex  flex-wrap">
       
        <BarChart
          type={"bar"}
          chartTitle={"Daily average orders"}
          progressBarWidth={90}
          amount={'1,226.71k'}
          barColor={'bg-primary'}
          icon={'order-icon'}
          iconBg={'bg-primary'}
          badgeBg={'bg-success'}
          data = {[21,21,33,43]}
        />
        <BarChart
          type={"line"}
          chartTitle={"Active users"}
          progressBarWidth={40}
          amount={'1,226.71k'}
          barColor={'bg-dark'}
          icon={'user-icon'}
          iconBg={'bg-dark'}
          badgeBg={'bg-danger'}
        />
        <BarChart
          type={"bar"}
          chartTitle={"Booked Revenue"}
          progressBarWidth={60}
          barColor={'bg-danger'}
          amount={'12,029.71k'}
          icon={'clipboard-icon'}
          iconBg={'bg-danger'}
          badgeBg={'bg-success'}
          data = {[32,67,87,45,89,150]}
        />

      </div>

      <OrderItems />
    </>
  );
};  

export default ChartPage;
