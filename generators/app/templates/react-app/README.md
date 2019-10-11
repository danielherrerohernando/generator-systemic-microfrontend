## Starting the micro-frontend

### Start the app <br>

Run `npm start`.<br>

### Build <br>

Run `npm run build:microfrontend`.<br>
It will generate a bundle in the microBundle folder. With this bundle the app can be used as a web-component.<br>

Run `npm run build:independent`.<br>
It will generate a bundle in the public/js folder. With this bundle the app can be used as an independent react app.<br>

### Linting <br>

Run the `npm run lint` command to test if there are any lint errors.<br>
Run the `npm run lint:fix` to let lint to autofix the errors.<br>
