import { useState, type MouseEvent } from "react";

export const MoodSelector = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const moodChoices = ["happy", "sad", "elegant", "mystical", "sci-fi", "creepy", "scary", "shy", "bold", "confident"];

  const handleChoice = (e: MouseEvent<HTMLButtonElement>, moodTitle: string) => {
    e.preventDefault();
    if (!selected.includes(moodTitle) && selected.length < 3) {
      // Add mood to selected
      setSelected((prev: string[]) => [...prev, moodTitle]);
    } else if (selected.includes(moodTitle)) {
      // Remove mood from selected
      const chosenMoodIndex = selected.indexOf(moodTitle);
      const newSelectedArray = Array.from(selected);
      newSelectedArray.splice(chosenMoodIndex, 1);
      setSelected(newSelectedArray);
    }
  };

  return (
    <div className="mood-selector">
      {moodChoices.map((moodTitle) => (
        <button key={moodTitle} data-selected={selected.includes(moodTitle)} onClick={(e) => handleChoice(e, moodTitle)} className={selected.includes(moodTitle) ? "selected" : ""}>
          {moodTitle}
        </button>
      ))}
    </div>
  );
};
