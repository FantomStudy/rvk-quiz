import { AvrSewerPlumber } from "../components/tables/avr-sewer-plumber/AvrSewerPlumber";

import styles from "./PracticeStatePage.module.css";

export const PracticeStatePage = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        {/* <Welder /> */}
        {/* <AvrMechanic /> */}
        {/* <AvrPlumber /> */}
        {/* <AvrSewer /> */}
        <AvrSewerPlumber />
      </div>
    </div>
  );
};
