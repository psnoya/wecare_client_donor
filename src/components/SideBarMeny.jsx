import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SideBarMeny = () => {
  return (
    <>
      <Menu secondary vertical>
        <Menu.Item
          id='foodbag'
          name='create foodbag'
          as={Link}
          to={{ pathname: '/foodbags' }}
        />
        <Menu.Item></Menu.Item>
      </Menu>
    </>
  )
}

export default SideBarMeny
