import { useState, useEffect } from 'react';

import * as userService from '../../services/userService';

import { UserCreate } from './user-create/UserCreate';
import { UserDelete } from './user-delete/UserDelete';
import { UserDetails } from './user-details/UserDetails';
import { UserEdit } from './user-edit/UserEdit';
import { UserItem } from "./user-item/UserItem";

export const USER_ACTIONS = {
  create: 'create',
  details: 'details',
  edit: 'edit',
  delete: 'delete'
};

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [userAction, setUserAction] = useState({ user: null, action: null });

  useEffect(() => {
    userService.getAll()
      .then(users => setUsers(users));
  }, []);

  function clickUserHanlder(action, userId) {
    userService.getById(userId)
      .then(user => setUserAction({ user, action }));
  }

  function closeHandler() {
    setUserAction({ user: null, action: null });
  }

  function createUserHandler(e) {
    e.preventDefault();

    const body = Object.fromEntries(new FormData(e.target));
    const userData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phoneNumber: body.phoneNumber,
      imageUrl: body.imageUrl,
      address: {
        country: body.country,
        city: body.city,
        street: body.street,
        streetNumber: body.streetNumber
      }
    };

    userService.create(userData)
      .then(user => {
        setUsers(oldUsers => [...oldUsers, user]);
        closeHandler();
      });
  }

  // function detailsUserHanlder(userId, action) {
  //   userService.getById(userId)
  //     .then(user => setUserAction({ user, action: USER_ACTIONS.details }));
  // }

  function deleteUserHanlder(userId) {
    userService.deleteById(userId)
      .then(user => {
        setUsers(oldUsers => [...oldUsers.filter(u => u._id !== userId)]);
        closeHandler();
      });
  }

  function editUserHandler(e, userId) {
    e.preventDefault();

    const body = Object.fromEntries(new FormData(e.target));
    const userData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phoneNumber: body.phoneNumber,
      imageUrl: body.imageUrl,
      address: {
        country: body.country,
        city: body.city,
        street: body.street,
        streetNumber: body.streetNumber
      }
    };

    userService.edit(userData, userId)
      .then(user => {
        setUsers(oldUsers => [...oldUsers.map(u => u._id !== userId ? u : user)]);
        closeHandler();
      });
  }

  return (
    <>
      {userAction.action === USER_ACTIONS.create && <UserCreate closeHanlder={closeHandler} createUserHandler={createUserHandler} />}

      {userAction.action === USER_ACTIONS.details && <UserDetails closeHanlder={closeHandler} user={userAction.user} />}

      {userAction.action === USER_ACTIONS.delete && <UserDelete closeHanlder={closeHandler} deleteUserHanlder={() => deleteUserHanlder(userAction.user._id)} />}

      {userAction.action === USER_ACTIONS.edit && <UserEdit closeHanlder={closeHandler} user={userAction.user} editUserHanlder={editUserHandler} />}


      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => <UserItem key={u._id} user={u} clickUserHanlder={clickUserHanlder} />)}
          </tbody>
        </table>
      </div>
      <button className="btn-add btn" onClick={() => clickUserHanlder(USER_ACTIONS.create, null)}>Add new user</button>
    </>
  );
};