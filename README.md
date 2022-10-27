# GLSE
Software Engineering Project - Grammar and Linguistics Search Engine

## Project Description
This project has been proposed by our client at Monash University, Xiao Chen, who wants us to develop a web application that will help non-english speaking researchers to write professional research papers. 

GLSE is a React-Typescript web based application, supported by a Node-Javascript backend service. GLSE utilises an array of NLP theories and practices to assist academic students from different backgrounds to structure well-formed English sentences by searching for nouns, adjectives, verbs and many other parts of speech.

## Project setup 
- Install IDE of your choice (Recommended: Visual Studio Code OR Webstorm)
- Install npm
- Install node.js

Clone project from GitHub: https://github.com/marcusmariette/GLSE

**React Frontend**<br/>
In your terminal:
1. `cd client`
2. `npm install`
3. `npm start`
4. If started correctly, you should see the multiple lines of text with `Compiled successfully!` 
5. You can visit the link shown in the terminal: http://localhost:3000


**Node.js Backend**<br/>
In your terminal:
1. `cd client`
2. `npm install`
3. `npm start`
4. You should see the line<br/> `GLSE Backend Server Started on Port 3001...` 
5. You can now use Postman to make a request from the collection OR you can start using the frontend to search

## Technical Implementation
- `React.js`: Frontend JavaScript/Typescript library that assists in building user interfaces
- `Axios`: React Javascript/Typescript library used to call REST APIs from our backend ode.js service
- `Node.js`: Backend JavaScript library used for server side programming to create reactive, event-driven API services
- `Express`: Backend framework used alongside Node.js to build REST APIs
- `Jest`: Library to unit test both our frontend and backend
- `prettier`: Code Linting
- `Postman/Newman`: Used to create a collection to easily make API requests and write end to end backend tests

## Testing
### Unit Tests
Unit tests have been created in both the frontend and backend using Jest. 

**React Frontend**<br/>
In your terminal:
1. `cd client`
2. `npm run test`
3. You should then see all tests pass

**Node.js Backend**<br/>
In your terminal:
1. `cd client`
2. `npm run test`
3. You should then see all tests pass

### End to End Postman Server Tests
This can be done in two ways:<br/>
**Through Postman Application**
1. Download Postman - https://www.postman.com/downloads/
2. Open Postman
3. Go to `Collections`
4. Click `Import` and import `GLSE_postman_collection.json` located in folder `GLSE/server/test`
5. Run GLSE application (follow setup)
6. Right click the collection `GLSE Collection` and click `Run collection`
7. Make sure all requests are selected and click `Run GLSE Collection`
8. You should then see all tests pass

**Through Newman CLI**
1. Install Newman - https://www.npmjs.com/package/newman
2. Run GLSE application (follow setup)
3. In your terminal: <br/>`newman run server/test/GLSE_postman_collection.json`
4. You should then see all tests pass

## Team Members
### Project Lead
Edric Loh
### Project Members / Developers
Ali Moalin <br />
Ranjan Chandel <br />
Jake Varrese <br />
Marcus Mariette <br />
Michael Cafra <br />
