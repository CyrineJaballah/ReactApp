import React from 'react';
import "../App.css";

export default class Presentation extends React.Component {
    state = {
        titre: "Qui Sommes Nous?",
        //object contact
        contact: {
            nom: "Ma Société",
            email: "exemple@exemple.com",
            logo: "logo192.png",
        },
        // object table of departements
        departements: [
            { id: 1, nom: "Departement 1" },
            { id: 2, nom: "Departement 2" },
            { id: 3, nom: "Departement 3" },
        ]
    }


    render() {
        return (
            <div>
                <h1>{this.state.titre}</h1>
                <table>
                    <tr>
                        {/* must have an alt otherwise it will show a warning */}
                        <td><img src={this.state.contact.logo} alt="logo" /></td>
                        <td>
                            <ol>
                                <li>{this.state.contact.nom}</li>
                                <li>{this.state.contact.email}</li>
                            </ol>
                        </td>
                    </tr>
                </table>
                <h3>Liste de départements</h3>

                <table className='tab-depa' >
                    <tr>
                        {this.state.departements.map((d, i) => (
                            <li key={i}>
                                <td>{d.id}-</td>
                                <td></td>
                                <td>{d.nom}</td>
                            </li>
                        ))}
                    </tr>
                </table>
            </div>
        );
    }
}
