import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NoteList from "./NoteList";

const Note = () => {

    const [inputList , setInputList] = useState();
    const [item , setItem] = useState([]);

    const addItem = (event)=>{
        setInputList(event.target.value)
    }

    const inputSubmit = ()=>{
        setItem((oldData)=>{
            return [...oldData , inputList]
        })
        setInputList('');
    }

    const deleteItem = (id)=>{
        setItem((prevState)=>{
           return  prevState.filter((arrElem , index)=>{
                    return index !== id ;
            })
        })
    }

    return (
        <>
            <div className={'my-3'}>
                <h1 className={'text-center'}>Note</h1>
            </div>
            <div className={'container contact_div'}>
                <div className={'row'}>
                    <div className={'col-md-3 col-6 mx-auto'}>
                        <form onClick={''}>
                            <div className="input-group mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       name={'inputList'} value={inputList} onChange={addItem}
                                       placeholder={'Type a note'} autoComplete={'off'}
                                />
                                <Button className={''} onClick={inputSubmit}>
                                    <AddIcon className={''}/>
                                </Button>
                            </div>

                           <div>
                                   {/*<li>{inputList}</li>*/}
                                   {item.map((val,index)=>{
                                       // return  <li>{val}</li>
                                    return   <NoteList text={val} key={index} id={index} passnote={deleteItem}/>
                                   })}
                           </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Note;