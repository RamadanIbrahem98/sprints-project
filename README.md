# sprints-project

## setting up the environment

create a file ./config/config.env \
add to that file the following environment variables \
PORT => 8080 \
NODE_ENV => development \
MONGO_URI => mongodb+srv://\<username>:\<password>@cluster0.kkwic.mongodb.net/sprints-project?retryWrites=true&w=majority replaceing username and password with yours

## Running in development

open two terminal windows \
the first one in root and type

```sh
npm run dev
```

the secon one in angular-src and type

```sh
ng serve -o
```

## building the app

in angular-src terminal type

```sh
ng build
```

this will build public folder in the root \
\
then run the node application

```sh
npm start
```

## Contributing

For Contributing check the [Contributing.md](Contributing.md).
