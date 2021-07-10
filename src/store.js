

const jose = `
<div class='card' style='width: 18rem;'>
<div class='card-header'>
<h2>jose</h2>
<h3>Manager</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: 1</p>
<p class='card-text'>Email: <a href='mailto:jose@email.com'>jose@email.com</a></p>
<p class='card-text'>Office Number: d</p>
</div>
</div>`
$(".card-deck").empty();
$(".card-deck").append(jose)

const max = `
<div class='card' style='width: 18rem;'>
<div class='card-header'>
<h2>max</h2>
<h3>Intern</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: 2</p>
<p class='card-text'>Email: <a href='mailto:maxi@email.com'>maxi@email.com</a></p>
<p class='card-text'>School: uofu</p>
</div>
</div>`
$(".card-deck").append(max)