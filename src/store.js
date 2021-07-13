

const Jose = `
<div class='card text-white bg-primary mb-3' style='width: 18rem;'>
<div class='card-header'>
<h2>Jose 1</h2>
<h3>Manager</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: 1</p>
<p class='card-text'>Email: <a href='mailto:Jose@email.com'>Jose@email.com</a></p>
<p class='card-text'>Office Number: D</p>
</div>
</div>`
$(".card-deck").empty();
$(".card-deck").append(Jose)

const Brandy = `
<div class='card text-white bg-primary mb-3' style='width: 18rem;'>
<div class='card-header'>
<h2>Brandy</h2>
<h3>Intern</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: 3</p>
<p class='card-text'>Email: <a href='mailto:Brandy@email.com'>Brandy@email.com</a></p>
<p class='card-text'>School: BYU</p>
</div>
</div>`
$(".card-deck").append(Brandy)

const Max  = `
<div class='card text-white bg-primary mb-3' style='width: 18rem;'>
<div class='card-header'>
<h2>Max Contreras</h2>
<h3>Engineer</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: Max</p>
<p class='card-text'>Email: <a href='mailto:Max@email.com'>Max@email.com</a></p>
<p class='card-text'>GitHib: <a href='https://github.com/10jplz@gmail.com' target='_blank'>10jplz@gmail.com</a></p>
</div>
</div>`
$(".card-deck").append(Max)