import * as Yup from 'yup'
const numericRegEx = /(?=.*[0-9])/
const uppercaseRegEx = /(?=.*[A-Z])/
const re = /^[A-Z/a-z/ \b]+$/
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = Yup.object().shape({
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
    .matches(re, 'Invalid model no!')

    .required('Required!'),

  description: Yup.string()
    .matches(re, 'Description can have letters only!')
    .required('Required'),

  vendor: Yup.string().matches(re, 'Vendor name can have letters only!'),

  rent: Yup.string().matches(numericRegEx, 'Rent can have numbers only'),
  deposit: Yup.string().matches(numericRegEx, 'Deposit can have numbers only'),

  empId: Yup.string()
    .matches(numericRegEx, 'Invalid employee ID')
    .matches(uppercaseRegEx, 'Invalid employee ID ')
    .required('Required'),

  name: Yup.string()
    .matches(re, 'Name can have letters only!')
    .required('Required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Required'),

  location: Yup.string()
    .matches(re, 'Location can have letters only!')

    .required('Required!'),

  phone: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .min(10, 'to short')
    .max(10, 'to long')
    .required('Required')
})
