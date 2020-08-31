import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import image1 from '../add-account.png';
import image2 from '../delete-account.png';
import image3 from '../link-account.png';
import { Link } from '@reach/router';
const AccountPage = () => {

    return (
        <div>
            <Card.Group centered>
                <Card as={Link} to="add">
                    <Image src={image1} wrapped ui={false} centered />
                    <Card.Header textAlign='center'>Add New Account</Card.Header>
                    <Card.Meta textAlign='center'>Action</Card.Meta>
                </Card>
                <Card as={Link} to="link">
                    <Image src={image3} wrapped ui={false} centered />
                    <Card.Header textAlign='center'>Link Existing Account</Card.Header>
                    <Card.Meta textAlign='center'>Action</Card.Meta>
                </Card>
                <Card as={Link} to="delete">
                    <Image src={image2} wrapped ui={false} centered />
                    <Card.Header textAlign='center'>Delete Exisitng Account</Card.Header>
                    <Card.Meta textAlign='center'>Action</Card.Meta>
                </Card>
            </Card.Group>
        </div>
    )
}

export default AccountPage;