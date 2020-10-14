import React from "react";

const NoteList = (props) => {


    return (
        <>
            <div className={'note_list'}>
                <i className={'fa fa-times'} aria-hidden={'true'}
                   onClick={() => {props.passnote(props.id)
                }}/>
                <li>{props.text}</li>
            </div>
        </>
    )
};

export default NoteList;