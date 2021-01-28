import React from 'react'
import { Image, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MenuHeader = () => {
  return (
    <Segment inverted>
      <Menu inverted>
        <Image src='./img/wecare_logo.png' size="medium" />
        <Menu.Item as={Link} to={{ pathname: '/' }}>
        </Menu.Item>
        <Menu.Item position='right'></Menu.Item>
      </Menu>
    </Segment>
  )
}

export default MenuHeader
