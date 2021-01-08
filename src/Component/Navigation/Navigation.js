import { Navbar } from 'react-bootstrap';
import Dropdown from 'react-multilevel-dropdown';
import catalog from './catalog.json';
import navstyle from './Navigation.module.css';

const navigation = (props) => {

    let catalogItems = catalog.data.locations.map(location => {
        let branches = null;

        if (location.branches.length !== 0) {
            branches = <Dropdown.Submenu>{location.branches.map(branch => <Dropdown.Item onClick={() => props.showCategories({ dealerId: location.dealers_id, branchId: branch.branch_id })}>{branch.name}</Dropdown.Item>)}</Dropdown.Submenu>
        }

        return (
            <Dropdown.Item>
                {location.name}
                {branches}
            </Dropdown.Item>
        )
    })

    return (
        <div>
            <Navbar className = {navstyle.navcolor}>
                <Navbar.Brand href="/rental-management" className = {navstyle.brandColor}>Rental Management System</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Dropdown title='Select location'>
                            {catalogItems}
                        </Dropdown>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default navigation