### Description

This project uses a music library platform API (https://openwhyd.github.io/openwhyd/API) and showcases a specific users top 15 tracks. It also allows the user to interact with the information and eventually leads them to the youtube link for the specific songs. All this done with APIs!! (The project only uses GET requests) 

There are 2 pages in this project -> Home Page and Song Page. 
The Home Page shows ~15 songs from the users profile and the Song Page shows the information on each item, which can be accessed by clicking on an item on the home page. 

In this app, I have used 2 components - Loading Spinner and Card. Card helps show all the items in the home page and Loading Spinner shows when the information is loading and has not displayed yet. 

There is also a linting config setup and has been applied to the repo


### Running the app

To fire up the project run `npm install` and then `npm run start` in the root directory
Also provide temporary access by visiting -> https://cors-anywhere.herokuapp.com/corsdemo inorder to make the api work properly. 

### Challenges 

As this was my first React project, it took me longer to find solutions to the issues I faced. One of the major issues faced was enabling cors on the website inorder to make a successful API call. I tried multiple approaches including adding Headers to the fetch call and setting mode to 'no-cors' but none were successful with my project. 

### Improvements

In order to improve on this project and ensure that it is in line with the latest design and atomic design principles, I would add more reusable components but break them down in smaller files so that they can be utilised as seperate components as well. 
Other improvements would include the addition of a search filter and using a more complex API so that it can be used efficiently with search. 

Overall this was a fun project to work on with a lot of learning!! 
