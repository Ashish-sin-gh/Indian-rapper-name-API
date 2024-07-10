const express = require('express');
const app = express();
const PORT = 8000;

const rappers={
    'divine':{
        'name':'vivian wilson silva fernandes',
        'age': 35,
        'date of birth': '16 nov 1988'
    },

    'emiway bantai':{
        'name':'bilal shaikh',
        'age': 35,
        'date of birth': '13 nov 1995'
    },

    'raftaar':{
        'name':'dilin nair',
        'age': 35,
        'date of birth': '2 oct 1990'
    },

    'badshah':{
        'name':'aditya prateek singh',
        'age': 35,
        'date of birth': '19 nov 1985'
    },
    
    'not a rapper':{
        'name':'not a rapper',
        'age': 'no data',
        'date of birth': 'no data'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:rapperName',(request, respose)=>{
    const rapperSelected = request.params.rapperName.toLowerCase();
    if(rappers[rapperSelected]){
        respose.json(rappers[rapperSelected]);
    } else{
        respose.json(rappers['not a rapper']);
    }
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})