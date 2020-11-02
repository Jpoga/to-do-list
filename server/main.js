import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/api/TasksCollection';

const insertTask = (taskText, user) => 
  TasksCollection.insert({ 
    text: taskText,
    userId: user._id,
    createdAt: new Date()
  });

const SEED_USERNAME = 'Jpoga'
const SEED_PASSWORD = 'password'

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME)

  if (TasksCollection.find().count() === 0) {
    [
      'Primeira Tarefa',
      'Segunda Tarefa',
      'Terceira Tarefa',
      'Quarta Tarefa',
      'Quinta Tarefa',
      'Sexta Tarefa',
      'Sétima Tarefa'
    ].forEach(taskText => insertTask(taskText, user));
  }
});