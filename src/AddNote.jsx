import React from "react";
const AddNote = (props) => {
    return (
        <>
            <div className={"container-fluid nav_bg"}>
                <div className={'row'}>
                    <div className={'col-10 mx-auto'}>
                        <div className={'todo_style'}>
                            <i className="fa fa-times" aria-hidden="true" onClick={()=>{
                                props.passNote(props.id)
                            }}/>
                            {props.text}
                            {/*<button onClick={''}><DeleteIcon/></button>*/}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AddNote;