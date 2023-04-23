import React, { useState } from "react";
import "./index.css";

//HOME COMPONENT
function Home() {
  //USEING HOOKS USESTATE HOOK AND INITIALIZING FOR  ACTIVITY AND LIST
  const [activity, setActivity] = useState("");
  const [listdata, setlistData] = useState([]);

  // FUNCTIONALITY FOR ADDACTIVITY

  function addActivity() {
    if (activity !== "")
      setlistData((listdata) => {
        const updatedList = [...listdata, activity];

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

      <img
        className="action-icons "
        onClick={addActivity}
        src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png"
        alt=""
      />

      <div className="list-heading">Here is your Todo-List :{")"}</div>
      {listdata !== [] &&
        listdata.map((data, i) => {
          return (
            <>
              <p key={i}>
                <div className="listData ">{data}</div>

                <div className="btn-position ">
                  <img
                    className="action-icons "
                    onClick={() => removeActivity(i)}
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                    alt="remove-icon"
                  />
                </div>
              </p>
            </>
          );
        })}
      {listdata.length >= 1 && (
        <button onClick={removeAll} id="btn">
          Remove ALL
        </button>
      )}
    </div>
  );
}

export default Home;
