import {ToDoList} from "../../dtos/ToDoList";
import axios from "axios";
import {
  deleteItemUrl,
  deleteListUrl,
  deleteToDoItem,
  deleteToDoList,
  failedToDelete,
  failedToPost,
  failedToPut,
  getAllToDoLists,
  getListsUrl,
  postNewItemUrl,
  postNewListUrl,
  postNewToDoItem,
  postNewToDoList,
  putItemUrl,
  putListUrl,
  putUpdateToDoItem,
  putUpdateToDoList
} from "./ApiRequests";
import {ToDoListJson} from "../../jsons/ToDoListJson";
import {ToDoItem} from "../../dtos/ToDoItem";

jest.mock("axios");

const toDoItem: ToDoItem = {
  id: null,
  title: "title",
  description: "description",
};
const toDoList: ToDoList = {
  id: null,
  title: "title",
  description: "description",
  items: [
    toDoItem,
  ],
};
const toDoLists: ToDoList[] = [toDoList];
// All tests run w/in the describe function
describe("successful API requests", () => {
  // Mocking axios/any other modules in use is required for testing
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  // Creating constants to use throughout tests (don't need to create multiple instances)
  it("GET request is made properly", async () => {
    // Mock the response
    const mockedResponse = { status:200, data:toDoLists };
    // Mock the API call
    mockedAxios.get.mockResolvedValue(mockedResponse);
    // Perform the API call in a mock context
    const returnedData = await getAllToDoLists();
    // Capture the API request's endpoint
    expect(mockedAxios.get).toHaveBeenCalledWith(getListsUrl);
    // Compare data to mock response
    expect(returnedData).toBe(mockedResponse.data);
  });
  it("POST list request is made properly", async () => {
    const mockResponse = { status:200 };
    mockedAxios.post.mockResolvedValue(mockResponse);
    const returnedData = await postNewToDoList(toDoList);
    expect(mockedAxios.post).toHaveBeenCalledWith(postNewListUrl, toDoList);
    expect(returnedData).toBe("SAVED");
  });
  it("POST item request is made properly", async () => {
    const mockResponse = { status:200 };
    mockedAxios.post.mockResolvedValue(mockResponse);
    const returnedData = await postNewToDoItem(toDoItem);
    expect(mockedAxios.post).toHaveBeenCalledWith(postNewItemUrl, toDoItem);
    expect(returnedData).toBe("SAVED");
  });
  it("PUT request is made properly", async () => {
    const mockResponse = { status:200 };
    mockedAxios.put.mockResolvedValue(mockResponse);
    const returnedData = await putUpdateToDoList({...toDoList, id: 1});
    expect(mockedAxios.put).toHaveBeenCalledWith(putListUrl, {...toDoList, id: 1});
    expect(returnedData).toBe("UPDATED");
  });
  it("PUT item request is made properly", async () => {
    const mockResponse = { status:200 };
    mockedAxios.put.mockResolvedValue(mockResponse);
    const returnedData = await putUpdateToDoItem({...toDoItem, id: 1});
    expect(mockedAxios.put).toHaveBeenCalledWith(putItemUrl, {...toDoItem, id: 1});
    expect(returnedData).toBe("UPDATED");
  });
  it("DELETE LIST request is made properly", async () => {
    const mockResponse = { status:200 };
    mockedAxios.delete.mockResolvedValue(mockResponse);
    const returnedData = await deleteToDoList(1 );
    expect(mockedAxios.delete).toHaveBeenCalledWith(deleteListUrl+"1");
    expect(returnedData).toBe("DELETED");
  });
  it("DELETE ITEM request is made properly", async () => {
    const mockResponse = { status:200 };
    mockedAxios.delete.mockResolvedValue(mockResponse);
    const returnedData = await deleteToDoItem(1 );
    expect(mockedAxios.delete).toHaveBeenCalledWith(deleteItemUrl+"1");
    expect(returnedData).toBe("DELETED");
  });
});
describe("failed API requests", () => {
  // In order to fully test our code we'll be testing for scenarios where the API call fails
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const toDoListJson:ToDoListJson = {toDoLists: []};
  it("GET request is made properly", async () => {
    const mockedResponse = { data:toDoListJson };
    mockedAxios.get.mockResolvedValue(mockedResponse);
    const returnedData = await getAllToDoLists();
    expect(mockedAxios.get).toHaveBeenCalledWith(getListsUrl);
    expect(returnedData).toEqual(toDoListJson);
  });
  it("POST list request fails", async () => {
    const mockResponse = { status:400 };
    mockedAxios.post.mockResolvedValue(mockResponse);
    const returnedData = await postNewToDoList(toDoList);
    expect(mockedAxios.post).toHaveBeenCalledWith(postNewListUrl, toDoList);
    expect(returnedData).toBe(failedToPost);
  });
  it("POST item request fails", async () => {
    const mockResponse = { status:400 };
    mockedAxios.post.mockResolvedValue(mockResponse);
    const returnedData = await postNewToDoItem(toDoList);
    expect(mockedAxios.post).toHaveBeenCalledWith(postNewItemUrl, toDoList);
    expect(returnedData).toBe(failedToPost);
  });
  it("PUT list request fails", async () => {
    const mockResponse = { status:400 };
    mockedAxios.put.mockResolvedValue(mockResponse);
    const returnedData = await putUpdateToDoList({...toDoList, id: 1});
    expect(mockedAxios.put).toHaveBeenCalledWith(putListUrl, {...toDoList, id: 1});
    expect(returnedData).toBe(failedToPut);
  });
  it("PUT item request fails", async () => {
    const mockResponse = { status:400 };
    mockedAxios.put.mockResolvedValue(mockResponse);
    const returnedData = await putUpdateToDoItem({...toDoItem, id: 1});
    expect(mockedAxios.put).toHaveBeenCalledWith(putItemUrl, {...toDoItem, id: 1});
    expect(returnedData).toBe(failedToPut);
  });
  it("DELETE LIST request fails", async () => {
    const mockResponse = { status:400 };
    mockedAxios.delete.mockResolvedValue(mockResponse);
    const returnedData = await deleteToDoList(1 );
    expect(mockedAxios.delete).toHaveBeenCalledWith(deleteListUrl+"1");
    expect(returnedData).toBe(failedToDelete);
  });
  it("DELETE ITEM request fails", async () => {
    const mockResponse = { status:400 };
    mockedAxios.delete.mockResolvedValue(mockResponse);
    const returnedData = await deleteToDoItem(1 );
    expect(mockedAxios.delete).toHaveBeenCalledWith(deleteItemUrl+"1");
    expect(returnedData).toBe(failedToDelete);
  });
});