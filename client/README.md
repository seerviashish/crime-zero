# Crime-Zero-Client

## Setup

    1. Clone Project.
    ```
    $ git clone git@github.com:seerviashish/crime-zero.git

    cd crime-zero/client
    ```

    2. Run yarn to install dependancy.
    ```
    $ yarn
    ```

    3. To start project.
    ```
    $ yarn start
    ```

    4. To build project.
    ```
    $ yarn build
    ```

    5. To test project.
    ```
    $ yarn test
    ```

## Using docker image setup client as container

    1. Go to client as root
    ```
    $ cd crime-zero/client
    ```

    2. Run docker-compose up -d or ./run script
    ```
    $ docker-compose up -d
    ```

### Project RUN [Important]

    - Image URL = https://hub.docker.com/repository/docker/seerviashish17/crime-zero-client

    [Note: Below For Developer Only]
    - docker push seerviashish17/crime-zero-client:v1.0.0
    - docker-compose up -d

    - From Docker image
    ```
    $ ./run
    ```

    - Build Local and Run
    ```
    $ ./setup-local
    ```

    - Build docker image local
    ```
    $ ./setup-docker
    ```
    [Note: For Developer Only]

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
