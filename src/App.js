import "./App.css";
import { useState } from "react";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems([...Items, inputList]);
    setInputList("");
    console.log(Items);
  };

  const deleteItems = (item) => {
    console.log("deleted");
    setItems((Items) => {
      return Items.filter((arrElem, index) => {
        return arrElem !== item;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <input
          type="text"
          placeholder="add a item..."
          value={inputList}
          onChange={itemEvent}
        />
        <button
          onClick={listOfItems}
          style={{
            background: "green",
            color: "white",
            border: "1px solid white",
            fontWeight: "bold",
            width: "80px",
          }}
        >
          Add
        </button>

        <ol>
          {/* <li>{inputList}</li> */}

          {Items.map((itemvalue, index) => (
            <div
              key={index}
              id={index}
              text={itemvalue}
              onSelect={deleteItems}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                border: "1px solid white",
              }}
            >
              <li>{itemvalue}</li>
              <button
                className="but"
                style={{
                  color: "white",
                  background: "red",
                  border: "1px solid white",
                  width: "60px",
                  fontWeight: "bold",
                }}
                onClick={() => deleteItems(itemvalue)}
              >
                X
              </button>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
