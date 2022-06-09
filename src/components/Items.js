import { useState, useEffect } from "react";
import Item from "./Item";

export default function Items({endpoint =""}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://62a1636dcc8c0118ef4a8dfc.mockapi.io/items${endpoint}`)
      .then((res) => {
        return res.json();
      })
      .then((json_response) => {
        setData(json_response);
      });
  });

  return (
    <table>
      <td></td>
      <td>Task</td>
      <td>Due</td>
      <td></td>
      {data.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </table>
  );
}
