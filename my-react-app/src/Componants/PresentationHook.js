import React, { useState, usedata } from 'react'

export default function PresentationHook() {

    const [data,setData] = useState({
        titre: "Qui Sommes Nous?",
    })

    const [contact,setContact] = useState(

        {
            nom: "Ma Société",
            email: "exemple@exemple.com",
            logo: "logo192.png",
        },
        
    );

    const[departements,setDepartements] = useState([

            { id: 1, nom: "Departement 1" },
            { id: 2, nom: "Departement 2" },
            { id: 3, nom: "Departement 3" },
        
    ]);

  return (
    <div>
                <h1>{data.titre}</h1>
                <table>
                    <tr>
                        {/* must have an alt otherwise it will show a warning */}
                        <td><img src={contact.logo} alt="logo" /></td>
                        <td>
                            <ol>
                                <li>{contact.nom}</li>
                                <li>{contact.email}</li>
                            </ol>
                        </td>
                    </tr>
                </table>
                <h3>Liste de départements</h3>

                <table className='tab-depa' >
                    <tr>
                        {departements.map((d, i) => (
                            <li key={i}>
                                <td>{d.id}-</td>
                                <td></td>
                                <td>{d.nom}</td>
                            </li>
                        ))}
                    </tr>
                </table>
            </div>
  )
}
