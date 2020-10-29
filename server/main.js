import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'Primeira Tarefa',
      'Segunda Tarefa',
      'Terceira Tarefa',
      'Quarta Tarefa',
      'Quinta Tarefa',
      'Sexta Tarefa',
      'Sétima Tarefa'
    ].forEach(insertTask);
  }
});