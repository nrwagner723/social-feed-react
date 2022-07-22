import HeartPresenter from "../HeartPresenter";

const DisplayEntries = (props) => {
    return ( 
        <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry) => {
            return (
              <tr>
                <td>{entry.name}</td>
                <td>{entry.post}</td>
                <td>{entry.date}</td>
                <HeartPresenter />
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;