import {mockData} from "../utilities";
const Body = () => {

    return (
        <>
            <div>
                <h1>Body</h1>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {mockData.userList.map((user: any) => {
                    return (
                        <tr key = {user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    )
}
export default Body;