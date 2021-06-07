import React,{ useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';



const Players = () => {

const [players, setPlayers] = useState([])
const [playerName, setPlayerName] = useState('')
const [playerSurname, setPlayerSurname] = useState('')
const [playerAge, setPlayerAge] = useState('')
const [playerPosition, setPlayerPosition] = useState('')
const [showDialog, setShowDialog] = useState (false)


class Player {

constructor(name , surname, position, age,) {
this.playerName = name;
this.playerSurname = surname;
this.playerPosition = position;
this.playerAge = age;
}

}

const AddPlayer = () => {


}

const onHide = () => {

    setShowDialog (false)
}

return (

    <div>

   <DataTable value={players} selectionMode="single" >
   <Column field="name" header="Imię"></Column>
   <Column field="surname" header="Nazwisko"></Column>
   <Column field="position" header="Pozycja"></Column>
   <Column field="age" header="Wiek"></Column>
   </DataTable>
   <Button label="Dodaj Zawodnika" onClick={() => {setShowDialog (true)}}></Button>

   <Dialog visible={showDialog} modal={true}
               onHide={onHide}>

<div>

<input type='text'></input>

</div>


               </Dialog>


</div>



);

































}

export default Players;