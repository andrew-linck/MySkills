# React Webpack Express Tourney

Credit to simple-react-full-stack github repository creator for the boiler plate allowing me to set up webpack

# First make dir for key that is needed for backend
mkdir src/server/api/keys </br>
vim src/server/api/keys/riotapi.js

# riotapi.js file
var keys = {</br>
        RIOTAPI_KEY: 'XXXX-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'</br>
}</br>
module.exports = keys;</br> 

get here -> https://developer.riotgames.com/

# Then go to main dir and run these commands
yarn
yarn build
yarn start
