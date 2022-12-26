import React, {useState} from "react";

interface User {
    name: string;
    age: number
}

const UserList: User[] = [
    {name: 'Sarah', age: 20},
    {name: 'David', age: 20},
    {name: 'Tom', age: 20},
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [foundUser, setFoundUser] = useState<User | undefined>(undefined)

    const searchUserHandler = () => {
        const foundUser = UserList.find((user) => (user.name === name));
        setFoundUser(foundUser)
        setName('')
    };

    return <>
        <h3>Search User</h3>
        <input type="text" value={name} onChange={(event => setName(event.target.value))}/>
        <button onClick={searchUserHandler}>Search</button>
        <div>
            {!!foundUser ? (
                <>
                    <p>{foundUser.name}: {foundUser.age}</p>
                </>
            ) : <p>No User Was Found!</p>}
        </div>
    </>
}

export default UserSearch