import React, { Fragment, useEffect } from "react";
import {
  // ActionModal,
  ActionTodosMenu, TODOS,
  //ActionLoading,
} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

// import Modal from "./Modal";
// import Load from "./Load";
export default function Menus() {
  const todos = useSelector((state) => state.todos);

  const loading = useSelector((state) => state.loading);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
   useEffect(() => {
    if (!todos.length) {
      dispatch(ActionTodosMenu());
   }
  }, [dispatch]);

 
  
  return (
    <Fragment>
      <br />

      <div key={Math.random(5)}>
        {/* {loading === true ? (
          <center>
            <Load></Load>{" "}
          </center>
        ) : (
          ""
        )} */}
        
        
    
     {console.log(todos, "TOFDOS FRONT")}
        {todos 
          ? todos.map((todos) => (
              <div
                className="card"
                key={Math.random(5)}
                // onClick={(event) => handleClick(event, menus.recipes)}
              >
                <div  key={Math.random(5)}> <h1> {todos.title}</h1>
                  <br />
                  <img src={todos.img} className="jugador" />
                  
                </div>{" "}
                
                
               
                <br />
                <br />
              </div>
            ))
          : !todos
          ? ""
          : ""}
        <br />
      </div>
    </Fragment>
  );
}
