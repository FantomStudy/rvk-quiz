import AvrMechanicTable from "../components/avr-mechanic-table/AvrMechanicTable";
import WelderTable from "../components/welder-table/WelderTable";

import styles from "./PracticeStatePage.module.css";

export const PracticeStatePage = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <WelderTable />
        {/* <AvrMechanicTable /> */}
      </div>
    </div>
  );
};
