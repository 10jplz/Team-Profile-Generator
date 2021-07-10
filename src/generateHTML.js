
const index = require("../index")



function generateHTML(addEmployee){


console.log(addEmployee)
if(addEmployee.role === "Manager") {
//generate code to go in index.html
return (`
const ${addEmployee.name} = \`
<div class='card' style='width: 18rem;'>
<div class='card-header'>
<h2>${addEmployee.name}</h2>
<h3>${addEmployee.role}</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: ${addEmployee.id}</p>
<p class='card-text'>Email: <a href='mailto:${addEmployee.email}'>${addEmployee.email}</a></p>
<p class='card-text'>Office Number: ${addEmployee.officeNumber}</p>
</div>
</div>\`
$(".card-deck").empty();
$(".card-deck").append(${addEmployee.name})`
);
}  

else if(addEmployee.role === "Engineer"){

return (`
const ${addEmployee.name} = \`
<div class='card' style='width: 18rem;'>
<div class='card-header'>
<h2>${addEmployee.name}</h2>
<h3>${addEmployee.role}</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: ${addEmployee.id}</p>
<p class='card-text'>Email: <a href='mailto:${addEmployee.email}'>${addEmployee.email}</a></p>
<p class='card-text'>GitHib: <a href='${addEmployee.githubUser}' target='_blank'>${addEmployee.githubUser}</a></p>
</div>
</div>\`
$(".card-deck").append(${addEmployee.name})`
);
}
else if(addEmployee.role === "Intern"){

return (`
const ${addEmployee.name} = \`
<div class='card' style='width: 18rem;'>
<div class='card-header'>
<h2>${addEmployee.name}</h2>
<h3>${addEmployee.role}</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: ${addEmployee.id}</p>
<p class='card-text'>Email: <a href='mailto:${addEmployee.email}'>${addEmployee.email}</a></p>
<p class='card-text'>School: ${addEmployee.school}</p>
</div>
</div>\`
$(".card-deck").append(${addEmployee.name})`
);
}
}
module.exports = generateHTML;
