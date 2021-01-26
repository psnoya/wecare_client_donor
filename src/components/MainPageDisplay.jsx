import React from 'react'
import { Grid, Image, Statistic, Icon, Button } from 'semantic-ui-react'

const MainPageDisplay = () => {
  return (
    <Grid celled='internally'>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src='./img/wecare_logo.png' />
        </Grid.Column>
        <Grid.Column width={10}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            magni eveniet provident numquam dolores cumque consequatur dolorum
            nesciunt aperiam, illum ea debitis consequuntur illo ipsum.
          </p>
        </Grid.Column>
        <Grid.Column width={3}>
          <Statistic size='small'>
            <Statistic.Value>
              <Icon name='shopping bag' size='small' />
              5678
            </Statistic.Value>
            <Statistic.Label>Bags Have Been Given Away</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <Image src='./img/wecare_logo.png' />
        </Grid.Column>
        <Grid.Column width={10}>
          <Button
            primary
            size='small'
            circular
            position='centered'
            color='#e5a4cb'
          >
            Register Here
          </Button>
          <Button
            secondary
            circular
            size='small'
            position='middle'
            color='#e5a4cb'
          >
            Login Here
          </Button>
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src='./img/wecare_logo.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MainPageDisplay
