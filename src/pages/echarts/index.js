import * as echarts from "echarts";
import React, { useEffect } from "react";
import styles from "./index.module.less";
import {
  lineOption,
  pieOption,
  barOption,
  completeLineOption,
  hightLightLineOption,
} from "./echart";

function EchartsBox() {
  useEffect(() => {
    const idArr = ["box-line", "box-pie", "box-bar"];
    const optArr = [hightLightLineOption, pieOption, barOption];
    renderEcharts(idArr, optArr);
  });

  /**@function 渲染图表 */
  const renderEcharts = (idList, optList) => {
    idList.forEach((item, index) => {
      const myChart = echarts.init(document.getElementById(item));
      myChart.setOption(optList[index]);
    });
  };

  return (
    <div className={styles.contentWrap}>
      <div className={styles.box} id="box-line"></div>
      <div className={styles.boxHigher} id="box-pie"></div>
      <div className={styles.boxHigher} id="box-bar"></div>
    </div>
  );
}

export default EchartsBox;
