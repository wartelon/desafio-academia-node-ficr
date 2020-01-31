/*
FB = require('fb')
//require('dotenv').config()
//import fbtoken from "../configEnv"

FB.setAccessToken("EAAOVu0XPZCa8BABBVJTtZBm9CatrTxwKxKM3O2ZAfeCznIkxbZA9fkHifZCfhYWgIVIM8DWFJibUDRWQfU0MzMIVTTrD91VhnRD8bI8apeXjUH8LlmBDjMuJaYrYEo9XeZCDEGrlZAMvHok36bHHq83FquxBOLrNj48F5ZCkeqZBLovZC783lNUhRNvRpFVZBiWPIBMoDFSI1rIY25Fhf9qWCPqzcRhUlev05wSnQGlCWgipQZDZD");
FB.api('me', { fields: ['id', 'name', 'email'] }, 
function (res) {
      const dados = res
})
*/


const axios = require("axios").default;

module.exports = axios.create({
  
  baseURL:  "https://graph.facebook.com/v5.0/me?fields=id%2Cname&access_token=EAAOVu0XPZCa8BAHJOYhxz9GBZA0XIxL9ifaKGDWpW6pbqU2isjXOkfriJwBqhRHHNNJ3r0RKEciF0MZCviGm0u06iz3s2by4VuZACGE6VBzWFJJMteB5X7SwOXK2kxlKHYSPne3e8RpHngoFqL9tTFyyVyWvElFX7Kiagp6eJuFZCAgPEqNutWPYwkvuwTdRyGptxxPrioiRuv6PM2AZC4t1Tu1il8NqfcyZAtvbUXMlAZDZD"
});





/*
axios = require('axios')


async function dataface(){
    const response = await axios.get(
        "https://graph.facebook.com/v5.0/me/?fields=name%2Cbirthday%2Clocation%2Cemail%2Cgender&access_token=EAAOVu0XPZCa8BAHcW9zmYRJcJ6xIrI4N7FDrJ98CTW3FjMqtglDm39Q5XXwkcdDM8L66VKW8lnmJIcTufIQzBg7XRdiwnalpZBtbBWayddVe5WtfudrGxy3XNRgc1lIXmpozmVEdCdI6k3uSEPYQ7BdIWAae5G1eOxNCPMq4mlCHRQymSyoapcFeq5A8oZD")
    console.log(response)
}
dataface()
*/





