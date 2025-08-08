import { Driver } from "../components";
import { ChemLabTechnician } from "../components/tables/chem-lab-technician/ChemLabTechnician";

import styles from "./PracticeStatePage.module.css";

export const PracticeStatePage = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        {/* <Welder /> */}
        {/* <AvrMechanic /> */}
        {/* <AvrPlumber /> */}
        {/* <AvrSewer /> */}
        {/* <AvrSewerPlumber /> */}
        {/* <Driver /> */}
        <ChemLabTechnician />
      </div>
    </div>
  );
};
