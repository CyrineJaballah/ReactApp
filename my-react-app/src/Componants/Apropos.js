import Presentation from './Presentation';


export default class AccueilF extends Presentation {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td><img src={this.state.contact.logo} alt="logo" /></td>
                        <td>
                            <ol>
                                <li>{this.state.contact.nom}</li>
                                <li>{this.state.contact.email}</li>
                            </ol>
                        </td>
                    </tr>
                </table>
            </div>

        );
    }

}