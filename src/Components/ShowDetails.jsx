

const ShowDetails = ({ showD,currentCock ,currentCocking}) => {
//   console.log(currentCock);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">
        Want to cook: {showD.length}
      </h1>
        <div className="bg-gray-200 p-5 rounded-xl">
        <table className="table-auto w-full">
        <thead>
            <tr>
                <th className="px-4 py-2"> Name</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Calories</th>
            </tr>
        </thead>
        <tbody>
            {
                showD.map((detail, idx)=>{
                    const newIdx = idx + 1;
                    return(
                        <tr key={idx} >
                <div>
                <td className="border px-3 py-2"> {newIdx}</td>
                <td className="border px-3 py-2"> {detail.recipe_name}</td>
                </div>
                <td className="border px-3 py-2">{detail.preparing_time}</td>
                <td className="border px-3 py-2">{detail.calories}</td>
                <button onClick={()=>currentCock(detail, detail.recipe_id)}  className="btn  bg-green-500 rounded-3xl">prepare</button>
                
            </tr>
                    )
                })
            }
        </tbody>
        </table>
        </div>
        <h1 className="text-2xl font-semibold text-center">
        Currently cooking: {currentCocking.length}
      </h1>
      <div className="bg-gray-200 p-5 rounded-xl">
        <table className="table-auto w-full">
        <thead>
            <tr>
                <th className="px-4 py-2"> Name</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Calories</th>
            </tr>
        </thead>
        <tbody>
            {
                currentCocking.map((c,idx)=>{
                    const newIdx = idx + 1;
                    return(
                        <tr key={idx}>
                <div>
                <td className="border px-3 py-2"> {newIdx}</td>
                <td className="border px-3 py-2"> {c.recipe_name}</td>
                </div>
                <td className="border px-4 py-2">{c.recipe_name} </td>
                <td className="border px-4 py-2">{c.preparing_time}</td>
                <td className="border px-4 py-2">{c.calories}</td>
                
                
            </tr>
                    )
                })
            }
        </tbody>
        </table>
        </div>
        <div className="ml-10">
        <h1 className="text-lg  ">
        Total Time : {showD.reduce((p,c)=>p+c.preparing_time ,0)} minutes
      </h1>
        <h1 className="text-lg">
        Total Calories :  {showD.reduce((p,c)=>p+c.calories ,0)} calories
      </h1>
        </div>
    </div>
  );
};

export default ShowDetails;
