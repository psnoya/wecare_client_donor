import React from 'react'
import { Grid, Header, Image, Statistic, Icon} from 'semantic-ui-react'

const MainPageDisplay = () => {
  return (
    <Grid celled='internally'>
      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
         <Header as='h1'  textAlign='center' color='purple'
         style={{
          marginTop: '0.1em',
          marginBottom: '0.2em',
          marginLeft: '2em',
        }}
         >Welcome to weCare
         <Header as='h3'>A place for stores to donate foodbags to single moms</Header>
         </Header>
         
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
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}> <p>
        Every year more than 100 000 tons of food is wasted in stores all over Sweden. At the same time there are parants who don’t have the economical means to feed their children. We at weCare aim to create a bridge between stores and single moms in order to reduce food waste and eliminate children not getting enough food. 
<br></br><br></br>We at weCare have created a platform where a store can register and become a food donor. With our easy to navigate UX a store can register food bags and decide when the food bag can be picked up. For the moms on the other hand we created a mobile app for both Apple and Android users where the user can find stores that have available food bags and make a reservation and then go to the store and pick it up.
<br></br><br></br>By registering at weCare you as a store can help not only families all over Sweden but also make a huge impact on the environment. By reducing food waste we can together stop the rapid climate change that is happening right now. 
<br></br><br></br>So sign up today, to make a better tomorrow!
          </p></Grid.Column>

        <Grid.Column width={3}>
          <Image src='./img/wecare_logo.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MainPageDisplay
