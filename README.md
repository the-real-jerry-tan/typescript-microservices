# Microservices Architecture with Node.js, TypeScript, and RabbitMQ

## Project Description

This project demonstrates a microservices architecture built with Node.js and TypeScript, leveraging RabbitMQ for inter-service communication. The architecture consists of two primary services:
1. **User Service**: Handles user registration and management.
2. **Order Service**: Handles order creation and management, listening for user-related events from the User Service via RabbitMQ.

Each service is containerized using Docker, making it easy to scale, maintain, and deploy in a distributed environment.

## Features

- **Microservices architecture**: Separate services for users and orders to ensure modularity and scalability.
- **RabbitMQ integration**: For reliable and asynchronous communication between the services.
- **User Registration**: Users can register and manage their accounts, triggering events to RabbitMQ.
- **Order Creation**: Orders can be created and managed, with checks on user existence through RabbitMQ events.
- **Docker**: Both services are containerized for easy deployment and management.
- **Database Integration (future)**: Currently using in-memory data structures, future enhancements will include integration with PostgreSQL.
- **JWT Authentication (future)**: Secure authentication and protected routes using JWT.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:
- **Docker**: To run the services in containers.
- **Node.js** (version 14 or later)
- **npm**: Comes with Node.js for managing dependencies.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/the-real-jerry-tan/typescript-microservices.git
   cd typescript-microservices
   ```

2. Navigate to the Docker directory and start the services:

   ```bash
   cd docker
   docker-compose up
   ```

3. The **User Service** will be available at [http://localhost:3001](http://localhost:3001) and the **Order Service** at [http://localhost:3002](http://localhost:3002).

### API Endpoints

#### User Service
- `POST /users`: Register a new user.
- `GET /users`: Get all users.

#### Order Service
- `POST /orders`: Create a new order.
- `GET /orders`: Get all orders.

### RabbitMQ Management
RabbitMQ will be available at [http://localhost:15672](http://localhost:15672) with default credentials:
- **Username**: guest
- **Password**: guest

## Future Enhancements

1. **Database Integration**: Replace the in-memory storage with PostgreSQL for persistent data storage.
2. **JWT Authentication**: Add JWT-based authentication for user login and protected API routes.
3. **API Gateway**: Introduce an API gateway to manage service discovery and API routing.
4. **Scaling with Kubernetes**: Explore deploying the services using Kubernetes for orchestration.
5. **Logging & Monitoring**: Add centralized logging and monitoring using ELK stack or Prometheus.

## Author

This project was created and is maintained by [Jerry Tan](https://github.com/the-real-jerry-tan).

## License

This project is proprietary software. Unauthorized use or distribution is prohibited.
