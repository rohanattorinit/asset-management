import moment from "moment";
import * as Yup from "yup";
const numericRegEx = /^[A-Z/a-z/0-9 \b]+$/;
const re = /^[A-Z/a-z/ \b]+$/;
const amount = /[0-9]+([,.][0-9]{1,2})?/;
const time = moment().format("MMMM DD YYYY, hh:mm:ss");
const currentYear = new Date().getFullYear();

export const AssetValidationSchema = Yup.object().shape({
  status: Yup.string().required("Required"),

  brandName: Yup.string()
    .matches(re, "Brand name can have letters only!")
    .required("Brand Name Required"),
  assetType: Yup.string()
    .matches(re, "Asset type can have letters only!")
    .required("Required"),
  assetName: Yup.string().required("Asset Name Required"),

  category: Yup.string()
    .matches(re, "Category can have letters only!")
    .required("Category Required"),

  modelNo: Yup.string()
    .matches(numericRegEx, "Invalid model no!")

    .required("Required!"),
  description: Yup.string().required("Description Required"),
  asset_location: Yup.string()
    .matches(re, "Location can have letters only")
    .required("Location Required"),

  //isrented
  vendor: Yup.string()
    .matches(re, "Vendor can have letters only")
    .when("isRented", {
      is: true,
      then: Yup.string().required("Vendor Required"),
      otherwise: Yup.string(),
    }),

  rent: Yup.string()
    .matches(amount, "Enter valid rent amount!")
    .when("isRented", {
      is: true,
      then: Yup.string().required("Rent Required"),
      otherwise: Yup.string(),
    }),

  deposit: Yup.string()
    .matches(amount, "Enter valid deposit amount!")
    .when("isRented", {
      is: true,
      then: Yup.string().required("Deposit Required"),
      otherwise: Yup.string(),
    }),

  rentStartDate: Yup.date().when("isRented", {
    is: true,
    then: Yup.date().required("Rent start date required"),
    otherwise: Yup.date().nullable(),
  }),

  rentEndDate: Yup.date().when("isRented", {
    is: (isRented: boolean) => {
      return !!isRented;
    },
    then: Yup.date()
      .required("Rent end date is required")
      .test(
        "biggerThanStart",
        "End date should be after start date",
        (value: any, schema: any) => {
          return value?.getTime() > schema.parent.rentStartDate?.getTime();
        }
      ),
    otherwise: Yup.date().nullable(),
  }),

  received_date: Yup.date().max(time, "Future dates can not be selected"),
  make_year: Yup.number().max(
    currentYear,
    "Make year can not be in the future"
  )
  .required("Required!"),
  imeiNo: Yup.string().matches(numericRegEx, "Invalid IMEI no!"),
});
