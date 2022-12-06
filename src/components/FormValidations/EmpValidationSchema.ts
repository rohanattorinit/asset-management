import * as Yup from 'yup'
const numericRegEx = /(?=.*[0-9])/
const uppercaseRegEx = /(?=.*[A-Z])/
const re =/^[a-zA-Z ]+$/
const phoneRegExp = /^((?!(0))[0-9]{10})$/

export const EmpValidationSchema = Yup.object().shape({
  empId: Yup.string()
    .matches(numericRegEx, 'Invalid employee ID')
    .matches(uppercaseRegEx, 'Invalid employee ID ')
    .required('EmployeeID Required'),
  name: Yup.string()
    .matches(re, 'Name can have letters only!').min(3,'Name is too small').max(36,'Name is too long')
    .required('Full name required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email Required'),
  location: Yup.string()
    .matches(re, 'Location can have letters only!').min(3,'Location is too small').max(28,'Location is too long')
    .required('Location Required!'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .min(10, 'to short')
    .max(10, 'to long')
    .required('Phone Number Required')
})
