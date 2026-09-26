// Conditional rendering using ternary operator to check the startsWith method 
// function Members(props) {
//     return (
//         <ul>
//             {props.teams.map((team) => {
//                 return team.startsWith("E") && <li key={team}>{team}</li>
//             })}
//         </ul>
//     )
// }

// Using the if, if/else, and switch to conditionally render something.
  // 1. Check if the teams property is provided
  // 2. Check if the team length is greater than 0

function List(props) {
    return (
        <>
            {!props.teams && <div>Loading..</div>}
            {props.teams && props.teams.length > 0 && (
                <ul>
                    {props.teams.map((team) => {
                        return <li key={team}>{team}</li>;
                    })}
                </ul>
            )}
            {props.teams && props.teams.length === 0 && <div>There are no teams in the list!</div>}
        </>
    );

}


export const Teams = () => {
    const teams = [];
    
    return (
    <>
    <div className="border-t border-gray-100"></div>
    <div className="max-w-7xl py-16 px-6">
        <h1 className="text-2xl">Teams</h1>
        {/* <ul>
            <li>Mohamed Farah</li>
            <li>Elon Mask</li>
            <li>John Jones</li>
            <li>AWS Developers</li>
        </ul> */}
       <List teams={teams} />
    </div>
    </>
  )
}


