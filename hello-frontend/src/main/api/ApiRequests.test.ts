import {ToDoList} from "../../dtos/ToDoList";
import axios from "axios";
import {postNewToDoList, getAllToDoLists, putUpdateToDoList, deleteToDoList, deleteToDoItem} from "./ApiRequests";
import {ToDoListJson} from "../../jsons/ToDoListJson";
jest.mock("axios");

// All tests run w/in the describe function
describe("successful API requests", () => {
  // Mocking axios/any other modules in use is required for testing
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  // Creating constants to use throughout tests (don't need to create multiple instances)
  const toDoList: ToDoList = {
    id: null,
    title: "title",
    description: "description",
    items: [
      {
        id: null,
        title: "title",
        description: "description",
      },
    ],
  };
  const toDoLists: ToDoList[] = [toDoList];
  it("GET request is made properly", async () => {
    // Mock the response
    const mockedResponse = { status:200, data:toDoLists };
    // Mock the API call
    mockedAxios.get.mockResolvedValue(mockedResponse);
    // Perform the API call in a mock context
    const returnedData = await getAllToDoLists();
    // Capture the API request's endpoint
    expect(mockedAxios.get).toHaveBeenCalledWith("localhost:9090/data");
    // Compare data to mock response
    expect(returnedData).toBe(mockedResponse.data);
  });
  it("POST request is made properly", async () => {
    const mockResponse = { status:200 };
    mockedAxios.post.mockResolvedValue(mockResponse);
    const returnedData = await postNewToDoList(toDoList);
    expect(mockedAxios.post).toHaveBeenCalledWith("localhost:9090/data", toDoList);
    expect(returnedData).toBe("SAVED");
  });
  it("PUT request is made properly", async () => {
    const mockResponse = { status:200 };
    mockedAxios.put.mockResolvedValue(mockResponse);
    const returnedData = await putUpdateToDoList({...toDoList, id: 1});
    expect(mockedAxios.put).toHaveBeenCalledWith("localhost:9090/data", {...toDoList, id: 1});
    expect(returnedData).toBe("UPDATED");
  });
  it("DELETE LIST request is made properly", async () => {
    const mockResponse = { status:200 };
    mockedAxios.delete.mockResolvedValue(mockResponse);
    const returnedData = await deleteToDoList(1 );
    expect(mockedAxios.delete).toHaveBeenCalledWith("localhost:9090/list/1");
    expect(returnedData).toBe("DELETED");
  });
  it("DELETE ITEM request is made properly", async () => {
    const mockResponse = { status:200 };
    mockedAxios.delete.mockResolvedValue(mockResponse);
    const returnedData = await deleteToDoItem(1 );
    expect(mockedAxios.delete).toHaveBeenCalledWith("localhost:9090/item/1");
    expect(returnedData).toBe("DELETED");
  });
});
describe("failed API requests", () => {
  // Mocking axios/any other modules in use is required for testing
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  // Creating constants to use throughout tests (don't need to create multiple instances)
  const toDoList: ToDoList = {
    id: null,
    title: "title",
    description: "description",
    items: [
      {
        id: null,
        title: "title",
        description: "description",
      },
    ],
  };
  const toDoListJson:ToDoListJson = {toDoLists: []};
  it("GET request is made properly", async () => {
    const mockedResponse = { data:toDoListJson };
    mockedAxios.get.mockResolvedValue(mockedResponse);
    const returnedData = await getAllToDoLists();
    expect(mockedAxios.get).toHaveBeenCalledWith("localhost:9090/data");
    expect(returnedData).toEqual(toDoListJson);
  });
  it("POST request fails", async () => {
    const mockResponse = { status:400 };
    mockedAxios.post.mockResolvedValue(mockResponse);
    const returnedData = await postNewToDoList(toDoList);
    expect(mockedAxios.post).toHaveBeenCalledWith("localhost:9090/data", toDoList);
    expect(returnedData).toBe("POST request failed");
  });
  it("PUT request fails", async () => {
    const mockResponse = { status:400 };
    mockedAxios.put.mockResolvedValue(mockResponse);
    const returnedData = await putUpdateToDoList({...toDoList, id: 1});
    expect(mockedAxios.put).toHaveBeenCalledWith("localhost:9090/data", {...toDoList, id: 1});
    expect(returnedData).toBe("PUT request failed");
  });
  it("DELETE LIST request fails", async () => {
    const mockResponse = { status:400 };
    mockedAxios.delete.mockResolvedValue(mockResponse);
    const returnedData = await deleteToDoList(1 );
    expect(mockedAxios.delete).toHaveBeenCalledWith("localhost:9090/list/1");
    expect(returnedData).toBe("DELETE request failed");
  });
  it("DELETE ITEM request fails", async () => {
    const mockResponse = { status:400 };
    mockedAxios.delete.mockResolvedValue(mockResponse);
    const returnedData = await deleteToDoItem(1 );
    expect(mockedAxios.delete).toHaveBeenCalledWith("localhost:9090/item/1");
    expect(returnedData).toBe("DELETE request failed");
  });
});