import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../server/firebase";
import Nav from "../HomeScreen/components/Nav";
import "./index.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcj03if23Sm0V1iRgxJUobSe-JgSeZZJNM1nj_Kqm_xKbza7HZpxmeUDkLBwR0WqP9zDo&usqp=CAU"
            alt="Avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                className="profileScreen__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
