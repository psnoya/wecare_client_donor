import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Footer = () => {
  return (
 <footer>
      <Button data-cy='edit-profile-btn' fluid as={NavLink}
    to={`/profile`}>
      Edit Here
    </Button>   
    weCare Food-bag Charity
  </footer>
)
}

export default Footer
