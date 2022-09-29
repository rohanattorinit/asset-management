import * as Yup from 'yup'
const numericRegEx = /(?=.*[0-9])/
const re = /^[A-Z/a-z/ \b]+$/

export const AssetValidationSchema = Yup.object().shape({
  brandName: Yup.string()
    .matches(re, 'Brand name can have letters only!')
    .required('Required'),
  assetType: Yup.string()
    .matches(re, 'Asset type can have letters only!')
    .required('Required'),
  assetName: Yup.string()
    .matches(re, 'Asset name can have letters only!')
    .required('Required'),
  category: Yup.string()
    .matches(re, 'Category can have letters only!')
    .required('Required'),
  modelNo: Yup.string()
    .matches(numericRegEx, 'Invalid model no!')
    .matches(numericRegEx, 'Invalid model no!')
    .required('Required!'),
  description: Yup.string()
    .matches(re, 'Description can have letters only!')
    .required('Required')
})
