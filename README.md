# React Webpack Express Tourney

Credit to simple-react-full-stack github repository creator for the boiler plate allowing me to set up webpack

# First make dir for key that is needed for backend
mkdir src/server/api/keys
vim src/server/api/keys/riotapi.js

# riotapi.js file
var keys = {
        RIOTAPI_KEY: 'RGAPI-2b93647e-46ba-40ca-8b84-032ea334d496'
}
module.exports = keys;


var keys = {
        RIOTAPI_KEY: 'XXXX-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' https://developer.riotgames.com/ < -- register for key there 
}
module.exports = keys;

# Then go to main dir and run these commands
yarn
yarn build
yarn start
