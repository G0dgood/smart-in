
import { CSVLink } from "react-csv";
import moment from "moment";

import { AiOutlineDownload } from "react-icons/ai";
import { Button } from "@mui/material";



const EmployeesDownloader = ({ data }: any) => {



  const headers = [
    { label: "System Name", key: "laptopName" },
    { label: "Laptop Status", key: "laptopStatus" },
    { label: "Serial Number", key: "employment_date" },
    { label: "Model Name", key: "modelName" },
    { label: "Previous User", key: "previousUser " },
    { label: "Current User", key: "currentUser " },
    { label: "Serial Number", key: "serialNumber " },
    { label: "Ram Size", key: "ramSize " },
    { label: "Hard Drive", key: "hardDrive " },
    { label: "Serial Number", key: "serialNumber " },
    { label: "comment", key: "comment" },
    { label: "Date Issued", key: "updatedAt" },
    { label: "Data Updated", key: "updatedAt" },
    { label: "Retrieval Date", key: "retrievalDate" },
  ];

  const loopData = (data: any) => {
    const newData: any = [];
    data?.forEach((item: any) => {
      newData?.push({
        laptopName: item?.laptopName,
        laptopStatus: item?.laptopStatus,
        modelName: item?.modelName,
        previousUser: item?.previousUser,
        currentUser: item?.currentUser,
        serialNumber: item?.serialNumber,
        ramSize: item?.ramSize,
        hardDrive: item?.hardDrive,
        comment: item?.comment,
        dateIssued:
          moment(item?.dateIssued).format("DD-MM-YYYY") === "Invalid date"
            ? "No Date Given"
            : moment(item?.dateIssued).format("DD-MM-YYYY"),
        updatedAt:
          moment(item?.updatedAt).format("DD-MM-YYYY") === "Invalid date"
            ? "No Date Given"
            : moment(item?.updatedAt).format("DD-MM-YYYY"),
        retrievalDate:
          moment(item?.retrievalDate).format("DD-MM-YYYY") === "Invalid date"
            ? "No Date Given"
            : moment(item?.retrievalDate).format("DD-MM-YYYY"),
      });
    });
    return newData;
  };
  const exportData = loopData(data);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const csvdate =
    "INVENTORY REPORT  [" + day + "-" + month + "-" + year + "].csv";

  return (
    <CSVLink data={exportData} headers={headers} filename={csvdate}>

      <Button
        variant="contained"
        className="table-link" >
        <AiOutlineDownload size={25} />
        Download Report
      </Button>
    </CSVLink>
  );
};

export default EmployeesDownloader;


