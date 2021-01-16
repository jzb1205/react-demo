import React from "react";
import { Redirect } from "react-router-dom";
import active from "./../pages/active";
import active1 from "./../pages/active/component/active1";
import active11 from "./../pages/active/component/component/active11";
import active12 from "./../pages/active/component/component/active12";
import active13 from "./../pages/active/component/component/active13";
import active21 from "./../pages/active/component/component/active21";
import active22 from "./../pages/active/component/component/active22";
import active23 from "./../pages/active/component/component/active23";

import active2 from "./../pages/active/component/active2";

import active3 from "./../pages/active/component/active3";
import dingyue from "./../pages/dingyue";
import dingyue1 from "./../pages/dingyue/component/dingyue1";

import dingyue2 from "./../pages/dingyue/component/dingyue2";

import dingyue3 from "./../pages/dingyue/component/dingyue3";

export default [
  {
    path: "/active",
    component: active,
    routes: [
      {
        path: "/active",
        exact: true,
        render: () => <Redirect to={"/active/active2"} />,
      },
      {
        path: "/active/active1",
        component: active1,
        routes: [
          {
            path: "/active/active1",
            exact: true,
            render: () => <Redirect to={"/active/active1/active11"} />,
          },
          {
            path: "/active/active1/active11",
            component: active11,
          },
          {
            path: "/active/active1/active12",
            component: active12,
          },
          {
            path: "/active/active1/active13",
            component: active13,
          },
        ],
      },
      {
        path: "/active/active2",
        component: active2,
        routes: [
          {
            path: "/active/active2",
            exact: true,
            render: () => <Redirect to={"/active/active2/active21"} />,
          },
          {
            path: "/active/active2/active21",
            component: active21,
          },
          {
            path: "/active/active2/active22",
            component: active22,
          },
          {
            path: "/active/active2/active23",
            component: active23,
          },
        ],
      },
      {
        path: "/active/active3",
        component: active3,
      },
    ],
  },

  {
    path: "/dingyue",
    component: dingyue,
    routes: [
      {
        path: "/dingyue",
        exact: true,
        render: () => <Redirect to={"/dingyue/dingyue1"} />,
      },
      {
        path: "/dingyue/dingyue1",
        component: dingyue1,
      },
      {
        path: "/dingyue/dingyue2",
        component: dingyue2,
      },
      {
        path: "/dingyue/dingyue3",
        component: dingyue3,
      },
    ],
  },
];
