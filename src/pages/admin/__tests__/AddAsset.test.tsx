import { fireEvent, render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";
import { ProviderWrapper, RouterWrapper } from "../../../testUtils";
import AddAsset from "../AddAsset";

export const addEmployeeTests = describe("Add Asset Form Tests", () => {
  //testcase for brand name, category and asset name, description
  it("should show validation messages forbrand name", async () => {
    render(
      <ProviderWrapper>
        <RouterWrapper>
          <Route path="/" element={<AddAsset />} />
        </RouterWrapper>
      </ProviderWrapper>
    );

    const addAssetButton = await screen.findByTestId("add_asset_button");
    await fireEvent.click(addAssetButton);
    const errorMessage = await screen.findByText("Brand Name Required");
    expect(errorMessage.textContent).toBe("Brand Name Required");

    const errorMessageforAssetName = await screen.findByText(
      "Asset Name Required"
    );
    expect(errorMessageforAssetName.textContent).toBe("Asset Name Required");

    const errorMessageforCategory = await screen.findByText(
      "Category Required"
    );
    expect(errorMessageforCategory.textContent).toBe("Category Required");

    const errorMessageforDescription = await screen.findByText(
      "Description Required"
    );
    expect(errorMessageforDescription.textContent).toBe("Description Required");

    const errorMessageforLocation = await screen.findByText(
      "Location Required"
    );
    expect(errorMessageforLocation.textContent).toBe("Location Required");
  });

  it("should show invalid brand name error", async () => {
    render(
      <ProviderWrapper>
        <RouterWrapper>
          <Route path="/" element={<AddAsset />} />
        </RouterWrapper>
      </ProviderWrapper>
    );
    const brandNameTextField = screen.getByRole("textbox", {
      name: /Brand Name/i,
    });
    await fireEvent.change(brandNameTextField, {
      target: { value: "123", name: "brandName", id: "brandName" },
    });
    const addAssetButton = await screen.findByTestId("add_asset_button");
    await fireEvent.click(addAssetButton);
    const errorMessage = await screen.findByText(
      "Brand name can have letters only!"
    );
    expect(errorMessage.textContent).toBe("Brand name can have letters only!");
  });
});
