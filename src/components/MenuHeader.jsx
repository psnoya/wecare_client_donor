import React from 'react'
import { useSelector } from "react-redux";
import { Button, Image, Menu, Segment } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import CreateFoodBagForm from './CreateFoodBagForm'

const MenuHeader = () => {
  const currentUser = useSelector(state => state)
  return (
    <Segment inverted>
      <Menu inverted>
        <Menu.Item as={Link} to={{ pathname: '/' }}>
          <Image src='./img/wecare_logo.png' size='medium' />
        </Menu.Item>
        {/* <Menu.Item
          id='foodbag'
          name='create foodbag'
          as={NavLink}
          to={{ pathname: '/foodbag' }}
        ></Menu.Item> */}
        <Menu.Item position='right'>
          {!currentUser && <RegistrationForm />}
          {currentUser && currentUser.data.role === 'registered_user' && (
            <CreateFoodBagForm />
          )}
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
