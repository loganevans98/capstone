import {Component} from "react";
import {Table} from "react-bootstrap";
import "./Years.css";

class SixtySeven extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <div className="section-title">remembering the martyrs</div>
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
                        <td>Martyrs of November 4, 1967 / They were captured alive and then killed
                        </td>
                        <td>-</td>
                        <td>November 4, 1979</td>
                    </tr>
                    <tr>
                        <td>Follow your example; The best tribute</td>
                        <td>Barricada</td>
                        <td>November 5, 1979</td>
                    </tr>
                    <tr>
                        <td>12 years since the murder of four patriots!!!</td>
                        <td>La Prensa</td>
                        <td>November 5, 1979</td>
                    </tr>
                    <tr>
                        <td>IES prepares concentration / They will commemorate the fall of Casimiro and companions
                        </td>
                        <td>El Nuevo Diario</td>
                        <td>October 28, 1982</td>
                    </tr>
                    <tr>
                        <td>Fifteen years after an exemplary sacrifice</td>
                        <td>El Nuevo Diario</td>
                        <td>November 11, 1982</td>
                    </tr>

                    <tr>
                        <td>A long way / Casimiro’s boots</td>
                        <td>-</td>
                        <td>October 28, 1982</td>
                    </tr>

                    <tr>
                        <td>Casimiro Sotelo neighborhood is born</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>


                    <tr>
                        <td>Gardenias for Casimiro Sotelo</td>
                        <td>Barricada</td>
                        <td>September 11, 1984</td>
                    </tr>

                    <tr>
                        <td>Perenniality following the example of Casimiro Sotelo</td>
                        <td>El Neuvo Diario</td>
                        <td>May 5, 2007</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    };
}
export default SixtySeven;