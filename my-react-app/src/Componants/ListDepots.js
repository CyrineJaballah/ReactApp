import Presentation from './Presentation';


export default class AccueilF extends Presentation {
    render() {
        return (
            <div>
                <div>
                    <h3>Liste de départements</h3>


                    <form onSubmit={this.handleAddOrEditDepartement}>
                        <input type="text" value={this.state.newDepartement} onChange={this.handleInputChange} required />
                        <button type="submit">{this.state.editDepartementId ? 'Modifier département' : 'Ajouter département'}</button> { }
                    </form>

                    <table className='tab-depa'>

                    </table>
                </div>
                <table className='tab-depa'>
                    {this.state.departements.map(departement => (
                        <tr key={departement.id}>
                            <td>{departement.nom}</td>
                            <td>
                                <button onClick={() => this.handleDeleteDepartement(departement.id)}>X</button>
                                <button onClick={() => this.handleEditDepartement(departement.id)}>Editer</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}