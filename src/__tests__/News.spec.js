import React from 'react'
import { shallow } from 'enzyme'
import News from '../components/News/News'

describe('News component', () => {
  const props = {
    data: [
      {
        id: 1,
        title: 'a',
        text: 'b',
      },
      {
        id: 2,
        title: 'a2',
        text: 'b2',
      }
    ]
  }
  describe('News component render', () => {
    const news = shallow(<News {...props} />)

    it('renders properly', () => {
      expect(news).toMatchSnapshot()
    })

    it('render <p>', () => {
      expect(news.find('p')).toHaveLength(props.data.length)
    })

    it('renders inner <p>', () => {
      expect(news
        .find('p')
        .first()
        .text()).toEqual(props.data[0].text)
    })

    it('render <h2>', () => {
      expect(news.find('h2')).toHaveLength(props.data.length)
    })

    it('renders inner <h2>', () => {
      expect(news
        .find('h2')
        .first()
        .text()).toEqual(props.data[0].title)
    })
  })
})