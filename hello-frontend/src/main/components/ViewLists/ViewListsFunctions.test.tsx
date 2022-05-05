import React from 'react';
import {ViewLists} from './ViewLists';
import {testList, testLists} from "../../../dtos/ToDoList";
import {deleteList} from "./ViewListsFunctions";

describe("ViewLists", () => {

  test("shows no lists", () => {
    const list = testList;
    const lists = testLists;
    const setShowInput = jest.fn();
    const setSelectedList = jest.fn();
    const setLists = jest.fn();
    const deleteMock = jest.fn().mockImplementation(() => Promise.resolve());
    deleteList(
      deleteMock,
      list,
      lists,
      setShowInput,
      setSelectedList,
      setLists);
    expect(deleteMock).toHaveBeenCalledWith(list.id);
  });
});
