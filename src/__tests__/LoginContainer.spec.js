import React from 'react'
import { shallow, mount } from 'enzyme'
import { Login } from '../containers/LoginConteiner'

describe('Login', () => {
  const mockLogin = jest.fn();

  const initState = {
    login: '',
    pass: '',
  }

  const props = {
    success: false,
    isFetching: false,
    login: '',
    message: '',
    loggedIn: false,
    handlerLogin: mockLogin,
    user: ''
  }

  const loginContainer = shallow(<Login {...props} />)


  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation(() => [initState, setState]);

  it('renders properly', () => {
    expect(loginContainer).toMatchSnapshot()
  })

  // it('initialize login with init state', () => {
  //   expect(initState).toEqual(initState)
  // })
})