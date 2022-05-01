import {ToDoList} from "../../dtos/ToDoList";
import axios from "axios";
import {postNewToDoList, getAllToDoLists} from "./ApiRequests";
jest.mock("axios");

// All tests run w/in the describe function
describe("tests API requests", () => {
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
    const mockedResponse = {data:toDoLists};
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
    const mockResponse = { data : "SAVED"};
    mockedAxios.post.mockResolvedValue(mockResponse);
    const returnedData = await postNewToDoList(toDoList);
    expect(mockedAxios.post).toHaveBeenCalledWith("localhost:9090/data", toDoList);
    expect(returnedData).toBe("SAVED");
  });
});