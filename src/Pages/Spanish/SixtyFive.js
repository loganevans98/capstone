import {Component} from "react";
import {Table} from "react-bootstrap";
import "./../English/Years.css";

class SixtyFive extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <div className="section-title">una elección</div>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>Nombre de artículo</th>
                        <th>Periódico</th>
                        <th>Fecha</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Ataud Simbolico</td>
                        <td>La Prensa</td>
                        <td>25 julio 1965</td>
                    </tr>
                    <tr>
                        <td>500 Votaron en Orden y Eligieron a Sotelo en UCA</td>
                        <td>La Prensa</td>
                        <td>30 julio 1965</td>
                    </tr>
                    <tr>
                        <td>En esta semana</td>
                        <td>La Prensa</td>
                        <td>3 augusto 1965</td>
                    </tr>
                    <tr>
                        <td>Unidad estudiantil</td>
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