const Router = require('koa-router');
let router = new Router();

router.get('/api/getBannerData', async ctx => {
  ctx.body = [
    {
      desc: '今日消耗',
      value: '1314'
    },
    {
      desc: '今日激活',
      value: '1314'
    },
    {
      desc: '点击成本（元',
      value: '1314'
    },
    {
      desc: '激活成本（元）',
      value: '1314'
    },
  ];
})

router.get('/api/getLineData', async ctx => {
  ctx.body = [
    { month: 'Jan', city: 'Tokyo', temperature: 7 },
    { month: 'Jan', city: 'London', temperature: 3.9 },
    { month: 'Feb', city: 'Tokyo', temperature: 6.9 },
    { month: 'Feb', city: 'London', temperature: 4.2 },
    { month: 'Mar', city: 'Tokyo', temperature: 9.5 },
    { month: 'Mar', city: 'London', temperature: 5.7 },
    { month: 'Apr', city: 'Tokyo', temperature: 14.5 },
    { month: 'Apr', city: 'London', temperature: 8.5 },
    { month: 'May', city: 'Tokyo', temperature: 18.4 },
    { month: 'May', city: 'London', temperature: 11.9 },
    { month: 'Jun', city: 'Tokyo', temperature: 21.5 },
    { month: 'Jun', city: 'London', temperature: 15.2 },
    { month: 'Jul', city: 'Tokyo', temperature: 25.2 },
    { month: 'Jul', city: 'London', temperature: 17 },
    { month: 'Aug', city: 'Tokyo', temperature: 26.5 },
    { month: 'Aug', city: 'London', temperature: 16.6 },
    { month: 'Sep', city: 'Tokyo', temperature: 23.3 },
    { month: 'Sep', city: 'London', temperature: 14.2 },
    { month: 'Oct', city: 'Tokyo', temperature: 18.3 },
    { month: 'Oct', city: 'London', temperature: 10.3 },
    { month: 'Nov', city: 'Tokyo', temperature: 13.9 },
    { month: 'Nov', city: 'London', temperature: 6.6 },
    { month: 'Dec', city: 'Tokyo', temperature: 9.6 },
    { month: 'Dec', city: 'London', temperature: 4.8 },
  ]
})

router.get('/api/getTableData', async ctx => {
  ctx.body = {
    columnData: [
      {
        prop: "p_day",
        label: "日期",
      },
      {
        prop: "platform_name",
        label: "平台",
      },
      {
        prop: "view_count",
        label: "曝光",
      },
      {
        prop: "click",
        label: "点击",
      },
      {
        prop: "use_cost",
        label: "花费",
      },
      {
        prop: "new_uv",
        label: "新增用户",
      },
      {
        prop: "use_cost",
        label: "用户成本",
      },
    ],
    tableDataList: [
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
      { click: 1234, cost: 1234, new_uv: 1314, p_day: "2021-07-12", platform_name: "广点通", retention: 0, use_cost: 13.14, view_count: 1314205 },
    ]
  }
})

module.exports = router;
