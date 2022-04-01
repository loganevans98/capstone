import {Component} from "react";
import {Table} from "react-bootstrap";
import "./Years.css";

class SixtyFive extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <div className="section-title">an election</div>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>Article Name</th>
                        <th>Publisher</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Symbolic Coffin</td>
                        <td>La Prensa</td>
                        <td>July 25, 1965</td>
                    </tr>
                    <tr>
                        <td>500 Voted in Order and Elected Sotelo in UCA</td>
                        <td>La Prensa</td>
                        <td>July 30, 1965</td>
                    </tr>
                    <tr>
                        <td>This week</td>
                        <td>La Prensa</td>
                        <td>August 3, 1965</td>
                    </tr>
                    <tr>
                        <td>Student Unit</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    };
}
export default SixtyFive;