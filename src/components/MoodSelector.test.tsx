import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MoodSelector } from "./MoodSelector.tsx";

const moodChoices = ["happy", "sad", "elegant", "mystical", "sci-fi", "creepy", "scary", "shy", "bold", "confident"];

describe("MoodSelector", () => {
  beforeEach(() => {
    render(<MoodSelector />);
  });
  it("displays mood choices", async () => {
    const moodButtons = await screen.findAllByRole("button");
    const missingButtons = moodButtons.reduce<string[]>((curr, button) => {
      const buttonText = button.textContent;
      if (buttonText && !moodChoices.includes(buttonText)) {
        curr.push(buttonText);
      }
      return curr;
    }, []);
    expect(missingButtons.length).toBe(0);
  });
  it("let's user select up to 3 moods", async () => {
    const moodButtons = await screen.findAllByRole("button");
    fireEvent.click(moodButtons[4]);
    fireEvent.click(moodButtons[6]);
    fireEvent.click(moodButtons[8]);
    const clickedButtonIndexes = [4, 6, 8];
    const errors = [];
    for (let i = 0; i < moodButtons.length; i++) {
      if (clickedButtonIndexes.includes(i)) {
        if (moodButtons[i].dataset.selected === "true") {
          // Clicked button is selected: success
          continue;
        } else {
          errors.push(i);
        }
      } else {
        if (moodButtons[i].dataset.selected === "false") {
          // Non-clicked button is not selected: success
          continue;
        } else {
          errors.push(i);
        }
      }
    }
    expect(errors.length).toBe(0);
  });
});
