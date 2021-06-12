import React,{ useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import playersData from '../data/data.js'



const Players = () => {

const [playersToShow, setPlayersToShow] = useState([])
const [playerId, setPlayerID] = useState('')
const [showDialog, setShowDialog] = useState(false)


useEffect(() => {
    
    setPlayersToShow(playersData);

    

}, []);


const actionTemplate = () => {


    return <div><Button icon="pi pi-user" className="p-button-rounded p-button-info" onClick={onChange}/>
           <Button icon="pi pi-times" className="p-button-rounded p-button-danger" onClick={deletePlayer}/></div>
    }

const AddPlayer = () => {

let newPlayer = {id: 7, name: 'Jan', lastName: 'Kowalski7', age: 18, position: 'LS'};

playersToShow.push(newPlayer)
console.log("dodano zawodnika")

}

const deletePlayer = () => {

return alert("zawodnik usunięty")

}

const onChange = () => {

setShowDialog(true);



}

const onHide = () => {

    setShowDialog(false);

}

return (

    <div>

   <DataTable value={playersToShow} selectionMode="single" onSelectionChange={onChange}>
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
<p>ID </p>
   <p>NAME</p>
   <p>LASTNAME</p>
   <p>AGE</p>
   <p>POSITION</p>

    
    </div>

               </Dialog>

                    </div>


    





);

































}

export default Players;