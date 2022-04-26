var linkageOption = {
  title: {
    text: "各个小程序的用户量",
  },
  legend: {
    left: "30%",
  },
  tooltip: {
    trigger: "axis",
    showContent: true,
  },
  dataset: {
    // 每一列称为一个『维度』
    source: [
      ["年份", "2017", "2018", "2019", "2020", "2021", "2022"],
      ["鱼泡网", 56.5, 82.1, 88.7, 70.1, 93.4, 85.1],
      ["鱼泡快招", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
      ["建筑招工", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
      ["工地招工", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
    ],
  },
  xAxis: { type: "category" },
  yAxis: { gridIndex: 0 },
  grid: { top: "55%" },
  series: [
    {
      type: "line",
      id: "1",
      smooth: true,
      // 指定画图时将数据集dataset按行(row)还是按列(column)绘图
      seriesLayoutBy: "row",
      //聚焦当前高亮的数据所在的系列的所有图形
      emphasis: { focus: "series" },
    },
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "pie",
      id: "pie",
      radius: "30%",
      center: ["50%", "25%"],
      emphasis: {
        focus: "self",
      },
      label: {
        //便签格式化
        formatter: "{b}: {@2017} ({d}%)",
      },
      encode: {
        itemName: "年份",
        value: "2017",
        tooltip: "2017",
      },
    },
  ],
};

export { linkageOption };
