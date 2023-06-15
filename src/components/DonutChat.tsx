import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement } from 'chart.js'



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};



const DonutChat = ({ employees }: any) => {


  const [male, setMale] = React.useState<any>([]);
  const [female, setFemale] = React.useState<any>([]);


  // useEffect(() => {
  //   if (employees) {
  //     const result = employees?.filter((object: any) => {
  //       // @ts-ignore
  //       return JSON?.stringify(object)?.toString()?.includes("male");
  //     });
  //     setMale(result);
  //   }

  // }, [employees]);
  // useEffect(() => {
  //   if (employees) {
  //     const result = employees?.filter((object: any) => {
  //       // @ts-ignore
  //       return JSON?.stringify(object)?.toString()?.includes("female");
  //     });
  //     setFemale(result);
  //   }

  // }, [employees]);


  const data = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        label: "Inventorys",
        data: [45, 55],
        backgroundColor: [
          "#7D249C",
          "#e4b8f3",
        ],
        borderColor: [
          "#7D249C",
          "#e4b8f3",
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div
      className="chat-container-"
      style={{ height: "100%", width: "100%" }}
    >
      <Doughnut
        data={data}
        height={500}
        width="100%"
        options={{ maintainAspectRatio: false }}
      />

    </div>
  );
}



export default DonutChat;
