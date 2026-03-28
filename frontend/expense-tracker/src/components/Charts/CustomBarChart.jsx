import React from "react";
import {
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    Cell,
    ResponsiveContainer } from "recharts";
import CustomTooltip from "./CustomTooltip";

const CustomBarChart = ({data}) => {

    const xAxisDataKey = data?.[0]?.month
        ? "month"
        : data?.[0]?.category
            ? "category"
            : "source";

    //Function to alternate colors
    const getBarColor = (index) => {
        return index % 2 === 0 ? "#875FC5" : "#CFBEFB";
    };

    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
                    <p className="text-xs font-semibold text-purple-800 mb-1">{payload[0].payload.category}</p>
                    <p className="text-sm text-gray 600">
                        Amount: <span className="text-sm font-medium text-gray-900">${payload[0].payload.amount}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
    <div className="bg-white mt-6">
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid stroke="none" />

                <XAxis dataKey={xAxisDataKey} tick={{ fill: '#555', fontSize: 12 }} stroke="none"/>
                <YAxis tick={{ fill: '#555', fontSize: 12 }} stroke="none"/>

                <Tooltip content={CustomTooltip} />
                <Bar 
                 dataKey="amount" 
                 fill="#FF8042" 
                 radius={[10, 10, 0, 0]} 
                 activDot={{ r: 8, fill: "yellow" }}
                 activeStyle={{ fill: "green" }}
                >
                {data.map((entry, index) => (
                    <Cell key={index} fill={getBarColor(index)} />
                ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
    );
};

export default CustomBarChart;