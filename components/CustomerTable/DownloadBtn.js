// import { DownloadIcon } from "../Icons/Icons";
import * as XLSX from "xlsx/xlsx.mjs";
import { Button } from "@material-tailwind/react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
const DownloadBtn = ({ data = [], fileName }) => {
  return (
    <Button
    variant="gradient"
      className="flex items-center gap-3"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
    >
      <ArrowDownCircleIcon className="h-6 w-6" />
      Download
    </Button>
  );
};

export default DownloadBtn;
