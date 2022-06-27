import { Link } from "react-router-dom";
import { UrlParameter } from "./UrlParameter";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>Page1DetailA</Link>
      <br />
      <Link to="/page1/detailB">Page1DetailB</Link>
    </div>
  );
};
