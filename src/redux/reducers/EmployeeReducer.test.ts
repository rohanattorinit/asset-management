import { GET_ADD_NOTE, SET_EMPLOYEE, SET_EMPTICKETS } from "./../types";
import employeeReducer from "./EmployeeReducer";
import { LOADING_DATA, SET_EMPLOYEE_ASSETS } from "../types";
export const test = describe("Reducer test", () => {
  it("should add Loading = true", () => {
    const res = employeeReducer(undefined, { type: LOADING_DATA });
    expect(res.loading).toBe(true);
  });
  it("should show asset list", () => {
    const res = employeeReducer(undefined, {
      type: SET_EMPLOYEE_ASSETS,
      payload: {
        message: "asset",
        data: [
          {
            assetId: 2,
            name: "John",
            category: "software",
            modelno: 2345,
            description: "string",
            allocationTime: "string",
          },
        ],
      },
    });
    expect(res.assets.length).toBe(1);
    expect(res.loading).toBe(false);
  });

  it("should set employee list", () => {
    const res = employeeReducer(undefined, {
      type: SET_EMPLOYEE,
      payload: {
        data: {
          empId: "EMP101",
          name: "John",
          email: "john@torinit.ca",
          phone: "9632568975",
          location: "Toronto",
          isAdmin: false,
          jobTitle: "senior software engineer",
        },
      },
    });

    expect(res.employee.isAdmin).toBe(false);
  });

  it("should set employee tickets", () => {
    const res = employeeReducer(undefined, {
      type: SET_EMPTICKETS,

      payload: {
        meassage: "ticket",
        data: [
          {
            ticketId: 2345,
            empId: "rahul@torinit.ca",
            assetId: 123,
            title: "title",
            description: "desc",
            ticketStatus: "active",
            createdAt: "string",
            note: "nothhing",
          },
        ],
      },
    });

    expect(res.tickets.length).toBe(1);
  });

  it("should show get add note", () => {
    const res = employeeReducer(undefined, {
      type: GET_ADD_NOTE,
      payload: {
        message: "ticket",
        data: [
          {
            ticketId: 123,
            note: "Updated",
            createdAt: "22-09-2022",
          },
        ],
      },
    });
    expect(res.noteDetails.length).toBe(1);
  });
});
