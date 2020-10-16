import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import AToDoList from "./AToDoList";

const Anotepad = () => {

    const [inputList, setInputList] = useState({
        title: '',
        contant: '',

    });

    const [item, setItems] = useState([]);

    const [expand, setExpand] = useState(false)

    const inputEvent = (event) => {
        const {name, value} = event.target

        setInputList((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }
    const inputSubmit = () => {
        setItems((prevData) => {
            return [...prevData, inputList]
        })
        setInputList({
            title: '',
            contant: ''
        })
    }
    const deleteNote = (id) => {
        setItems((oldData) => {
            return oldData.filter((arrElem, index) => {
                return index !== id
            })
        })
    }
    const expandIt = ()=>{
        setExpand(true);
    }

    const bToNormal = ()=>{
        setExpand(false)
    }

    return (
        <>
            <div className={"container-fluid nav_bg Ndiv"}>
                <div className={"row"}>
                    <div className={"col-10 mx-auto"}>
                        <div style={{textAlign: "center"}}>

                            <div className={"note_div"}>
                            <h3>Advance NotePad</h3>
                            </div>

                            {expand ?
                            <TextField
                                label={"Enter a Title"}
                                type={"text"}
                                name={"title"}
                                onChange={inputEvent}
                                value={inputList.title}
                                autoComplete={'off'}
                            />:null}
                            <br/>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Type a Note"
                                multiline
                                rowsMax={4}
                                name={'contant'}
                                value={inputList.contant}
                                onChange={inputEvent}
                                onClick={expandIt}
                                onDoubleClick={bToNormal}
                            />
                            <Fab color="primary" aria-label="add" onClick={inputSubmit} className={'nbtn'}>
                                <AddIcon/>
                            </Fab> <br/>

                            {item.map((value, index) => {
                                return <AToDoList
                                    title={value.title}
                                    contant={value.contant}
                                    key={index}
                                    id={index}
                                    onselect={deleteNote}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Anotepad;