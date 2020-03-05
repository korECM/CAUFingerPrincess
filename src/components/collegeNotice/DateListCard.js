import React, { useState, useEffect, useCallback, Component } from "react";
import TagButton from "../TagButton.js";
import getBne from "../../lib/parsing/bne.js";

const DateListCard = () => {
  let [type, setType] = useState([true, false, false]);
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);

  const onChange = useCallback(
    id => {
      setType(type.map((data, index) => (index !== id ? false : true)));
    },
    [type]
  );

  var cardStyle = {
    height: 30,
    width: 100,
    backgroundColor: "#FFF"
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await getBne();
      console.log(data);
      if (data.error) {
        setError(true);
      } else {
        setData(data);
        setLoading(false);
        setError(false);
      }
    };
    load();
  }, [type]);

  const sixList = data.filter((x, idx, array) => {
    return idx < 6;
  });

  return (
    <div>
      <div style={cardStyle}>
        {sixList.map((notice, i) => {
          return <DateInfo date={notice.date} key={i} />;
        })}
      </div>
    </div>
  );
};

class DateInfo extends React.Component {
  render() {
    var cardStyle = {
      height: 30,
      width: 100,
      backgroundColor: "#FFF",
      display: "inline-block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      padding: 10,
      fontSize: 10,
      marginLeft: 200
    };

    return <div style={cardStyle}>{this.props.date}</div>;
  }
}

//export default DateListCard;
