let boredUrl = "https://www.boredapi.com/api/activity/"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const paramType = urlParams.get('type')
const paramQuantity = urlParams.get('quantity')

let validTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

if(paramType)
{
    if(validTypes.includes(paramType))
        boredUrl = "https://www.boredapi.com/api/activity?type=" + paramType
}

for(let count = 0; count < paramQuantity; count++)
{
    fetch(boredUrl).then(response => response.json()
    .then(activityObject => document.getElementById("activities").innerHTML += activityObject.activity + "." + "<br>"))
}