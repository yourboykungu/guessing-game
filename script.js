const answer= Math.floor(Math.random()*100 +1);

function compare()
{
    let guess = Number(document.getElementById("guess").value);
    if(guess == answer)
    {
        document.querySelector("p").innerHTML= "congratulations, you got it!!😎";
        
    }else if(guess > answer)
    {
       
        document.querySelector("p").innerHTML= guess  + " is too high 😌";
    }else
    {
       
        document.querySelector("p").innerHTML= guess + " is too low 😌";
    }
};
