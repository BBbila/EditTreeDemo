import * as echarts from "echarts";
import React, { useEffect } from "react";
import styles from "./index.module.less";
import { linkageOption } from "./echart";

function Events() {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById("box"));
    myChart.setOption(linkageOption);
    //改变坐标指示器-事件
    myChart.on("updateAxisPointer", function (event) {
      console.log("updateAxisPointer", event);
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: "pie",
            label: {
              formatter: "{b}: {@[" + dimension + "]} ({d}%)",
            },
            //可以定义 data 的哪个维度被编码成什么
            encode: {
              value: dimension,
              tooltip: dimension,
            },
          },
        });
      }
    });

    // 处理点击事件并且跳转到相应的页面
    myChart.on("click", function (params) {
      console.log("click", params);
      if (params.seriesType == "pie") {
        window.open("https://www.yupao.com/");
      }
    });
    //点击指定的数据
    myChart.on("dblclick", { dataIndex: 3 }, function (params) {
      if (params.dataIndex == 3) {
        window.open("https://www.yupao.com/");
      }
    });
  });

  return (
    <div className={styles.contentWrap}>
      <div className={styles.box} id="box"></div>
    </div>
  );
}

export default Events;
