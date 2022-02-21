import db from '$lib/db';
import { addDoc, collection } from 'firebase/firestore';

export async function get(req) {
  return {
    status: 200,
    body: {
      todo: 'todo'
    }
  };
}

export async function post({ request }) {
  let name;
  let user;

  await request.json().then((data) => {
    name = data.name;
    user = data.user;
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

  //const { id } = req.params;
  //console.log(id);

  //const db = await connectToDB();
  // OLD MYSQL DATABASE ****
  // db.query(
  //   'INSERT INTO timemgmtschema.todos (username, todoname, todoID, importantFlag, urgenFlag, startTime, endTime, days, recEvent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
  //   ['neil', name, 1, 1, 1, 7, 8, 'all', 1],
  //   function (error, results, fields) {
  //     if (error) throw error;
  //     return {
  //       status: 200,
  //       body: { error: false, data: results, message: 'New todo has been created successfully.' }
  //     };
  //   }
  // );
  //return text;
  return {
    status: 200,
    body: {
      message: 'Todo Added :) '
    }
  };
}

// export async function put({ request }){

// }
