import {Component} from "react";
import {Table} from "react-bootstrap";
import "./Years.css";

class SixtySix extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <div className="section-title">an expulsion and strikes</div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Article Name</th>
                        <th>Publisher</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>UCA expels Br. Sotelo</td>
                        <td>-</td>
                        <td>July 24, 1966</td>
                    </tr>
                    <tr>
                        <td>Inflexible Attitude of the Rector of the UCA / Father Pallais supports expulsion of Sotelo
                        </td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Few Support Expulsion And All Bad Students</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>CRISIS FOLLOWS IN UCA</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Name Used Without Your Permission</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>STRIKERS STILL STANDING</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>ELEVEN DECIDE NOT TO EAT IN UCA</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>


                    <tr>
                        <td>Another School Joins the Strike</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>2 MORE INSTITUTES SUPPORT SOTELO</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>Pallais accepts Sotelo / Hunger Strike Triumph</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>


                    </tbody>
                </Table>
            </div>
        );
    };
}
export default SixtySix;