import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "./../../assets/images/iconUsers.png";
import css from './Users.module.css';

let User = ({ user, followingInProgress, unfollow, follow, ...props }) => {

    return (
        <div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={css.photo} src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow</button>
                    }
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>
        </div>)
}

export default User;