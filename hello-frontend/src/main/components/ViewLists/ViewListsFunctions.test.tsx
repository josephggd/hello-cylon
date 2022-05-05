import { render, screen } from '@testing-library/react';
import React from 'react';
import {ViewLists} from './ViewLists';
import {blankList, testList, testLists} from "../../../dtos/ToDoList";
import userEvent from "@testing-library/user-event";
import {deleteList} from "./ViewListsFunctions";
import assert from "assert";
import {deleteToDoList} from "../../api/ApiRequests";

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
