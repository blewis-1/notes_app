import { useState } from "react";
import { Note } from "../schemas";


interface Props {
  items: Note[];
  heading: string;
}

function NotesList({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="container">
      <h1>{heading}</h1>
      {items.length == 0 && (
        <p className="text-center">There are no items in the list. 🫙 </p>
      )}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
          >
            <h5>{item.title}</h5>
            <p> {item.content}</p>
            <p>{item.created_at}</p>
            {item.tags.map((tag, index) => (
              <span className="badge bg-primary m-1" key={index}>
                {tag}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
