import {
  LOADING_DATA,
  SET_ASSETS,
  SET_EMPLOYEES,
  SET_EMPLOYEE_ASSETS_DETAILS,
  SET_EMPLOYEE_DETAILS,
  SET_SERVICE_DETAILS,
  SET_SERVICE_TICKET_DETAILS
} from '../types'
import adminReducer from './AdminReducer'

export const test = describe('Reducer test', () => {
  it('should add Loading = true', () => {
    const res = adminReducer(undefined, { type: LOADING_DATA })
    expect(res.loading).toBe(true)
  })

  it('should show employee list', () => {
    const res = adminReducer(undefined, {
      type: SET_EMPLOYEES,
      payload: {
        meassage: 'emp',
        data: [
          {
            empId: '1',
            name: 'test',
            email: 'tes@gmai.com',
            phone: '9089786756',
            location: 'pune',
            isAdmin: false,
            jobTitle: ''
          }
        ]
      }
    })
    expect(res.employees.length).toBe(1)
    expect(res.loading).toBe(false)
  })

  it('should show asset list', () => {
    const res = adminReducer(undefined, {
      type: SET_ASSETS,
      payload: {
        message: 'asset',
        data: [
          {
            assetId: 45,
            brandName: '67',
            name: 'Lenthink',
            assetType: 'Hardware',
            category: 'Laptop',
            modelNo: 6,
            description: 'good',
            status: 'available',
            usability: 'usable',
            addedTime: '20-09-2022',
            vendor: 'Asxik',
            rent: 5900,
            deposit: 4000,
            received_date: '20-09-2022',
            asset_location: 'Pune'
          }
        ]
      }
    })
    expect(res.assets.length).toBe(1)
    expect(res.loading).toBe(false)
  })
})

it('should show Ticket list', () => {
  const res = adminReducer(undefined, {
    type: SET_SERVICE_DETAILS,
    payload: {
      message: 'sevice',
      data: [
        {
          empId: '9',
          assetId: 4,
          ticketId: 3,
          title: 'request',
          description: 'need',
          ticketStatus: 'active',
          createdAt: '05-08-2022'
        }
      ]
    }
  })
  expect(res.serviceDetails.length).toBe(1)
  expect(res.loading).toBe(false)
})

it('should show single Ticket details', () => {
  const res = adminReducer(undefined, {
    type: SET_SERVICE_TICKET_DETAILS,
    payload: {
      message: 'sevice',
      data: {
        empId: '9',
        assetId: 4,
        ticketId: 3,
        title: 'request',
        description: 'need',
        ticketStatus: 'active',
        createdAt: '05-08-2022'
      }
    }
  })
  expect(res.serviceticketdetails.ticketId).toBe(3)
  expect(res.loading).toBe(false)
})

it('should show employee Details', () => {
  const res = adminReducer(undefined, {
    type: SET_EMPLOYEE_DETAILS,
    payload: {
      message: 'emp',
      data: {
        empId: '8',
        name: 'test',
        email: 'tes@gmai.com',
        phone: '9089786756',
        location: 'pune',
        isAdmin: false,
        jobTitle: ''
      }
    }
  })
  expect(res.employeeDetails.empId).toBe('8')
  expect(res.employeeDetails.name).toBe('test')
  expect(res.employeeDetails.email).toBe('tes@gmai.com')
  expect(res.employeeDetails.phone).toBe('9089786756')
  expect(res.loading).toBe(false)
})

it('should show asset Details', () => {
  const res = adminReducer(undefined, {
    type: SET_EMPLOYEE_ASSETS_DETAILS,
    payload: {
      message: 'asset Details',
      data: [
        {
          assetId: 45,
          name: 'ThinkNote',
          category: 'Laptop',
          modelno: 67,
          allocationTime: '05-08-2022'
        }
      ]
    }
  })
  expect(res.employeeassetsdetails.length).toBe(1)
  expect(res.loading).toBe(false)
})
