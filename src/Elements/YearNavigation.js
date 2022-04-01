import {Nav} from "react-bootstrap";
import {Component} from "react";
import "./YearNavigation.css";

class YearNavigation extends Component {

    constructor(props) {
        super(props);
        this.yearOnSelect = this.yearOnSelect.bind(this);
    }

    yearOnSelect(selectedKey) {
        console.log(selectedKey)
        this.props.onSelect(selectedKey);
    }


    render () {
        return (
            <Nav defaultActiveKey="link-0" className="flex-column" onSelect={(selectedKey) => this.yearOnSelect(selectedKey)}>
                {this.props.language === "spanish" ?
                    <Nav.Link eventKey="link-0">acerca de sitio</Nav.Link> :
                    <Nav.Link eventKey="link-0">about</Nav.Link>}
                <Nav.Link eventKey="link-1">1965</Nav.Link>
                <Nav.Link eventKey="link-2">1966</Nav.Link>
                <Nav.Link eventKey="link-3">1967+</Nav.Link>
            </Nav>
        );
    };

}

export default YearNavigation;