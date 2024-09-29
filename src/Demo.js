import { useState, useEffect, useRef } from "react";
import IRMSDashboard from "./IRMSDashboard";
import jsonData from "./app.json";

function Demo() {
  const [items, setItems] = useState([]);
  const dragComp = useRef()
  useEffect(() => {
    setItems(jsonData)
  }, [])
  const sortData = () => {
    const shuffledArray = items.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Generate a random index
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setItems(shuffledArray);
  }
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
      margin: '0 auto'
    }}>
      <button onClick={() => {
        sortData(); setTimeout(() => {
          dragComp.current.layout()
        }, 1000)
      }}>Reload</button>
      <IRMSDashboard items={items} onDragEnd={onDragEnd} ref={dragComp}></IRMSDashboard>
    </div>
  );
}

export default Demo;
