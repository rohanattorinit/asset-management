import { fireEvent, render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";
import { ProviderWrapper, RouterWrapper } from "../../../testUtils";
import AddEmployee from "../AddEmployee";

export const addEmployeeTests = describe("Add Employee Form Tests", () => {
  //test case for empid
  it("should show validation messages for employee ID", async () => {
    render(
      <ProviderWrapper>
        <RouterWrapper>
          <Route path="/" element={<AddEmployee />} />
        </RouterWrapper>
      </ProviderWrapper>
    );

    const addEmployeeButton = await screen.findByTestId("add_employee_button");
    await fireEvent.click(addEmployeeButton);
    const errorMessage = await screen.findByText("EmployeeID Required");
    expect(errorMessage.textContent).toBe("EmployeeID Required");
  });

  //testcase for full name
  it("should show validation messages for full name", async () => {
    render(
      <ProviderWrapper>
        <RouterWrapper>
          <Route path="/" element={<AddEmployee />} />
        </RouterWrapper>
      </ProviderWrapper>
    );

    const addEmployeeButton = await screen.findByTestId("add_employee_button");
    await fireEvent.click(addEmployeeButton);
    const errorMessage = await screen.findByText("Full name required");
    expect(errorMessage.textContent).toBe("Full name required");
  });

  it("should show invalid fullname error", async () => {
    render(
      <ProviderWrapper>
        <RouterWrapper>
          <Route path="/" element={<AddEmployee />} />
        </RouterWrapper>
      </ProviderWrapper>
    );
    const fullNameTextField = screen.getByRole("textbox", { name: /name/i });
    await fireEvent.change(fullNameTextField, {
      target: { value: "123", name: "name", id: "name" },
    });
    const addEmployeeButton = await screen.findByTestId("add_employee_button");
    await fireEvent.click(addEmployeeButton);
    const errorMessage = await screen.findByText("Name can have letters only!");
    expect(errorMessage.textContent).toBe("Name can have letters only!");
  });

  //test case for jobtitle select dropdown

  it("should display the correct number of options", () => {
    render(
      <ProviderWrapper>
        <RouterWrapper>
          <Route path="/" element={<AddEmployee />} />
        </RouterWrapper>
      </ProviderWrapper>
    );

    expect(screen.getAllByRole("option").length).toBe(1);
  });

  //testcase for email

  it("should show validation message for email", async () => {
    render(
      <ProviderWrapper>
        <RouterWrapper>
          <Route path="/" element={<AddEmployee />} />
        </RouterWrapper>
      </ProviderWrapper>
    );

    const addEmployeeButton = await screen.findByTestId("add_employee_button");
    await fireEvent.click(addEmployeeButton);
    const errorMessage = await screen.findByText("Email Required");
    expect(errorMessage.textContent).toBe("Email Required");
  });
});

it("should show invalid message for email", async () => {
  render(
    <ProviderWrapper>
      <RouterWrapper>
        <Route path="/" element={<AddEmployee />} />
      </RouterWrapper>
    </ProviderWrapper>
  );

  const emailTextField = screen.getByRole("textbox", { name: /email/i });
  await fireEvent.change(emailTextField, {
    target: { value: "123", name: "email", id: "email" },
  });
  const addEmployeeButton = await screen.findByTestId("add_employee_button");
  await fireEvent.click(addEmployeeButton);
  const errorMessage = await screen.findByText("Invalid email");
  expect(errorMessage.textContent).toBe("Invalid email");
});

//testcase for phone number

it("should show validation message for phone number", async () => {
  render(
    <ProviderWrapper>
      <RouterWrapper>
        <Route path="/" element={<AddEmployee />} />
      </RouterWrapper>
    </ProviderWrapper>
  );

  const addEmployeeButton = await screen.findByTestId("add_employee_button");
  await fireEvent.click(addEmployeeButton);
  const errorMessage = await screen.findByText("Phone Number Required");
  expect(errorMessage.textContent).toBe("Phone Number Required");
});
