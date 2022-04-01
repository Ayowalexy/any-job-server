# any-job-server

### Kwaba Rent Application
Kwaba is a rent financing platform that helps renters split their annual rent into monthly payments. For renters to get qualified to use Kwaba as a service, they have to get pre-approved for a rent amount. This pre-approval shows the renter how much they can get from Kwaba towards their rent. 

## npm run server
To start the server in in development mode, using port 5000. All incoming TCP request can then be forwarded to the appropriate route.

### Session Management
The Kwaba server is hosted on heroku with all records managed by MongoDB. Each user accessing the Application is given a unique session id which is eventually stored on MongoDB using the client library ***connect-mongo*** 
The session data are stored for 7 days until they are refreshed to ensure that user rental application process is uninterrupted.

### Tokenization
To ensure all requests are coming from a trusted origin, data moving to and from the front-end is signed using a secret listed in the environment variables.

## Query Management
To ensure that query requests are handled appropriately and also to ensure that results are returned as fast as possible, an architecture is being designed using the ***Redis*** library. This helps to ensure queries get cached.
