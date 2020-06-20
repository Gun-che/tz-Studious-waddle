import React from 'react'
import { shallow, mount } from 'enzyme'
import { UserContainer } from '../containers/UsersContainer'

let res = {
  dob: {
    date: "1947-02-28T21:54:18.936Z",
    age: 73
  },
  email: "dusan.guillot@example.com",
  gender: "male",
  location: {
    street: {
      name: 1,
      number: 2
    },
    city: "Rochefort",
    state: "Solothurn",
    country: "Switzerland",
  },
  login: {
    username: "greenfrog151",
    md5: "5bbf83442b2531c94faff7de1534a884",
  },
  name: {
    title: "Monsieur",
    first: "Dusan",
    last: "Guillot"
  },
  phone: "075 076 26 28",
  picture: {
    large: 1, medium: 2,
  }
}


describe('Users container', () => {
  const props = {
    message: null,
    isFetching: false,
    handlerRequest: () => { },
    data: [],
  }
  describe('Users container init', () => {
    const UsersContainer = shallow(<UserContainer {...props} />)

    it('renders properly', () => {
      expect(UsersContainer).toMatchSnapshot()
    })
  })

  // describe('Users container loading', () => {
  //   const nextProps = {
  //     ...props,
  //     isFetching: true,
  //     data: []
  //   }

  //   const usersContainer = mount(<UserContainer {...nextProps} />)

  //   it('render preloader', () => {
  //     expect(usersContainer.find('Loading')).toHaveLength(1)
  //   })

  //   it('renders properly', () => {
  //     expect(usersContainer).toMatchSnapshot()
  //   })
  // })

  describe('Users container render <Users>', () => {
    const nextProps = {
      ...props,
      data: [res]
    }

    const usersContainer = shallow(<UserContainer {...nextProps} />)

    it('render <Users>', () => {
      expect(usersContainer.find('Users')).toHaveLength(1)
    })

    it('renders properly', () => {
      expect(usersContainer).toMatchSnapshot()
    })
  })

  // describe('Users container with error', () => {
  //   const nextProps = {
  //     ...props,
  //     message: {
  //       status: 'Something going wrong',
  //     },
  //     isFetching: false,

  //   }

  //   const usersContainer = mount(<UserContainer {...nextProps} />)

  //   it('render message', () => {
  //     expect(usersContainer.find('h2').text()).toEqual('Something going wrong ' + nextProps.message.status)
  //   })

  //   it('renders properly', () => {
  //     expect(usersContainer).toMatchSnapshot()
  //   })
  // })

  //   describe('Users container init', () => {

  //     const mockFetchGetUsers = jest.fn()
  //     const nextProps = {
  //       ...props,
  //       handlerRequest: mockFetchGetUsers,
  //     }

  //     const UsersContainer = mount(<UserContainer {...nextProps} />)

  //     it('renders properly', () => {
  //       expect(UsersContainer).toMatchSnapshot()
  //     })

  //     it('dispatches the handlerRequest method it receives from props', () => {

  //       expect(mockFetchGetUsers).toHaveBeenCalled()
  //     })
  //   })
})