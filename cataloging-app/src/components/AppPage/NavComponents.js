import { CatalogingHeaders } from '../CatalogingHeaders/';
import Navbar from 'react-bootstrap/lib/Navbar';
import React from 'react';
import { Search } from '../Search/';

export const NavComponents =
    [<CatalogingHeaders eventKey={1} />,
    (<Navbar.Form pullRight>
        <Search />
    </Navbar.Form>)];
