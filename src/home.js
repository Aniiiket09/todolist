// import React, { useState } from "react";
// import "./index.css";

// function Home() {
//   const [activity, setActivity] = useState("");
//   const [listdata, setlistData] = useState([]);
//   function addActivity() {
//     // setlistData([...listdata, activity]);            // another way to render a function this
//     // console.log(listdata);
//     setlistData((listdata) => {
//       const updatedList = [...listdata, activity];
//       console.log(updatedList);
//       setActivity("");
//       return updatedList;
//     });
//   }

//   function removeActivity(i) {
//     const updatedlistdata = listdata.filter((elem, id) => {
//       return i !== id;
//     });
//     setlistData(updatedlistdata);
//   }
//   function removeAll() {
//     setlistData([]);
//   }
//   return (
//     <div className="container">
//       <div className="header">Todo List</div>
//       <input
//         type="text"
//         placeholder="type something into box"
//         value={activity}
//         onChange={(e) => {
//           setActivity(e.target.value);
//         }}
//       />
//       <button onClick={addActivity}>Add Activity </button>

//       <p className="list-heading">Here is your List :{")"}</p>
//       {listdata !== [] &&
//         listdata.map((data, i) => {
//           return (
//             <>
//               <p key={i}>
//                 <div className="listData ">{data}</div>

//                 <div className="btn-position ">
//                   <button onClick={() => removeActivity(i)}>Remove(-)</button>
//                 </div>
//               </p>
//             </>
//           );
//         })}
//       {listdata.length >= 1 && <button onClick={removeAll}>Remove ALL</button>}
//     </div>
//   );
// }

// export default Home;
