ajax.get('bugReport').then((name)=>{
    alert(`User name is ${name}`);
}, (message)=>{
    alert(`Error message text: ${message}`);
});