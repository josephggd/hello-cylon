import React from 'react';
import {testItem, testItems} from "../../../dtos/ToDoItem";
import {testList} from "../../../dtos/ToDoList";
import {ItemField} from "./ItemField";
import {handleItemChanges} from "./ItemFieldFunctions";

describe("ItemField", () => {
  const setEditedList = jest.fn();
  const index = 0;
  test("tests that handleItemChanges works", () => {
    handleItemChanges(
      testItem,
      testList,
      testItems,
      setEditedList,
      index
    );
    expect(setEditedList).toHaveBeenCalled();
  });
  test("does not push null items", () => {
    handleItemChanges(
      testItem,
      testList,
      [testItem, {...testItem, title: ""}],
      setEditedList,
      index
    );
    expect(setEditedList).toHaveBeenCalled();
  });
});