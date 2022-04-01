import {Component} from "react";
import {Table} from "react-bootstrap";
import "./../English/Years.css";

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
                        <th>Nombre de artículo</th>
                        <th>Periódico</th>
                        <th>Fecha</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>UCA expulsa al Br. Sotelo</td>
                        <td>-</td>
                        <td>24 julio 1966</td>
                    </tr>
                    <tr>
                        <td>Inflexible Actitud de Rector de la UCA / Padre Pallais apoya expulsión de Sotelo</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Pocos Apoyan la Expulsión Y Todos Malos Estudiantes</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Sigue Crisis en UCA</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Usaron Nombre Sin su Permiso</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>Huelguistas Siguen en Pie</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>Once Disponen no Comer en UCA</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>


                    <tr>
                        <td>Otra Escuela Se Suma a la Huelga</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>2 Institutos Mas Apoyan a Sotelo </td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>Pallais acepta a Sotelo / Triunfa Huelga de Hambre</td>
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