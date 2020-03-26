import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import LibraryHeader from "./LibraryHeader";
import LibraryList from "./LibraryList";

import getLibrary from "../../lib/parsing/library";

const LibraryCard = () => {
  const LibraryCardContainer = styled.div`
    width: 100%;
    max-height: 220px;
    border-radius: 4px;
    border: 1px solid #eff0f4;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    flex: 1;
    transition: transform 0.3s, box-shadow 0.3s, opacity 0.3s, background 0.2s,
      border 0.2s;
    overflow: hidden;
    &:hovers {
      border-radius: 4px;
      position: relative;
      transform: translateY(-3px);
      box-shadow: 0 17px 24px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s, opacity 0.3s, background 0.2s,
        border 0.2s;
      will-change: transform, box-shadow, opacity;
    }
  `;

  let [type, setType] = useState([true, false, false]);

  let [data, setData] = useState([]);

  let [loading, setLoading] = useState(true);

  let [error, setError] = useState(false);

  const onChange = useCallback(
    id => {
      setType(type.map((data, index) => (index !== id ? false : true)));
    },
    [type]
  );

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      let index = type.findIndex(data => data);
      const data = await getLibrary(index + 1);
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

  return (
    <LibraryCardContainer>
      <LibraryHeader type={type} onChange={onChange} />
      <LibraryList lists={data} loading={loading} error={error} />
    </LibraryCardContainer>
  );
};

export default React.memo(LibraryCard);
