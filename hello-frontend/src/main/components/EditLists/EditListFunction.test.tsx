import {EditList} from "./EditList";
import {render, screen} from '@testing-library/react';
import {blankList, testList, testLists, ToDoList} from "../../../dtos/ToDoList";
import {blankItem, testItem, testItems} from "../../../dtos/ToDoItem";
import React from "react";
import {postNewToDoList, putUpdateToDoList} from "../../api/ApiRequests";
import userEvent from "@testing-library/user-event";
import {handleSubmit} from "./EditListFunctions";

describe('EditItem', () => {
  // const submitList = jest.fn().mockImplementation(() => Promise.resolve());
  const setEditedList = jest.fn();
  const setRefresh = jest.fn();
  test('runs handleSubmit', () => {
    handleSubmit(
      {...testList, items: testItems},
      testItems,
      setEditedList,
      setRefresh);
    expect(setEditedList).toHaveBeenCalledWith(blankList);
    expect(setRefresh).toHaveBeenCalledWith(true);
  });
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