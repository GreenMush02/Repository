import React,{ useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

import playersData from '../data/data.js'



const Players = () => {

const [playersToShow, setPlayersToShow] = useState([])
const [playerId, setPlayerID] = useState('')
const [playerName, setPlayerName] = useState('')
const [playerLastName, setPlayerLastName] = useState ('')
const [playerAge, setPlayerAge] = useState ('')
const [playerPosition, setPlayerPosition] = useState ('')
const [showDialog, setShowDialog] = useState(false)


useEffect(() => {
    
    setPlayersToShow(playersData);

    

}, []);


const actionTemplate = (rowData) => {


    return <div><Button icon="pi pi-user" className="p-button-rounded p-button-info" onClick={() => onEdit(rowData)}/>
           <Button icon="pi pi-times" className="p-button-rounded p-button-danger" onClick={deletePlayer}/></div>
    }

const AddPlayer = () => {

let newPlayer = {id: 7, name: 'Jan', lastName: 'Kowalski7', age: 18, position: 'LS'};

playersToShow.push(newPlayer);
console.log("dodano zawodnika");

}

const deletePlayer = () => {

return alert("zawodnik usunięty")

}


const onEdit = (rowData) => {
    
    
    
    setPlayerID(rowData.id);
    setPlayerName(rowData.name);
    setPlayerLastName(rowData.lastName);
    setPlayerAge(rowData.age);
    setPlayerPosition(rowData.position);
    setShowDialog(true);
    

}

const onEditConfirm = () => {

setShowDialog(false);

}

const onEditCancel = () => {

setShowDialog(false);

}


const onHide = () => {

    setShowDialog(false);

}


const onSetPlayerName = (e) => {

    setPlayerName(e.target.value);

}

const onSetPlayerLastName = (e) => {

    setPlayerLastName(e.target.value);

}

const onSetPlayerAge = (e) => {

    setPlayerAge(e.target.value);

}

const onSetPlayerPosition = (e) => {

    setPlayerPosition(e.target.value);

}

return (

    <div>

   <DataTable value={playersToShow} selectionMode="single">
   <Column field="name" header="Imię"></Column>
   <Column field="lastName" header="Nazwisko"></Column>
   <Column field="position" header="Pozycja"></Column>
   <Column field="age" header="Wiek"></Column>
   <Column body={actionTemplate}/>
   </DataTable>
   <Button label="Dodaj Zawodnika" onClick={AddPlayer}></Button>

   <Dialog visible={showDialog} modal={true}
               onHide={onHide}>

   


<div>
   <p>ID:  {playerId}</p>
   <p>NAME:</p><input value={playerName} onChange={onSetPlayerName}/>
   <p>LASTNAME:</p><input value={playerLastName} onChange={onSetPlayerLastName}/>
   <p>AGE:</p><input value={playerAge} onChange={onSetPlayerAge}/>
   <p>POSITION:</p><input value={playerPosition} onChange={onSetPlayerPosition}/>
<br></br>
<br></br>
    <Button label="Potwierdź zmiany" style={{backgroundColor: 'green'}} onClick={onEditConfirm}></Button> 
    <Button label="Odrzuć zmiany" style={{backgroundColor: 'red'}} onClick={onEditCancel}></Button>
    </div>

               </Dialog>

                    </div>


    





);
}

export default Players;