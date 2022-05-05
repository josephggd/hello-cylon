import {blankList, testList} from "../../../dtos/ToDoList";
import {testItems} from "../../../dtos/ToDoItem";
import React from "react";
import {handleSubmit} from "./EditListFunctions";

describe('EditItem', () => {
  // const submitList = jest.fn().mockImplementation(() => Promise.resolve());
  const setEditedList = jest.fn();
  const setRefresh = jest.fn();
  // test('runs handleSubmit', () => {
  //   handleSubmit(
  //     {...testList, items: testItems},
  //     testItems,
  //     setEditedList,
  //     setRefresh);
  //   expect(setEditedList).toHaveBeenCalledWith(blankList);
  //   expect(setRefresh).toHaveBeenCalledWith(true);
  // });
  test('runs handleSubmit w blank list', () => {
    handleSubmit(
      blankList,
      testItems,
      setEditedList,
      setRefresh);
    expect(setEditedList).not.toHaveBeenCalledWith(blankList);
    expect(setRefresh).not.toHaveBeenCalledWith(true);
  });
});