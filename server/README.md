# Crime-Zero-Server

## Setup

    1. Clone Project.
    ```
    $ git clone git@github.com:seerviashish/crime-zero.git

    cd crime-zero/server
    ```

    2. Run yarn to install dependancy.
    ```
    $ yarn
    ```

    3. To start project. [DEV]
    ```
    $ yarn start
    ```

    4. To test project.
    ```
    $ yarn test
    ```

    5. To start project using pm2 in local.
    ```
    $ yarn pm2:start
    ```

### Project RUN [Important]

    - Image URL = https://hub.docker.com/repository/docker/seerviashish17/crime-zero-server

    [For Developer]
    - 1. Build Docker image
    ```
    $ ./build.sh
    ```
    - 2. Push image with tag
    ```
    $ docker push seerviashish17/crime-zero-server:v1.0.0
    ```
    [Note: 1 and 2 steps are for only developer]

### Setup server as container service in local

    1. Go to server folder [server inside server folder]
    ```
    cd crime-zero/server/server
    ```
    2. If your cli has docker-compose than run
    ```
    $ docker-compose up -d
    ```
    or

    - From Docker image
    ```
    $ ./run
    ```
