import {EditItem} from "./EditItem";
import {render} from '@testing-library/react';
import {testList} from "../../../dtos/ToDoList";
import {testItem, testItems} from "../../../dtos/ToDoItem";
import React from "react";

describe('EditItem', () => {
  test('renders without crashing', () => {
    const setEditedList = jest.fn();
    render(<EditItem
      index={0}
      editedList={testList}
      setEditedList={setEditedList}
      item={testItem}
      items={testItems}
    />);
  });
});