import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export default function ImgView({ solve_id }) {
  const [dataReport, setDataReport] = useState([]);
  const [reportID, setReportID] = useState(0);
  const [nameIm, setNameIm] = useState("")
  const getdata = async (solve_id) => {
    console.log(solve_id);

    if (solve_id != 0) {
      let res = await axios.get(
        "http://localhost:3000/get_report_one/" + solve_id
      );
      if (res.data != "") {
        setDataReport(res.data);
        setNameIm(res.data[0].solve_image)
        console.log(res.data);
      }
    }
  };

  
  useEffect(() => {
    getdata(solve_id);
   
  }, [solve_id]);

  return (
    <div>
      <Image
        src={"http://localhost/BargFoodNode/images/report/"+nameIm}
        width={400}
        height={250}
      />
    </div>
  );
}
