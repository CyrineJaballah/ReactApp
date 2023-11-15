import React from 'react';
import "../App.css";

export default class Presentation extends React.Component {
    state = {
        titre: "Qui Sommes Nous?",
        contact: {
            nom: "Ma Société",
            email: "exemple@exemple.com",
            logo: "logo192.png",
        },
        departements: [
            { id: 1, nom: "Departement 1" },
            { id: 2, nom: "Departement 2" },
            { id: 3, nom: "Departement 3" },
        ],
        editDepartementId: null
    };
    handleAddDepartement = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            departements: [...prevState.departements, { id: prevState.departements.length + 1, nom: prevState.newDepartement }],
            newDepartement: ''
        }));
    }

    handleInputChange = (event) => {
        this.setState({ newDepartement: event.target.value });
    }
    handleDeleteDepartement = (id) => {
        if (window.confirm('Are you sure you want to delete this department?')) {
            this.setState(prevState => ({
                departements: prevState.departements.filter(departement => departement.id !== id)
            }));
        }

    }
    handleEditDepartement = (id) => {
        if (window.confirm('Are you sure you want to edit this department?')) {
            const departement = this.state.departements.find(d => d.id === id);
            this.setState({ newDepartement: departement.nom, editDepartementId: id });
        }
    }



    handleAddOrEditDepartement = (event) => {
        event.preventDefault();
        if (this.state.editDepartementId) {
            this.setState(prevState => ({
                departements: prevState.departements.map(d => d.id === prevState.editDepartementId ? { ...d, nom: prevState.newDepartement } : d),
                newDepartement: '',
                editDepartementId: null
            }));
        } else {
            this.setState(prevState => ({
                departements: [...prevState.departements, { id: prevState.departements.length + 1, nom: prevState.newDepartement }],
                newDepartement: ''
            }));
        }
    }


    render() {
        return (
            <div>
            </div>
        );
    }
}
