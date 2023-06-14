
import {
  Chart as Chartjs,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { groupBy } from "lodash";
import { useEffect, useState } from "react";

Chartjs.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);


const Barchat = ({ employees, departments }: any) => {


  const [clientInfo, setClientInfo] = useState([]);


  // const Name = groupBy(clientInfo, "client");
  const people: any = [];

  // Object?.entries(Name)?.forEach((item) =>
  //   people?.push(item[1]?.length)
  // );

  // filters number of employees in each department
  // useEffect(() => {
  //   const newData: any = [];
  //   departments?.forEach((abc: any) => {
  //     employees?.forEach((xyz: any) => {
  //       const obj = abc?._id === xyz?.department?._id;
  //       if (obj) {
  //         newData.push({
  //           tickets: departments?._id?.filter((jkl: any) => jkl?._id === xyz?._id).length, client: xyz?.department?.name,
  //         });
  //       }
  //     });
  //   });
  //   setClientInfo(newData);
  // }, [departments, employees]);
  // data: people?.splice(0, 9),
  // labels: Object?.keys(Name)?.splice(0, 9),

  const data = {
    labels: ["laptop", "mouse", "keyboard", "Mac", "HP", "Dell"],
    datasets: [
      {
        label: "Nummber of Inventories!",
        data: [20, 40, 10, 100, 50, 70],
        backgroundColor: "#7D249C",
        barPercentage: 0.2,
      },
    ],
  };
  return (
    <div
      className="chat-container"
      style={{ height: "100%", width: "100%", borderRadius: "50px" }}
    >

      <Bar
        data={data}
        options={{ maintainAspectRatio: false }}
      />

    </div>
  );
};

export default Barchat;
