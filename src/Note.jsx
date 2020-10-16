import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import AddNote from "./AddNote";
import {NavLink} from "react-router-dom";

const Note = () => {

    const [inputList, setInputList] = useState();

    const [item, setItems] = useState([]);

    const inputEvent = (event) => {
        setInputList(event.target.value);
    }

    const inputSubmit = () => {
        setItems((oldData) => {
            return [...oldData, inputList];
        });
        setInputList('');
    }

    const deleteItem = (id) => {
        setItems((preData) => {
            return preData.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className={"container-fluid nav_bg Ndiv"}>
                <div className={"row"}>
                    <div className={"col-10 mx-auto"}>
                        <div className={"row"}>
                            <div
                                className={"col-md-4 mx-auto  d-flex  flex-column"}>
                                <h3 className={"note_div"}>NotePad</h3>
                                <TextField
                                    type={"text"}
                                    placeholder={"enter a value"}
                                    name={"content"}
                                    onChange={inputEvent}
                                    value={inputList}
                                />


                                <Button onClick={inputSubmit}>
                                    <AddIcon/>
                                </Button>

                                {/*<li>{inputList}</li>*/}
                                {item.map((value, index) => {
                                    // return  <li>{value}</li>
                                    return <AddNote
                                        text={value}
                                        id={index}
                                        key={index}
                                        passNote={deleteItem}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{textAlign:'center'}}>
                <NavLink to={'/anotepad'}> Go To Advance Notepad </NavLink>
            </div>
        </>
    )

};


export default Note;