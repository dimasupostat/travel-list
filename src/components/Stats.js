export function Stats({ items }) {
  if (!items.length) return <p className="stats">Start pack your bag!</p>;
  const countItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = (packedItems / countItems) * 100;

  return (
    <footer className="stats">
      {percentage === 100 ? "You got everything! Ready to go!" : `You have ${countItems} items on your list, and you already packed ${packedItems} (${Math.round(percentage)}%)`}
    </footer>
  );
}
