import React from 'react'
import { Button, Image, Menu, Segment } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import DonorDashBoard from './DonorDashBoard'

const MenuHeader = () => {
  return (
    <Segment inverted>
      <Menu inverted>
        <Menu.Item as={Link} to={{ pathname: '/' }}>
          <Image src='./img/wecare_logo.png' size='medium' />
        </Menu.Item>
        <Menu.Item
        id='foodbag'
        name='create foodbag'
        as={NavLink}
        to={{ pathname: '/foodbag'}}
        >
          
        </Menu.Item>
        <Menu.Item position='right'>
          <RegistrationForm />
          <Button size='small' position='middle' color='blue'>
            Login Here
          </Button>
        </Menu.Item>
      </Menu>
    </Segment>
  )
}

export default MenuHeader
