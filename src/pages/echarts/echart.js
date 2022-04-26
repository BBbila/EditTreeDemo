import * as echarts from "echarts";

/**@name 折线图 */
var lineOption = {
  //标题
  title: {
    text: "折线",
  },
  //工具栏
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      dataView: { readOnly: false },
      magicType: { type: ["stack", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  //提示框组件
  tooltip: {
    trigger: "axis", //坐标轴触发 |item-数据项触发
    axisPointer: {
      type: "cross", //指示器瞄准方式
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  //图例
  legend: {
    data: ["鱼泡网", "装修招工", "鱼泡焊工", "工地招工"],
    orient: "vertical",
    left: "left",
    top: "10%",
  },
  grid: {
    left: "25%",
    top: "10%",
  },
  //X轴
  xAxis: {
    type: "category",
    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
  },
  //Y轴
  yAxis: {
    type: "value",
  },
  //配置项与数据
  series: [
    {
      name: "鱼泡网",
      type: "line",
      // smooth: true, //平滑
      data: [140, 232, 101, 264, 90, 340, 250],
      // markPoint: {
      //   data: [
      //     { type: "max", name: "Max" },
      //     { type: "min", name: "Min" },
      //   ],
      // },
      // markLine: {
      //   data: [{ type: "average", name: "Avg" }],
      // },
    },
    {
      name: "装修招工",
      type: "line",
      data: [120, 282, 111, 234, 220, 340, 310],
    },
    {
      name: "鱼泡焊工",
      type: "line",
      data: [320, 132, 201, 334, 190, 130, 220],
    },
    {
      name: "工地招工",
      type: "line",
      data: [220, 402, 231, 134, 190, 230, 120],
    },
  ],
};

/**@name 完整的折线堆叠面积图 */
var completeLineOption = {
  color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
  title: {
    text: "各个小程序半年的日活量统计",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["鱼泡网", "装修招工", "鱼泡焊工", "工地招工"],
    top: "1%",
    left: "40%",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: "10%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false, //为true-就在刻度线的中间
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "鱼泡网",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      //是否显示转折点
      showSymbol: false,
      //面积
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(128, 255, 165)",
          },
          {
            offset: 1,
            color: "rgb(1, 191, 236)",
          },
        ]),
      },
      //是否高亮
      emphasis: {
        //聚焦当前高亮的数据所在的系列的所有图形
        focus: "series",
      },
      data: [140, 232, 101, 264, 90, 340, 250],
    },
    {
      name: "装修招工",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(0, 221, 255)",
          },
          {
            offset: 1,
            color: "rgb(77, 119, 255)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [120, 282, 111, 234, 220, 340, 310],
    },
    {
      name: "鱼泡焊工",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(55, 162, 255)",
          },
          {
            offset: 1,
            color: "rgb(116, 21, 219)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 132, 201, 334, 190, 130, 220],
    },
    {
      name: "工地招工",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(255, 0, 135)",
          },
          {
            offset: 1,
            color: "rgb(135, 0, 157)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [220, 402, 231, 134, 190, 230, 120],
    },
  ],
};

/**@name 高亮折线图 */
var hightLightLineOption = {
  xAxis: {
    type: "category",
    boundaryGap: false,
  },
  yAxis: {
    type: "value",
    boundaryGap: [0, "30%"],
  },
  //数据映射组件
  visualMap: {
    type: "piecewise", //图元类型 piecewise-分段式  continuous-连续型
    show: false,
    dimension: 0, //取数组的哪个维度
    seriesIndex: 0, //取数组的哪个系列
    //自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围的样式
    pieces: [
      {
        gt: 1,
        lt: 3,
        color: "rgba(0, 0, 180, 0.4)",
      },
      {
        gt: 5,
        lt: 7,
        color: "rgba(0, 0, 180, 0.4)",
      },
    ],
  },
  series: [
    {
      type: "line",
      smooth: 0.6,
      symbol: "none",
      lineStyle: {
        color: "#5470C6",
        width: 5,
      },
      markLine: {
        symbol: ["none", "none"],
        label: { show: false },
        data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
      },
      areaStyle: {},
      data: [
        ["2019-10-10", 200],
        ["2019-10-11", 560],
        ["2019-10-12", 750],
        ["2019-10-13", 580],
        ["2019-10-14", 250],
        ["2019-10-15", 300],
        ["2019-10-16", 450],
        ["2019-10-17", 300],
        ["2019-10-18", 100],
      ],
    },
  ],
};

/**@name 饼图 () */
var pieOption = {
  title: {
    text: "玫瑰饼图",
    subtext: "用户点击模块的数据量",
  },
  legend: {
    top: "bottom",
  },
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "用户点击模块次数",
      type: "pie",
      radius: [50, 200], //空心弧度大小-可变环图
      center: ["50%", "50%"],
      /**
       * 通过半径区分数据大小
       * 'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
       * 'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
       */
      roseType: "radius",
      itemStyle: {
        borderRadius: 20,
      },
      data: [
        { value: 40, name: "招工详情" },
        { value: 38, name: "找活详情" },
        { value: 32, name: "工厂专区" },
        { value: 30, name: "会员中心" },
        { value: 28, name: "搜索页面" },
        { value: 26, name: "置顶页" },
        { value: 22, name: "鱼泡头条" },
        { value: 18, name: "谁联系过我" },
      ],
    },
  ],
};

/**@name 柱状图*/
var barOption = {
  title: {
    text: "堆叠柱状图",
    subtext: "上午时间段-用户充值情况",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {
    data: ["招工联系", "置顶", "找活联系", "积分充值页"],
    top: "8%",
    left: "15%",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: "15%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["0-3时", "3-6时", "6-9时", "9-12时"],
  },
  series: [
    {
      name: "招工联系",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 302, 301, 334, 390, 330, 320],
    },
    {
      name: "置顶",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "找活联系",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "积分充值页",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [150, 212, 201, 154, 190, 330, 410],
    },
  ],
};

export {
  lineOption,
  completeLineOption,
  hightLightLineOption,
  pieOption,
  barOption,
};
