import express from 'express';
import bodyParser from 'body-parser';
import { createUser, getUsers } from './userController';
import amqp from 'amqplib/callback_api';

const app = express();
app.use(bodyParser.json());

// RabbitMQ connection
let channel;
amqp.connect('amqp://localhost', (err, conn) => {
  if (err) {
    console.error(err);
  } else {
    conn.createChannel((err, ch) => {
      if (err) {
        console.error(err);
      } else {
        channel = ch;
        channel.assertQueue('user_registration', { durable: true });
        console.log('User service connected to RabbitMQ');
      }
    });
  }
});

// User routes
app.post('/users', createUser);
app.get('/users', getUsers);

app.listen(3001, () => {
  console.log('User service running on port 3001');
});

// Function to send message to RabbitMQ
export const publishToQueue = (queue, message) => {
  channel.sendToQueue(queue, Buffer.from(message));
};
