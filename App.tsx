import { useState } from 'react';
import { Item } from './components/Item';
import { useItems } from './hooks/useItems';

function App() {
  const items = useItems();
  const [noOfItems, setNoOfitems] = useState(8);
  const showMore = () => {
    if (noOfItems <= items.length) {
      setNoOfitems(noOfItems + 8);
    }
  };
  return (
    <div className='container'>
      <header className='header'>
        <h1>Zobrist Solution</h1>
      </header>
      <section>
        <div className='items'>
          {items.slice(0, noOfItems).map((item) => (
            <Item {...item} />
          ))}
        </div>

        {noOfItems < items.length ? (
          <div className='actions'>
            <button className='primary' onClick={showMore}>
              Show More
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default App;
