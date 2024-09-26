# dashboard-innoways
## Tech

DragInnoways uses a number of open source projects to work properly:

- [ReactJS] - Powerful Javscript Library!
- [rbd] - react-beautiful-dnd
- [packery] - plugin that makes gapless and draggable layouts.

And of course DragInnoways itself is open source with a [public repository][dill]
 on GitHub.

## Installation

DragInnoways requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i dashboard-innoways
```
## Usage
```sh
import { useState, useEffect } from "react";
import Card from './Card'
import DragInnoways from "dashboard-innoways"
function App() {
  const classes = ['col-8 mb-4', 'col-4 mb-4']
  const [items, setItems] = useState([]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
    setItems(reorderedItems);
  }

  useEffect(() => {
    const newItems = []
    for(let i = 0;i<20;i++) {
      newItems.push({ id: `item-${i}`, itemClass: classes[getRandomNumber(0, 1)], content: <div style={{ height: `${getRandomNumber(200, 450)}px` }}><Card i={i} /></div> },)
    } 
    setItems(newItems)
  }, [])

  return (
    <div className="App" style={{
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <DragInnoways items={items} onDragEnd={onDragEnd}></DragInnoways>
    </div>
  );
}

export default App;

```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://www.npmjs.com/package/dashboard-innoways>
   [git-repo-url]: <https://github.com/erica4appz/dashboard-innoways>
   [node.js]: <http://nodejs.org>
