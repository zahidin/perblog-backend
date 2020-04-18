# Perblog Backend 
This is Api for perblog (personal blog) using express typescript by implementing the best practice structure of api

![License](https://img.shields.io/github/license/zahidin/perblog-backend?style=flat-square)

## Motivation

I learned how I made a backend application with a maintainable and scalable structure to simplify the development process

## Installing

1. First you need to install mongodb

    See the documentation to install MongoDB on your computer: [documentation](https://docs.mongodb.com/manual/installation/)

2. Second install dependency

    ```bash
     npm install
    ```

3. Third app configuration in the .env file, for example in the .env.example file
4. Fourth run the application using this command
    ```bash
     npm run dev
    ```

## Running the tests

You can running the test using this command

```bash
npm run test
```

## Build

You can build using this command

```bash
npm run build
```

## Running For Production

You can run production mode with this command

```bash
npm run prod
```

## Documentation api

This documentation uses the help of the Swagger package, and you can see it here

```bash
http://localhost:5000/api/v1/docs
```
![screenshot-documentation](https://github.com/zahidin/perblog-server/blob/master/screenshot_documentation.png?raw=true)
## Project Structure

Here I will explain the structure of this project folder

```bash
.
├── dist                       # Compiled file javascript
├── node_modules               # This is a collection of dependencies
├── src
|  ├── __tests__               # Unit Testing files
|  ├── __mocks__               # Mock Data for unit testing & integration testing
|  ├── _tests__                # Unit Testing files
|  ├── bin					   # Folder for a collection of configuration application files
|     ├── Application.ts       # Application configuration file
|  ├── config	               # Configuration application
|  ├── constant                # General set of values
|  ├── core                    # Folder Domain
|     ├── Post	               # This is the folder for the domain post
|        ├── controller	       # This is the controller for the post domain
|        ├── docs              # This is the documentation api for the post domain
|        ├── repository        # This is the repository for the post domain, like an insert action to the database
|        ├── service           # This is the logic set before executing the action to the database
|        ├── validation        # This is the validation parameter for api
|        ├── index.ts          # This file to manage routing on the post domain
|     ├── ...
|  ├── docs                    # Parent of all documentation
|  ├── entity                  # Entity for typeorm
|  ├── global
|     ├── middleware	       # For global middleware
|     ├── repositories	       # For parent of repository
|  ├── routes                  # This is to retrieve all routing from the core folder
|  ├── types                   # A collection of all types
|  ├── utils                   # Util libs (formats, debugger, validation, etc)
|  └── index.ts                # App Entry point
|
├── .env                       # Example environment
├── .env.example               # Environment example
├── .gitignore                 # Git ignore
├── .eslintrc.js               # Configuration linter with eslint
├── .prettierrc.js             # Configuration code format with prettierr
├── LICENSE                    # The license file
├── README.md                  # This file
└── tsconfig.json              # Typescript configuration
```

## Authors

-   **Muhammad Zahidin Nur** - _Full stack developer_ - [My Github](https://github.com/zahidin)

See also the list of [contributors](https://github.com/zahidin/perblog-server/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
