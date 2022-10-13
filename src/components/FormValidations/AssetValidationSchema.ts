import * as Yup from 'yup'
const numericRegEx = /(?=.*[0-9])/
const re = /^[A-Z/a-z/ \b]+$/
const date = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

export const AssetValidationSchema = Yup.object().shape({
  brandName: Yup.string()
    .matches(re, 'Brand name can have letters only!')
    .required('Brand Name Required'),
  assetType: Yup.string()
    .matches(re, 'Asset type can have letters only!')
    .required('Required'),
  assetName: Yup.string()
    .matches(re, 'Asset name can have letters only!')
    .required('Asset Name Required'),
  category: Yup.string()
    .matches(re, 'Category can have letters only!')
    .required('Category Required'),
  modelNo: Yup.string()
    .matches(numericRegEx, 'Invalid model no!')

    .required('Required!'),
  description: Yup.string()
    .matches(re, 'Description can have letters only!')
    .required('Description Required'),

  vendor: Yup.string()
    .matches(re, 'Vendor can have letters only')
    .required('Vendor Required'),
  rent: Yup.string()
    .matches(numericRegEx, 'Rent can have numbers only!')
    .required('Rent Required'),
  deposit: Yup.string()
    .matches(numericRegEx, 'Rent can have numbers only!')
    .required('Deposit Required'),
  asset_location: Yup.string()
    .matches(re, 'Location can have letters only')
    .required('Location Required'),

  rentStartDate: Yup.date().required('Rent start date required'),

  rentEndDate: Yup.date()

    .required('Rent start date required')
    .min(Yup.ref('rentStartDate'), "End date can't be before Start date")
})
