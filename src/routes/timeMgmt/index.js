import { getApp } from '@firebase/app';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { userStore } from '../../stores/userStore';

export async function get({ request }) {
  const user = request.query.get('user');
  let todos;
  // const querySnapshot = await getDocs(collection('s', 'users'));
  // querySnapshot.docs.filter((doc) => {
  //   doc.data.arguments.user === user;
  // });

  return {
    status: 200,
    body: {
      todos: 'todo'
    }
  };
}

export async function post({ request }) {
  let db;
  if (getApp() != null) {
    db = getFirestore();
  }
  let user = 'test';
  // userStore.subscribe((user) => {
  //   console.log(user);
  //   if (user.database != null) {
  //     db = user.database;
  //     user = user.user;
  //   } else {
  //     console.log('wtf did you do to get to this point');
  //   }
  // });
  let name;

  await request.json().then((data) => {
    name = data.name;
  });

  if (!(name || user)) {
    return {
      status: 418,
      message: 'need todo/user name'
    };
  }
  console.log(name);

  try {
    const docRef = await addDoc(collection(db, 'todos'), {
      name: name,
      user: user
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }

  return {
    status: 200,
    body: {
      message: 'Todo Added :) '
    }
  };
}

// export async function put({ request }){

// }
