import * as Yup from 'yup'
const numericRegEx = /(?=.*[0-9])/
const uppercaseRegEx = /(?=.*[A-Z])/
const re = /^[A-Z/a-z/ \b]+$/
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const EmpValidationSchema = Yup.object().shape({
  empId: Yup.string()
    .matches(numericRegEx, 'Invalid employee ID')
    .matches(uppercaseRegEx, 'Invalid employee ID ')
    .required('EmployeeID Required'),
  name: Yup.string()
    .matches(re, 'Name can have letters only!')
    .required('Full name required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email Required'),
  location: Yup.string()
    .matches(re, 'Location can have letters only!')
    .required('Location Required!'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .min(10, 'to short')
    .max(10, 'to long')
    .required('Phone Number Required')
})
