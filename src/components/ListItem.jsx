import React from 'react';

export default function ListItem({ text, id, deleteHandler, isChecked }) {
  return (
    <li>
      {text}
      <button onClick={() => deleteHandler(id)} data-testid="delete_button">
        [X]
      </button>
        <input data-testid="check" type="checkbox" checked={isChecked} />
    </li>
  );
}
