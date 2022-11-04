function modifyChars(word, oldChar, newChar)
{
    var newWord='';

    // for(var i=0; i < word.length; i++)
    // {
    //     if (word[i] == oldChar)
    //     {
    //         newWord = newWord+newChar;  
    //     }
    //     else newWord = newWord+word[i];
    // }

    for( let i of word)
    {
        if (i == oldChar)
        {
            newWord = newWord+newChar;  
        }
        else newWord = newWord+i;
    }

    console.log("modifyChars done")
    return newWord;
}

function incrementString()
{
    var newWord='';

    for(var i=startVal; i<=endVal; i=i+step)
    {
        newWord = newWord+ modifyChars(sourceWord, key, i) + "<br>";
    }

    console.log("incrementString done")
    return newWord;
}

    
    var startVal;
    var endVal;
    var step;
    var key;
    var sourceWord;


//handle start button
document.getElementById("btnStart").onclick = function ()
{
    //read input fields
    startVal = parseInt(document.getElementById("valStart").value);
    endVal = parseInt(document.getElementById("valEnd").value);
    step = parseInt(document.getElementById("step").value);
    key  = document.getElementById("key").value;
    sourceWord = document.getElementById("input").value;

    
    document.getElementById("output").innerHTML=incrementString();
    console.log("main function done");
};

//console.log(incrementString(-1, 5, ".", "Jeden.Dwa."));