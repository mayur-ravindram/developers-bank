import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from '@reach/router'

const Navigation = () => {
    const [state, setState] = useState({});
    const handleItemClick = () => (e, { name }) => setState({ activeItem: name })


    return (
        <>
            <Menu>
                <Menu.Item
                    name='home'
                    active={state.activeItem === 'home'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/"
                />
                <Menu.Item
                    name='accounts'
                    active={state.activeItem === 'accounts'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/accounts"
                />
                <Menu.Item
                    name='profile'
                    active={state.activeItem === 'profile'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/profile"
                />

            </Menu>
        </>
    )

}
export default Navigation;