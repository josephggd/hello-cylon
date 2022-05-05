import {render, screen} from '@testing-library/react';
import React from 'react';
import {ViewLists} from './ViewLists';
import {blankList, testList, testLists} from "../../../dtos/ToDoList";
import userEvent from "@testing-library/user-event";

describe("ViewLists", () => {
  const setLists = jest.fn();
  const setShowInput = jest.fn();
  const setSelectList = jest.fn();

  test("shows no lists", () => {
    render(<ViewLists
      lists={[]}
      setLists={setLists}
      showInput={false}
      setShowInput={setShowInput}
      selectedList={blankList}
      setSelectedList={setSelectList}
    />);
    const viewElement = screen.getByText(/View Lists/i);
    expect(viewElement).toBeInTheDocument();
    const editElement = screen.getByText(/No lists to show/i);
    expect(editElement).toBeInTheDocument();
  });
  test("shows/delete lists", () => {
    render(<ViewLists
      lists={testLists}
      setLists={setLists}
      showInput={false}
      setShowInput={setShowInput}
      selectedList={blankList}
      setSelectedList={setSelectList}
    />);
    const editElement = screen.getByText(/test : test/i);
    expect(editElement).toBeInTheDocument();
    const deleteButton = screen.getByText(/DELETE/i);

    userEvent.click(editElement);
    expect(setSelectList).toHaveBeenCalledWith(testList);
    expect(setShowInput).toHaveBeenCalledWith(true);

    userEvent.click(deleteButton);
    expect(setSelectList).toHaveBeenCalledWith(testList);
    expect(setShowInput).toHaveBeenCalledWith(true);
  });
  test("shows/delete lists & keep edit hidden", () => {
    render(<ViewLists
      lists={testLists}
      setLists={setLists}
      showInput={true}
      setShowInput={setShowInput}
      selectedList={blankList}
      setSelectedList={setSelectList}
    />);
    const editElement = screen.getByText(/test : test/i);
    expect(editElement).toBeInTheDocument();
    const deleteButton = screen.getByText(/DELETE/i);

    userEvent.click(editElement);
    expect(setSelectList).toHaveBeenCalledWith(testList);

    userEvent.click(deleteButton);
    expect(setSelectList).toHaveBeenCalledWith(testList);
  });
});
