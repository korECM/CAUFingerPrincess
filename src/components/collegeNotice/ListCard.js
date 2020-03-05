import React, { useState, useEffect, useCallback, Component } from "react";
import TagButton from "../../components/TagButton.js";
import getBne from "../../lib/parsing/bne.js";
//import { Linking } from "react-native";

const ListCard = () => {
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
    maxHeight: "185px",
    width: "100%",
    backgroundColor: "#FFF",
    overflow: "auto"
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
  }, []);

  return (
    <ul style={cardStyle}>
      {data.map((notice, i) => {
        return (
          <li
            style={{
              display: "flex",
              borderBottomStyle: "solid",
              borderBottomWidth: "2",
              borderBottomColor: "#111111"
            }}
            key={notice.title}
          >
            <a
              href={notice.link}
              style={{ flex: 1, fontSize: "10px", padding: "8px" }}
            >
              {notice.title}
            </a>
            <span
              style={{ marginLeft: "auto", fontSize: "10px", padding: "10px" }}
            >
              {notice.date}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

class TitleInfo extends React.Component {
  render() {
    var cardStyle = {
      height: 30,
      width: 300,
      backgroundColor: "#FFF",
      display: "inline-block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      padding: 10,
      fontSize: 10
    };

    return <div style={cardStyle}>{this.props.title}</div>;
  }
}

export default ListCard;
