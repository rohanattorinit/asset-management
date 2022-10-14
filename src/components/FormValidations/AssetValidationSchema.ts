import * as Yup from 'yup'
const numericRegEx = /(?=.*[0-9])/
const re = /^[A-Z/a-z/ \b]+$/
const maxMin = /^[1-9]\d*$/

export const AssetValidationSchema = Yup.object().shape({
  brandName: Yup.string()
    .matches(re, 'Brand name can have letters only!')
    .required('Brand Name Required'),
  assetType: Yup.string()
    .matches(re, 'Asset type can have letters only!')
    .required('Required'),
  assetName: Yup.string().required('Asset Name Required'),
  category: Yup.string()
    .matches(re, 'Category can have letters only!')
    .required('Category Required'),

  modelNo: Yup.string()
    .matches(numericRegEx, 'Invalid model no!')

    .required('Required!'),
  description: Yup.string()
    .matches(re, 'Description can have letters only!')
    .required('Description Required'),
  asset_location: Yup.string()
    .matches(re, 'Location can have letters only')
    .required('Location Required'),

  //isrented
  vendor: Yup.string()
    .matches(re, 'Vendor can have letters only')
    .when('isRented', {
      is: true,
      then: Yup.string().required('Vendor Required'),
      otherwise: Yup.string(),
    }),

  rent: Yup.string()
    .matches(maxMin, 'Enter valid rent amount!')
    .when('isRented', {
      is: true,
      then: Yup.string().required('Rent Required'),
      otherwise: Yup.string(),
    }),

  deposit: Yup.string()
    .matches(maxMin, 'Enter valid deposit amount!')
    .when('isRented', {
      is: true,
      then: Yup.string().required('Deposit Required'),
      otherwise: Yup.string(),
    }),

  rentStartDate: Yup.date().when('isRented', {
    is: true,
    then: Yup.date().required('Rent start date required'),
    otherwise: Yup.date().nullable(),
  }),


  rentEndDate: Yup.date()
    .when('isRented', {
      is: (isRented: boolean) => {
        return !!isRented
      },
      then: Yup.date().required('Rent end date is required'),
      otherwise: Yup.date().nullable()
    })


})
