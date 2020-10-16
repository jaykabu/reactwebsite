import React from "react";
// import DeleteIcon from '@material-ui/icons/Delete';

const AToDoList = (props) => {

    const onDelete = () => {
        props.onselect(props.id)
    }
    return (
        <>
        {/*           <div className={"container-fluid mb-5"}>**/}
        {/*            <div className={"row"}>*/}
        {/*                  <div className={"col-10 mx-auto"}>*/}
        {/*                      <div className={'row gy-3'}>*/}
        {/*//                           <div className={'col-md-4  col-10 mx-auto'}>*/}
        {/*<br/>*/}
        {/*    <div className="masonry">*/}
        {/*<div className="col-6 col-md-4">*/}
            <div className="abc">



                                                <div className="card-body">
                                                    <h5 className="card-title">{props.title}</h5>
                                                    <p className="card-text">{props.contant}</p>
                                                    <a href="#" className="btn btn-primary" onClick={onDelete}>Delete</a>
                                                </div>
                                        </div>









        {/*    </div>*/}
        {/*</div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}


    {/*</div>*/
    }
    {/*            </div>*/
    }
    {/*        </div>*/
    }
    {/*    </div>*/
    }
    {/*</div>*/
    }


    {/*<div className={"container-fluid nav_bg"}>*/
    }
    {/*    <div className={'row'}>*/
    }
    {/*        <div className={'col-10 mx-auto'}>*/
    }
    {/*            <div className={'todo_style'}>*/
    }
    {/*                <i className="fa fa-times" aria-hidden="true" onClick={onDelete}/>*/
    }
    {/*                <li>Title:  {props.title}</li>*/
    }
    {/*                <li>Content:  {props.contant}</li>*/
    }
    {/*            </div>*/
    }
    {/*        </div>*/
    }
    {/*    </div>*/
    }
    {/*</div>*/
    }
</>
)
};

export default AToDoList;