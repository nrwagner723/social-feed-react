const DisplayEntries = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            return (
              <tr>
                <td>{entry.name}</td>
                <td>{entry.post}</td>
                <td>{entry.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;