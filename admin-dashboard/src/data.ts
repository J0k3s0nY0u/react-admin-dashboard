export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "fa-solid fa-house",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "fa-solid fa-user",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "fa-solid fa-users",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "fa-solid fa-people-carry-box",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "fa-solid fa-arrow-up-wide-short",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "fa-solid fa-clipboard",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "fa-solid fa-people-carry-box",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "fa-solid fa-people-carry-box",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "fa-solid fa-people-carry-box",
      },
      {
        id: 4,
        title: "Calender",
        url: "/",
        icon: "fa-solid fa-people-carry-box",
      },
    ],
  },
  {
    id: 4,
    title: "maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "fa-solid fa-people-carry-box",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "fa-solid fa-people-carry-box",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "fa-solid fa-people-carry-box",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "fa-solid fa-people-carry-box",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "./logo192.png",
    username: "Abc Johnson",
    email: "abc@email.com",
    amount: "1.25",
  },
  {
    id: 2,
    img: "./logo192.png",
    username: "Abc Johnson",
    email: "abc@email.com",
    amount: "1.25",
  },
  {
    id: 3,
    img: "./logo192.png",
    username: "Abc Johnson",
    email: "abc@email.com",
    amount: "1.25",
  },
  {
    id: 4,
    img: "./logo192.png",
    username: "Abc Johnson",
    email: "abc@email.com",
    amount: "1.25",
  },
  {
    id: 5,
    img: "./logo192.png",
    username: "Abc Johnson",
    email: "abc@email.com",
    amount: "1.25",
  },
  {
    id: 6,
    img: "./logo192.png",
    username: "Abc Johnson",
    email: "abc@email.com",
    amount: "1.25",
  },
  {
    id: 7,
    img: "./logo192.png",
    username: "Abc Johnson",
    email: "abc@email.com",
    amount: "1.25",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/logo192.png",
  title: "Total Users",
  number: "11.231",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 200 },
    { name: "Mon", users: 300 },
    { name: "Tue", users: 100 },
    { name: "Wed", users: 500 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 700 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxConversion = {
  color: "#FFA000",
  icon: "/logo192.png",
  title: "Total Ratio",
  number: "21.2",
  dataKey: "ratio",
  percentage: 15,
  chartData: [
    { name: "Sun", ratio: 300 },
    { name: "Mon", ratio: 200 },
    { name: "Tue", ratio: 400 },
    { name: "Wed", ratio: 500 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 700 },
    { name: "Sat", ratio: 450 },
  ],
};

export const chartBoxProduct = {
  color: "#5A4FCF",
  icon: "/logo192.png",
  title: "Total Products",
  number: "231",
  dataKey: "products",
  percentage: 25,
  chartData: [
    { name: "Sun", products: 200 },
    { name: "Mon", products: 500 },
    { name: "Tue", products: 700 },
    { name: "Wed", products: 600 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 700 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxRevenue = {
  color: "#848482",
  icon: "/logo192.png",
  title: "Total Revenue",
  number: "5011",
  dataKey: "revenue",
  percentage: -5,
  chartData: [
    { name: "Sun", revenue: 100 },
    { name: "Mon", revenue: 300 },
    { name: "Tue", revenue: 100 },
    { name: "Wed", revenue: 500 },
    { name: "Thu", revenue: 200 },
    { name: "Fri", revenue: 700 },
    { name: "Sat", revenue: 150 },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#ff8832",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const barChartBoxRevenue = {
  title: "Total Revenue",
  color: "#ff8832",
  dataKey: "revenue",
  chartData: [
    {
      name: "Sun",
      revenue: 2000,
    },
    {
      name: "Mon",
      revenue: 3000,
    },
    {
      name: "Tue",
      revenue: 4000,
    },
    {
      name: "Wed",
      revenue: 2780,
    },
    {
      name: "Thu",
      revenue: 1890,
    },
    {
      name: "Fri",
      revenue: 3390,
    },
    {
      name: "Sat",
      revenue: 2490,
    },
  ],
};
