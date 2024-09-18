import express from 'express';
import bodyParser from 'body-parser';
import { createOrder, getOrders } from './orderController';
import amqp from 'amqplib/callback_api';

const app = express();
app.use(bodyParser.json());

// RabbitMQ connection to listen for user registration events
amqp.connect('amqp://localhost', (err, conn) => {
  if (err) {
    console.error(err);
  } else {
    conn.createChannel((err, ch) => {
      if (err) {
        console.error(err);
      } else {
        ch.assertQueue('user_registration', { durable: true });
        ch.consume('user_registration', (msg) => {
          if (msg !== null) {
            console.log(`Received new user registration: ${msg.content.toString()}`);
            // Process user registration event
            ch.ack(msg);
          }
        });
        console.log('Order service connected to RabbitMQ');
      }
    });
  }
});

// Order routes
app.post('/orders', createOrder);
app.get('/orders', getOrders);

app.listen(3002, () => {
  console.log('Order service running on port 3002');
});
