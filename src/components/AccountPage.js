import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import image1 from '../add-account.png';
import image2 from '../delete-account.png';
import image3 from '../link-account.png';
const AccountPage = () => {

    return (
        <div>
            <Card.Group centered>
                <Card>
                    <Image src={image1} wrapped ui={false} />
                    <Card.Header>Add New Account</Card.Header>
                    <Card.Meta>Action</Card.Meta>
                    <Card.Description>
                        Info
                    </Card.Description>
                </Card>
                <Card>
                    <Image src={image3} wrapped ui={false} />
                    <Card.Header>Link Existing Account</Card.Header>
                    <Card.Meta>Action</Card.Meta>
                    <Card.Description>
                        Info
                    </Card.Description>
                </Card>
                <Card>
                    <Image src={image2} wrapped ui={false} />
                    <Card.Header>Delete Exisitng Account</Card.Header>
                    <Card.Meta>Action</Card.Meta>
                    <Card.Description>
                        Info
                    </Card.Description>
                </Card>
            </Card.Group>
        </div>
    )
}

export default AccountPage;