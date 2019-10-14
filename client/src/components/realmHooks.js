import React, {useState, useEffect} from 'react';

export const useRealm = (query, args) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let handleChange = newData => {
      console.warn(data === newData);
      setData({
        data: newData.sorted('createdAt', true).slice(0, 1),
        timestamp: Date.now(),
      });
    };
    const dataQuery = args ? query(...args) : query();
    dataQuery.addListener(handleChange);
    return () => {
      dataQuery.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, args]);

  return data;
};
