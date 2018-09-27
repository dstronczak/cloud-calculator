# Amazing Cloud Calculator

A simple calculator using React.js and SpringBoot.

## Technical stack

The following things were used for this project:
* Frontend
    * `React.js`
    * `Webpack`
    * `Npm`
    * `Babel`
    * `Axios`
    
* Backend
    * `SpringBoot`
    * `Gradle`
    * `MongoDB`
    * `Lombok`
    * `EvalEX`

## Running the project

### Prerequisites

To run the project install the following:
* `npm` - package manager
* `mongodb` - NoSQL database engine


### Running in dev mode

Before you attempt to start the backend make sure that `mongodb` in running. To start `mondodb` daemon run:
```
mongod
```

#### Running backend only

To build and run backend only in dev mode run this in project root:
```
./gradlew :backend:bootRun
```

To open the app open the following url in web browser:
```
http://localhost:8080/
```

#### Running frontend only

To build and run frontend only in dev mode run this in project root:
```
./gradlew :frontend:bootRun
```

To open the app open the following url in web browser:
```
http://localhost:3000/
```

#### Running frontend and backend together

To build and run frontend only in dev mode run this in project root:
```
./gradlew buildAndRunAll
```

To open the app open the following url in web browser:
```
http://localhost:8000/
```

## Building production ready jar

In order to build a production ready jar with all the backend and frontend bundled run the following in project root:
```
./gradlew buildProductionJar
```

To start the app run:

```
java -jar backend/build/libs/cloudcalculator-0.1.0.jar
```
## Authors

* **Dawid Stronczak** - dstronczak@gmail.com

