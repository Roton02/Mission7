const ShowDetails = ({showD}) => {
    // console.log(showD);
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center">Want to cook: {showD.length}</h1>
            <table className="flex gap-14">
                <th>name</th>
                <th>time</th>
                <th>caloreis</th>
            </table>
        </div>
    );
};

export default ShowDetails;