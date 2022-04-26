/**@name 折线图 (|平滑|堆叠|面积) */
var lineOption = {
  title: {
    text: "折线",
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

/**@name 高亮折线图 */
var hightLightOption = {
  xAxis: {
    type: "category",
    boundaryGap: false,
  },
  yAxis: {
    type: "value",
    boundaryGap: [0, "30%"],
  },
  visualMap: {
    type: "piecewise",
    show: false,
    dimension: 0,
    seriesIndex: 0,
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
  },
  legend: {
    top: "bottom",
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: "Nightingale Chart",
      type: "pie",
      radius: [50, 250],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8,
      },
      data: [
        { value: 40, name: "rose 1" },
        { value: 38, name: "rose 2" },
        { value: 32, name: "rose 3" },
        { value: 30, name: "rose 4" },
        { value: 28, name: "rose 5" },
        { value: 26, name: "rose 6" },
        { value: 22, name: "rose 7" },
        { value: 18, name: "rose 8" },
      ],
    },
  ],
};

/**@name 柱状图 (|平滑|堆叠|面积) */
var columnarOption = {
  title: {
    text: "堆叠柱状图",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  series: [
    {
      name: "Direct",
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
      name: "Mail Ad",
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
      name: "Affiliate Ad",
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
      name: "Video Ad",
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
    {
      name: "Search Engine",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320],
    },
  ],
};

export { lineOption, hightLightOption, pieOption, columnarOption };
