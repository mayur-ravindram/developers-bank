import React from 'react';
import { Card, Image, Divider, Button } from 'semantic-ui-react';
import avatar from '../bigcat.jpg'

const ProfileComponent = () => {
    return (
        <Card.Group style={{ margin: 20 }} centered>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={avatar}
              />
              <Card.Header>John Doe</Card.Header>
              <Card.Meta>Checking Account</Card.Meta>
              <b>Bank of America</b>
              <Card.Description>
                Manage your account
                
              </Card.Description>
              <Card.Description>
              <h1 style={{color:'orange', fontSize:50, fontFamily:'consolas'}}><span style={{color:'black'}}>&#x20B9;</span>12.32</h1>
              </Card.Description>
              <Card.Description>
                <Divider />
              </Card.Description>
              <Card.Description>
                Manage your account
                <p>
                  <strong>Here</strong>
                </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui buttons'>
                <Button basic color='blue'>Check balance</Button>
                <div>a</div>
                <Button basic color='green'>Account</Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
    )
}

export default ProfileComponent;