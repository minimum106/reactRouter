import { Page2 } from "../Page2";
import { URLParameter } from "../URLParameter";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <URLParameter />
  }
];
