import React, { useState } from "react";
import "./index.css";

//HOME COMPONENT
function Home() {
  //USEING HOOKS USESTATE HOOK AND INITIALIZING FOR  ACTIVITY AND LIST
  const [activity, setActivity] = useState("");
  const [listdata, setlistData] = useState([]);

  // FUNCTIONALITY FOR ADDACTIVITY
  function addActivity() {
    setlistData((listdata) => {
      const updatedList = [...listdata, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  // FUNCTIONALITY FOR REMOVEACTIVITY FROM LIST DATA
  function removeActivity(i) {
    const updatedlistdata = listdata.filter((elem, id) => {
      return i !== id;
    });
    setlistData(updatedlistdata);
  }

  // FUNCTIONALITY FOR ALLREMOVEACTIVITY FROM LIST DATA
  function removeAll() {
    setlistData([]);
  }
  return (
    //IMPLEMENTING SOME UI
    <div className="container">
      <div className="header">Todo List</div>
      <input
        type="text"
        placeholder="type something into box"
        value={activity}
        onChange={(e) => {
          setActivity(e.target.value);
        }}
      />
      <button onClick={`listdata.length==0?)`}>Add Activity </button>

      <p className="list-heading">Here is your List :{")"}</p>
      {listdata !== [] &&
        listdata.map((data, i) => {
          return (
            <>
              <p key={i}>
                <div className="listData ">
                  {data.data > 0 ? "plz enter something" : data}
                </div>

                <div className="btn-position ">
                  <button onClick={() => removeActivity(i)}>Remove(-)</button>
                </div>
              </p>
            </>
          );
        })}
      {listdata.length >= 1 && <button onClick={removeAll}>Remove ALL</button>}
    </div>
  );
}

export default Home;
