import React, { useState, useEffect, useCallback, Component } from "react";
import "./CafeteriaList.scss";
import CafeteriaHeader2 from "./CafeteriaHeaderTitle";
import "../../star_rate/starindex.css";
import getFood from "../../lib/parsing/food.js";
import StarApp from "../../star_rate/App";

const CafeteriaItem = () => {
  let [data, setData] = useState([]);

  let [loading, setLoading] = useState(true);

  let [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await getFood();
      console.log("gggg");
      console.log(data.title);
      console.log(data.error);
      if (data.error) {
        setError(true);
      } else {
        setData(data);
        setLoading(false);
        setError(false);
      }
    };
    load();
  }, []);

  return (
    <div>
      <CafeCard lists={data} loading={loading} error={error}/>
      <CafeteriaMenu lists={data} loading={loading} error={error}/>
      <StarApp style={{ marginLeft: 15 }} />
      <CafeteriaListLine />
    </div>
  );
};

const CafeCard = ({ lists, loading, error }) => {
  let list = [];
  console.log(lists.title);
  if(loading){
    return (
      <span>로딩할거임</span>
    )
  }
  if (!error) {
    list = lists.map(data => {
      return (
        <div className="cafeteriaList">
        <span>{data.title}</span>
        <a>{data.time}</a>
        <span>{data.price}</span>
      </div>
      );
    });
  }
};

const CafeteriaMenu = ({ lists, loading, error }) => {
  let list = [];
if(loading){
    return (
      <span>로딩할거임</span>
    )
  }
  if (!error) {
    list = lists.map(data => {
      return (
        <div className="cafeteriaListMenu">
          <span>{data.menu}</span>
        </div>
      );
    });
  }
};

const CafeteriaListLine = () => {
  var lineStyle = {
    display: "flex",
    flex: 1,
    height: 1,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 0,
    backgroundColor: "gray"
  };

  return <div style={lineStyle}></div>;
};

const CafeterialScope = () => {
  return;
};

// export default function CafeteriaList() {
//   return (
//     <div>
//       <CafeCard lists={data} loading={loading} error={error}/>
//       <CafeteriaMenu />
//       <StarApp style={{ marginLeft: 15 }} />
//       <CafeteriaListLine />
//     </div>
//   );
// }



export default React.memo(CafeteriaItem);

