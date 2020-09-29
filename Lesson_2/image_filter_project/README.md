# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

```filteredimage``` endpoint is the new endpoint created to filter the given image. This endpoint takes an image url as "image_url" query parameter and proecsses the image if it is a valid url and returns to client (typically a browser).

### Deploying your system

Deploy process is quite straight forward
1. Use `eb init` to initialize a new application
2. Use `eb create` to create a new environment to deploy the service.

### Link to the endpoint URL for a running elastic beanstalk deployment
http://pj-image-filter-dev.us-west-2.elasticbeanstalk.com/
Example
http://pj-image-filter-dev.us-west-2.elasticbeanstalk.com/filteredimage?image_url=https://i.pinimg.com/564x/02/fa/49/02fa49d2252223aaceefc775d5fd3778.jpg
