import {EditList} from "./EditList";
import {render, screen} from '@testing-library/react';
import {blankList, testList, testLists} from "../../../dtos/ToDoList";
import {blankItem, testItem} from "../../../dtos/ToDoItem";
import React from "react";
import userEvent from "@testing-library/user-event";

describe('EditItem', () => {
  const setLists = jest.fn();
  const setRefresh = jest.fn();
  const setShowInput = jest.fn();
  const setEditedList = jest.fn();
  const handleSubmit = jest.fn();
  const submitList = jest.fn();
  test('renders & shows/hides', () => {
    render(<EditList
      // submitList={submitList}
      lists={testLists}
      setLists={setLists}
      refresh={false}
      setRefresh={setRefresh}
      showInput={false}
      setShowInput={setShowInput}
      editedList={testList}
      setEditedList={setEditedList}
      handleSubmit={handleSubmit}
    />);
    expect(screen.getByTestId("edit-list-header")).toBeInTheDocument();
    const newListButton = screen.getByTestId('new-list-button');
    expect(newListButton).toBeInTheDocument();

    newListButton.click();
    expect(setShowInput).toHaveBeenCalledWith(true);
    expect(setEditedList).toHaveBeenCalledWith(blankList);
  });
  test('renders & adds', () => {
    render(<EditList
      // submitList={submitList}
      lists={testLists}
      setLists={setLists}
      refresh={false}
      setRefresh={setRefresh}
      showInput={true}
      setShowInput={setShowInput}
      editedList={testList}
      setEditedList={setEditedList}
      handleSubmit={handleSubmit}
    />);
    expect(screen.getByTestId("edit-list-header")).toBeInTheDocument();
    const addButton = screen.getByTestId('add-button');
    expect(addButton).toBeInTheDocument();

    addButton.click();
    expect(setEditedList).toHaveBeenCalledWith(
      {...testList, items: [blankItem]});
  });
  test('will not add with blank titles', () => {
    render(<EditList
      // submitList={submitList}
      lists={testLists}
      setLists={setLists}
      refresh={false}
      setRefresh={setRefresh}
      showInput={true}
      setShowInput={setShowInput}
      editedList={{...testList, items: [blankItem]}}
      setEditedList={setEditedList}
      handleSubmit={handleSubmit}
    />);
    expect(screen.getByTestId("edit-list-header")).toBeInTheDocument();
    const addButton = screen.getByTestId('add-button');
    expect(addButton).toBeInTheDocument();

    addButton.click();
    expect(setEditedList).not.toHaveBeenCalled();
  });
  test('renders & saves', () => {
    render(<EditList
      // submitList={submitList}
      lists={testLists}
      setLists={setLists}
      refresh={false}
      setRefresh={setRefresh}
      showInput={true}
      setShowInput={setShowInput}
      editedList={testList}
      setEditedList={setEditedList}
      handleSubmit={handleSubmit}
    />);
    const saveButton = screen.getByTestId('save-button');
    expect(saveButton).toBeInTheDocument();

    saveButton.click();
    expect(handleSubmit).toHaveBeenCalledWith(
      testList,
      [],
      setEditedList,
      setRefresh
    );
  });
  test('changes to list', () => {
    render(<EditList
      // submitList={submitList}
      lists={testLists}
      setLists={setLists}
      refresh={false}
      setRefresh={setRefresh}
      showInput={true}
      setShowInput={setShowInput}
      editedList={testList}
      setEditedList={setEditedList}
      handleSubmit={handleSubmit}
    />);
    // test that onChange works
    const [titleText, descrText] = screen.getAllByRole('textbox');
    expect(titleText).toBeInTheDocument();
    expect(descrText).toBeInTheDocument();
    userEvent.type(titleText, "t");
    expect(setEditedList).toHaveBeenCalledWith(
      {...testList, title: "testt"}
    );
    userEvent.type(descrText, "d");
    expect(setEditedList).toHaveBeenCalledWith(
      {...testList, description: "testd"}
    );
  });
  test("shows items", () => {
    render(<EditList
      // submitList={submitList}
      lists={testLists}
      setLists={setLists}
      refresh={false}
      setRefresh={setRefresh}
      showInput={true}
      setShowInput={setShowInput}
      editedList={{...testList, items: [testItem]}}
      setEditedList={setEditedList}
      handleSubmit={handleSubmit}
    />);
    const firstTitle = screen.getByTestId("title-input");
    expect(firstTitle).toBeInTheDocument();
    const firstDescription = screen.getByTestId("description-input");
    expect(firstDescription).toBeInTheDocument();
  });
});