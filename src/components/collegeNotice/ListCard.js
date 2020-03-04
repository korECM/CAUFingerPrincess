import React, { useState, useEffect, useCallback, Component } from "react";
import TagButton from "../../components/TagButton.js";
import getBne from "../../lib/parsing/bne.js";

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
    height: 30,
    width: 200,
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
          return <TitleInfo title={notice.title} key={i} />;
        })}
      </div>
    </div>
  );
};

class TitleInfo extends React.Component {
  render() {
    var cardStyle = {
      height: 30,
      width: 200,
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
