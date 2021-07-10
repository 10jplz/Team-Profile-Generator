

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

const Max = `
<div class='card' style='width: 18rem;'>
<div class='card-header'>
<h2>Max</h2>
<h3>Engineer</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: 2</p>
<p class='card-text'>Email: <a href='mailto:maxi@email.com'>maxi@email.com</a></p>
<p class='card-text'>GitHib: <a href='https://github.com/10jplz' target='_blank'>10jplz</a></p>
</div>
</div>`
$(".card-deck").append(Max)

const Brandy = `
<div class='card' style='width: 18rem;'>
<div class='card-header'>
<h2>Brandy</h2>
<h3>Intern</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: 5</p>
<p class='card-text'>Email: <a href='mailto:brandy@email.com'>brandy@email.com</a></p>
<p class='card-text'>School: uofu</p>
</div>
</div>`
$(".card-deck").append(Brandy)