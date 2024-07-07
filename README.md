# ServerApp

![Project Screenshot](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEaDUbm-9Fn_f1AOKG7MGLkmvk1ShlMn5PywHxFty6y2BPhtUJOgXF3PIlTbj1N6Mh_M&usqp=CAU)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

# Server Management Application with Angular

This project demonstrates a simple server management application using Angular and Spring Boot. The Angular frontend communicates with the Spring Boot backend to manage servers, providing functionalities such as creating, pinging, listing, retrieving, updating, and deleting servers.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

### Backend (Spring Boot)

1. Clone the backend repository:
    ```bash
    git clone https://github.com/yourusername/server-management-backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd server-management-backend
    ```

3. Build the project using Maven:
    ```bash
    mvn clean install
    ```

4. Run the application:
    ```bash
    mvn spring-boot:run
    ```

### Frontend (Angular)

1. Clone the frontend repository:
    ```bash
    git clone https://github.com/yourusername/server-management-frontend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd server-management-frontend
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the application:
    ```bash
    ng serve
    ```

## Usage

The application provides several functionalities to manage servers. You can interact with these functionalities through the Angular frontend.

### Backend Endpoints

- **Create a Server:** `POST /server/save`
- **Ping a Server:** `GET /server/ping/{ipAddress}`
- **List Servers:** `GET /server/list`
- **Get Server by ID:** `GET /server/get/{id}`
- **Update Server:** `PUT /server/update`
- **Delete Server:** `DELETE /server/delete/{id}`
- **Get Server Image:** `GET /server/image/{fileName}`

### NotificationService (Angular)

The `NotificationService` in Angular provides methods to display notifications using the `angular-notifier` library.

- **onDefault(message: string):** Displays a default notification with the given message.
- **onInfo(message: string):** Displays an informational notification with the given message.
- **onSuccess(message: string):** Displays a success notification with the given message.
- **onWarning(message: string):** Displays a warning notification with the given message.
- **onError(message: string):** Displays an error notification with the given message.

### ServerService (Angular)

The `ServerService` in Angular provides methods to interact with the backend API for managing servers.

- **servers$:** An observable that fetches the list of servers.
- **save$(server: Server):** An observable that saves a new server.
- **ping$(ipAddress: string):** An observable that pings a server by its IP address.
- **filter$(status: Status, response: CustomResponse):** An observable that filters servers by status.
- **delete$(serverId: number):** An observable that deletes a server by its ID.

## Features

- **Create a Server:** Add a new server to the repository with details like IP address, name, memory, type, image URL, and status.
- **Ping a Server:** Check if a server is reachable by its IP address and update its status.
- **List Servers:** Retrieve a list of all servers with a specified limit.
- **Get Server by ID:** Retrieve a specific server's details by its ID.
- **Update Server:** Update the details of an existing server.
- **Delete Server:** Remove a server from the repository by its ID.
- **Get Server Image:** Serve server images stored on the file system.
- **Notification System:** Display notifications for various actions using `angular-notifier`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
