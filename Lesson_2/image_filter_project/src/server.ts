import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { isWebUri } from 'valid-url';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get( "/filteredimage", async ( request: Request, response: Response, next ) => {
    const image_url = request.query.image_url;

    if (!image_url) {
      return response.status(400).send("No image url specified for filtering. Please provide valid image url as 'image_url' parameter.");
    }
    else if (!isWebUri(image_url)) {
      return response.status(400).send("image_url :'" + image_url + "' is not a valid image url. Please make sure that you provide valid image url.");
    }
    
    try {
      let filtered_image_path = await filterImageFromURL(image_url);
      response.sendFile(filtered_image_path, async(error) => {
        await deleteLocalFiles([filtered_image_path]);
        if (response.headersSent && !error) {
          response.status(200);
        }
        else {
          next(error);
        }
      });
    }
    catch(error) {
      response.status(500).send("An unknown error occured while trying to filter the image.");
    }
  });
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req: Request, res: Response ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();