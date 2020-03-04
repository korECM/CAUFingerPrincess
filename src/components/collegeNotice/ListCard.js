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
    width: 300,
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

  const sixList = data.filter(num => num < 6);

  return (
    <div>
      <div style={cardStyle}>
        {sixList.map((notice, i) => {
          return (
            (<TitleInfo title={notice.title} key={i} />),
            (
              <TitleInfo date={notice.date} key={i} />
              // (<DateInfo date={notice.date} key={i} />)
            )
          );
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

    var dateCardStyle = {
      height: 30,
      width: 100,
      backgroundColor: "#FFF",
      display: "inline-block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      padding: 10,
      fontSize: 10
    };

    return (
      (<div style={cardStyle}>{this.props.title}</div>),
      (<div style={dateCardStyle}>{this.props.date}</div>)
    );
  }
}

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
      fontSize: 10
    };

    return <div style={cardStyle}>{this.props.date}</div>;
  }
}

export default ListCard;
