# Hot Dashboard

This project was generated with [Create React App](https://github.com/facebook/react/) version 16.4.2.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build` directory.

## Deploy on AWS S3
You need to set up a s3 bucket and make sure "Static website hosting" is enabled as well as public access to read data.

A simple tutorial for reference: [here](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)

## Further help

To get more help on React use `npm help` or go check out the [React README](https://github.com/facebook/react/blob/master/README.md).

## Dependencies

    - @material-ui/core
    - @material-ui/icons
    - victory

## Material

This project is developed with material components. In order to have a proper theme, we had to override the default 
theme from [MaterialUI](https://material-ui.com/).

You can have more informations on this [here](https://material-ui.com/customization/themes/#theme-configuration-variables).

## Victory

In order to visualize data in the way we want, we used [Victory](https://github.com/FormidableLabs/victory) 
which is very useful.

For more detailed informations, you can check out the [Victory Documentation](https://formidable.com/open-source/victory/docs/).

## Docker

This project works with Docker.
Pay attention to the @react version in your package.json file and make sure it corresponds to the one in the Dockerfile.

To start coding in a safe environment, please launch the docker container with the following command:

```bash
sudo docker-compose up devapp
```

If it's the first time, please run 
```bash
sudo ./docker-build.sh hot/dashboard
```
 