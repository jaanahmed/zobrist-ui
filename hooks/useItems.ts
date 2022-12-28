import { useState, useEffect } from 'react';
import { ItemProps } from '../components/Item';

export const useItems = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await (await fetch('data/data.json')).json();
        setItems(response[0].products);
      } catch (e) {
        setItems([]);
      }
    };
    loadItems();
  }, []);

  return items;
};
