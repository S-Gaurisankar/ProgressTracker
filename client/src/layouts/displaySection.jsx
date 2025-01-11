import React from "react";
import styles from "../styles/displaySection.module.css";
// import data from "../utils/constants.js";
import PieChart from "../components/pie.jsx";
import LineChart from "../components/line.jsx";
import TaskTable from "../components/table.jsx";
import { useQuery } from "../context/QueryContext.jsx";

const DisplaySection = () => {
  const { query } = useQuery();
  console.log(query);
  const firstChartData = {
    labels: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"],
    values: [150, 100, 80, 95, 120],
  };

  const secondChartData = {
    labels: ["PM2.5", "PM10", "NO2", "SO2", "O3"],
    values: [65, 45, 30, 25, 35],
  };

  return (
    <>
    {/* Query section */}
      {query ? (
        <div className={styles.queryContainer}>
          <div className={styles.tableContainer}>
            {/* <TaskTable data={data} /> */}
          </div>
        </div>
      ) : (
        <>
        {/* Overall status */}
          <div className={styles.container}>
            <div className={styles.chartContainer}>
              <PieChart data={firstChartData} />
              <PieChart data={secondChartData} />
            </div>
            <div className={styles.graphContainer}>
              <LineChart data={firstChartData} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DisplaySection;
