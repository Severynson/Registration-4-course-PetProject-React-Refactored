import styles from "./AdminAccount.module.css";
import { React, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountsActions } from "../../store/slices/accountsSlice";
let acceptedUser;

const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles["userIcon"]}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const AdminAccount = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const accounts = useSelector((state) => state.accounts);
  useEffect(() => setUsers(accounts), []);

  // Code is shit, but is works...
  const AcceptUser = (component) => {
    let newUsersList = [];
    users.forEach((user, i) => {
      if (user.username !== component) {
        newUsersList.push(user);
      } else {
        console.log(user);
        const { username, password, name, aboutUser, key, gmail, instagram } =
          user;
        acceptedUser = {
          username,
          password,
          status: "Accepted",
          name,
          aboutUser,
          key,
          gmail,
          instagram,
        };
      }
    });
    dispatch(accountsActions.updateUsers(newUsersList));
    updateUserStatusOnServer(acceptedUser, acceptedUser.key);
    setUsers(newUsersList);
  };

  const DenieUser = (component) => {
    let newUsersList = [];
    users.forEach((user, i) => {
      if (user.username !== component) {
        newUsersList.push(user);
      } else {
        console.log(user);
        const { username, password, name, aboutUser, key, gmail, instagram } =
          user;
        acceptedUser = {
          username,
          password,
          status: "Denied",
          name,
          aboutUser,
          key,
          gmail,
          instagram,
        };
      }
    });
    dispatch(accountsActions.updateUsers(newUsersList));
    updateUserStatusOnServer(acceptedUser, acceptedUser.key);
    setUsers(newUsersList);
  };

  const updateUserStatusOnServer = async (userToUpdate, userToUpdateKey) => {
    console.log(userToUpdate, userToUpdateKey);
    let users = {};
    const newUsersList = accounts.map((o) => {
      users[o.key] = o;
    });

    console.log(users);

    users[userToUpdateKey] = userToUpdate;
    console.log(users);

    try {
      const response = await fetch(
        `https://registration4courserefactored-default-rtdb.europe-west1.firebasedatabase.app/users.json`,
        {
          method: "PUT",
          body: JSON.stringify(users),
          //   body: JSON.stringify({userToUpdateKey: {userToUpdate}}),
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={styles["admin-main-div"]}>
      <ul className={styles["unordered-list"]}>
        {users.map((curUser) => {
          const dummyKey = curUser.aboutUser + curUser.gmail + curUser.name;
          return (
            <div key={dummyKey} className={styles["li-textarea-and-btn-div"]}>
              <span className={styles["icon-and-name"]}>
                {userIcon}
                <li key={dummyKey}>{curUser.username}</li>
              </span>
              <p>{curUser.aboutUser}</p>
              <button
                className={styles["button"]}
                onClick={() => AcceptUser(curUser.username)}
              >
                Accept
              </button>
              <button
                className={styles["button"]}
                onClick={() => DenieUser(curUser.username)}
              >Denie</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminAccount;
