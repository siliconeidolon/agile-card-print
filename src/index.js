import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Card } from "./Card";

{
  /*
  TODOS:
    *Fix layout so more cards can be printed
    *Add card preview to right of controls
    *Add ability to remove cards
    *Find some way to scrape TFS for relevant card info.
*/
}

function App() {
  const [title, setTitle] = useState("");
  const [storyNumber, setStoryNumber] = useState("");
  const [effort, setEffort] = useState(0);
  const [storyType, setStoryType] = useState("feature");
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const updatedCards = [...cards];
    updatedCards.push({
      title: title,
      storyType: storyType,
      storyNumber: storyNumber,
      effort: effort
    });
    setCards(updatedCards);

    resetInputs();
  };

  const resetInputs = () => {
    setTitle("");
    setStoryNumber("");
    setEffort("0");
    setStoryType("feature");
  };

  const handleKeyPress = () => {};

  return (
    <div className="App">
      <div className="controls" onSubmit={() => addCard()}>
        <label>Card title</label>
        <input
          onChange={e => setTitle(e.target.value)}
          value={title}
          placeholder="Card title"
          className="text-input"
        />

        <label>Story Number</label>
        <input
          onChange={e => setStoryNumber(e.target.value)}
          value={storyNumber}
          placeholder="Story number"
          className="text-input"
        />

        <label>Effort</label>
        <input
          onChange={e => setEffort(e.target.value)}
          value={effort}
          placeholder="Effort"
          className="text-input"
          type="number"
        />

        <label>Type</label>
        <select
          onChange={e => setStoryType(e.target.value)}
          value={storyType}
          placeholder="Type"
          type="select"
          className={storyType === "feature" ? "feature" : "bug"}
        >
          <option value="feature">Feature</option>
          <option value="bug">Bug</option>
        </select>

        <button
          onClick={() => addCard({ title, storyType, storyNumber, effort })}
          className="btn-print"
        >
          ADD CARD
        </button>

        <button className="btn-print" onClick={() => window.print()}>
          PRINT CARDS
        </button>

        <hr />
      </div>

      <div className="grid-container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              storyNumber={card.storyNumber}
              storyType={card.storyType}
              effort={card.effort}
            />
          );
        })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
