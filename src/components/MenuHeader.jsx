import React from 'react'
import { Menu, Segment, Button, Icon } from "semantic-ui-react"
import { Link } from 'react-router-dom'

const MenuHeader = () => {

  return (
    <Segment inverted>
      <Menu inverted
      >
        <Menu.Item as={Link} to={{ pathname: "/" }}>
          <h1>MenuHeaderLogo</h1>
        </Menu.Item>
        <Menu.Item position="right">
          <Button
            icon
            labelPosition="left"
            icon="user"
            data-cy="login-btn"
          >
            <Icon name="user"></Icon>
            Login
          </Button>
        </Menu.Item>

      </Menu>

    </Segment>
  )
}

export default MenuHeader
