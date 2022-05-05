import {render, screen} from '@testing-library/react';
import React from 'react';
import userEvent from "@testing-library/user-event";
import {testItem} from "../../../dtos/ToDoItem";
import {testList} from "../../../dtos/ToDoList";
import {ItemField} from "./ItemField";

describe("ItemField", () => {
  const setEditedList = jest.fn();
  const handleItemChange = jest.fn();
  const field = "Title";
  test("renders without crashing", () => {
    render(<ItemField
      index={0}
      max={12}
      item={testItem}
      field={field}
      value={testItem.title}
      editedList={testList}
      setEditedList={setEditedList}
      handleItemChange={handleItemChange}
    />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    userEvent.type(screen.getByRole("textbox"), "t");
    expect(handleItemChange).toHaveBeenCalledWith(
      {"Title": "testt", "description": "test", "id": 1, "title": "test"},
      {"description": "test", "id": 1, "items": [], "title": "test"},
      [],
      setEditedList,
      0);
  });
});