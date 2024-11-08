import { useState, useEffect, useRef } from "react";
import IRMSDashboard from "./IRMSDashboard";
import jsonData from "./app.json";

function Demo() {
  const [items, setItems] = useState([]);
  const dragComp = useRef()
  useEffect(() => {
    let jsonSorted = jsonData
    jsonSorted.push({
      id: `item15`,
      type: 'ExternalComponent',
      data: {
        classNames: "col-lg-8 col-md-6 col-xs-12",
        component: <p>Hello world</p>
      }
    })
    jsonSorted = jsonData.sort((a, b) => {
      return a.id.localeCompare(b.id)
    })
    setItems(jsonSorted)
  }, [])
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
    setItems(reorderedItems);
  }
  return (
    <div className="App" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      paddingBottom: '20px'
    }}>
      {/* <button onClick={() => {
        sortData(); setTimeout(() => {
          dragComp.current.layout()
        }, 1000)
      }}>Reload</button> */}
      <IRMSDashboard items={items} onDragEnd={onDragEnd} ref={dragComp}></IRMSDashboard>
    </div>
  );
}

export default Demo;
