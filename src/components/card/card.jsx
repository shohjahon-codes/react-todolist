import React from "react";

export const Card = ({ name, setData, id }) => {
  const [count, setCount] = React.useState(0);
  const deleteItem = () => {
    setData((pState) => pState.filter((item) => item.id !== id));
  };

  const editItem = () => {
    let newName = prompt("new userName");
    // setData((p)=> )
  };

  return (
    <div>
      <h1>
        {count} {name}
      </h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={deleteItem}>delete</button>
      <button onClick={editItem}>edit</button>
    </div>
  );
};
