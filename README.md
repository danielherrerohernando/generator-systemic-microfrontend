# generator-systemic-micro-frontend

=======

> A generator for a systemic microfrontend

## Installation

First, install [Yeoman](http://yeoman.io) and generator-systemic-micro-frontend using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g @guidesmiths/generator-systemic-micro-frontend
```

Then generate your new project:

```bash
mkdir my-micro-frontend
cd my-micro-frontend
yo @guidesmiths/generator-systemic-micro-frontend
```

## Usage

Once you have your project created there are several scripts you may use:

- 'npm start' -> To get your service up and running, serving a basic react app.
- 'npm run build:microfrontend' -> To generate a react bundle from your app which gets it registered as a custom-element in order to use it inside another app as a microfrontend.
- 'npm run build:independent' -> To generate a react bundle from your app that is required directly by the index.html and works as a standalone app served by the service.

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

ISC © [Guidesmiths Ltd]()
