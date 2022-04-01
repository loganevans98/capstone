import {Component} from "react";
import {Table} from "react-bootstrap";
import "./../English/Years.css";

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
                        <th>Nombre de artículo</th>
                        <th>Periódico</th>
                        <th>Fecha</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Mártires del 4 de noviembre 1967 / Los capturaron vivos y luego los asesinaron</td>
                        <td>-</td>
                        <td>4 noviembre 1979</td>
                    </tr>
                    <tr>
                        <td>Seguir su ejemplo; el mejor homenaje</td>
                        <td>Barricada</td>
                        <td>5 noviembre 1979</td>
                    </tr>
                    <tr>
                        <td>12 años del asesinato de cuatro patriotas!!!</td>
                        <td>La Prensa</td>
                        <td>5 noviembre 1979</td>
                    </tr>
                    <tr>
                        <td>IES prepara concentración / Conmemorarán la caída de Casimiro y compañeros</td>
                        <td>El Nuevo Diario</td>
                        <td>28 octobre 1982</td>
                    </tr>
                    <tr>
                        <td>A quince años de un sacrificio ejemplar</td>
                        <td>El Nuevo Diario</td>
                        <td>11 noviembre 1982</td>
                    </tr>

                    <tr>
                        <td>Un largo camino / Las botas de Casimiro</td>
                        <td>-</td>
                        <td>28 octobre 1982</td>
                    </tr>

                    <tr>
                        <td>Nace barrio Casimiro Sotelo</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>


                    <tr>
                        <td>Gardenias para Casimiro Sotelo</td>
                        <td>Barricada</td>
                        <td>11 septiembre 1984</td>
                    </tr>

                    <tr>
                        <td>Perennidad a ejemplo de Casimiro Sotelo</td>
                        <td>El Neuvo Diario</td>
                        <td>5 mayo 2007</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    };
}
export default SixtySeven;