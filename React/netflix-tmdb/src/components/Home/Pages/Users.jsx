import '../../../styles/Users.css'
import Logo from '../../../assets/logo.png'
import user from '../../../assets/user-netflix.jpg'
import user2 from '../../../assets/user-netflix-2.jpg'
import user3 from '../../../assets/user-netflix-3.jpg'
import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
// const users = [
//     { name: "User1", image: user },
//     { name: "User2", image: user2 },
//     { name: "User3", image: user3 },
// ]

export const Users = () => {
    const { users, setSelectedUser } = useContext(UserContext);
    const handleUserClick = (user) => {
        setSelectedUser(user); 
    };


    return (
        <>
            <div className='logoContainer'>
                <img className='logo' src={Logo} alt="Netflix logo" />
            </div>
            <h1>Quem está assistindo?</h1>
            <div className='container'>
                <div className='cards'>
                    {users.map((user, index) => (
                        <div key={index} className='card' onClick={() => handleUserClick(user)}> 
                            <Link to="/Movies">
                                <img src={user.image} alt={user.name} className='user-image' />
                            </Link>
                            <p className='user'>{user.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}