export interface ItemProps {
  title: string;
  price: string;
  image: string;
}
export const Item = ({ title, price, image }: ItemProps) => {
  return (
    <article className='item'>
      <img src={image} alt={title} />
      <h4 className='item-title'>{title}</h4>
      <div className='item-price'>{price}</div>
    </article>
  );
};
