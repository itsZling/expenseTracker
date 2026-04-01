import React, { useState, useEffect } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#BBDD22", "#FA2C35", "#FF6900", "#4FF936"];

const RecentIncomeWithChart = ({data, totalIncome}) => {

    const [chartData, setChartData] = useState([]);

    const prepareChartData = () => {
        const dataArr = data?.map((item) => ({
            name: item?.source,
            amount: item?.amount
        }));

        setChartData(dataArr);
    };

    useEffect(() => {
        prepareChartData();

        return () => {}
    }, [data]);

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg dark:text-white">Last 60 Days Income</h5>
            </div>

            <CustomPieChart 
              data={chartData} 
              label="Total Income"
              totalAmount={`$${totalIncome}`}
              showTextAnchor
              colors={COLORS}
            />
        </div>
    );
}

export default RecentIncomeWithChart;