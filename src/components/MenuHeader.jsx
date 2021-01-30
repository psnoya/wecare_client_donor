import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Image, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'

const MenuHeader = () => {
  const currentUser = useSelector(state => state.currentUser)
  return (
    <Segment inverted>
      <Menu inverted>
        <Menu.Item as={Link} to={{ pathname: '/' }}>
          <Image src='./img/wecare_logo.png' size='medium' />
        </Menu.Item>
        <Menu.Item position='right'>
          {!currentUser && <RegistrationForm />}
          {currentUser && 
          <Button 
          color='violet'
          >
            Log out Dummy
            </Button>
            }
        </Menu.Item>
      </Menu>
    </Segment>
  )
}

export default MenuHeader
