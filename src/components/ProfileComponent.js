import React from 'react';
import { Card, Image, Divider, Button, Header } from 'semantic-ui-react';
import avatar from '../bigcat.jpg'

const ProfileComponent = () => {
  return (
    <>
      <Header style={{ margin: 50 }}>My Profile</Header>
      <Card.Group style={{ margin: 20 }} centered>
        <Card>
          <Card.Content>
            <Image
              size='small'
              src={avatar}
              style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginBottom: 50, borderRadius: 100 }}
            />
            <Card.Header style={{ fontSize: 40 }}>John Doe</Card.Header>
            <Divider style={{ backgroundColor: 'lime' }} />
            <b>Bank of America</b>
            <Card.Meta>Checking Account</Card.Meta>
            <Card.Description>
              BALANCE:
              </Card.Description>
            <Card.Description>
              <div className="ui statistics">
                <div className="statistic">
                  <span className="value">&#8377;12.23</span>
                </div>
              </div>

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
            <div className='ui two buttons'>
              <Button basic color='green'>Check balance</Button>
              <Button basic color='orange'>Account</Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  )
}

export default ProfileComponent;