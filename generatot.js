"use strict"

function modifyChars(word, oldChar, newChar)
{
    var newWord='';

    for( let i of word)
    {
        if (i == oldChar)
        {
            newWord = newWord+newChar;  
        }
        else newWord = newWord+i;
    }

    return newWord;
}

//handle start button
document.getElementById("btnStart").onclick = function ()
{
    var result1 = [];
    var result2 = [];
    var finalResults =[];
    var finalOutput = "";
    var keyObj = 
    {
        startVal: 0,
        endVal: 0,
        step: 0,
        key: ""
    };
    var keysArray = [
        {
            startVal: 0,
            endVal: 0,
            step: 0,
            key: ""
        }
    ];

    //read input fields
    result1[0] = document.getElementById("input").value;

    keysArray[0].startVal = parseInt(document.getElementById("valStart").value);
    keysArray[0].endVal = parseInt(document.getElementById("valEnd").value);
    keysArray[0].step = parseInt(document.getElementById("step").value);
    keysArray[0].key  = document.getElementById("key").value;

    
    keyObj.startVal = parseInt(document.getElementById("valStart2").value);
    keyObj.endVal = parseInt(document.getElementById("valEnd2").value);
    keyObj.step = parseInt(document.getElementById("step2").value);
    keyObj.key  = document.getElementById("key2").value;
   if(keyObj.startVal != NaN && keyObj.endVal != NaN && keyObj.step != NaN && keyObj.step > 0 && keyObj.key != "")
   {
    keysArray.push(keyObj);
   }
    
    //incrementString
    for(let k = 0; k < keysArray.length; k++)
    {
       if( (k%2) === 0 )
       {
            //result 1 -> result 2
            result2.length = 0; //clear output
            for(let word of result1)
            {
                for(let i = keysArray[k].startVal; i<=keysArray[k].endVal; i=i+keysArray[k].step)
                {
                    result2.push(modifyChars(word, keysArray[k].key, i));
                }
            }
       }
       else
       {
            //result 2 -> result 1
            result1.length = 0; //clear output
            for(let word of result2)
            {
                for(let i = keysArray[k].startVal; i<=keysArray[k].endVal; i=i+keysArray[k].step)
                {
                    result1.push(modifyChars(word, keysArray[k].key, i));
                }
            }
       }
    }
    
    if( (keysArray.length%2)===0 )
    {
       // console.log(result1);
        finalResults = result1;
    }
    else
    {
        //console.log(result2);
        finalResults = result2;
    }
    
    for(let e of finalResults)
    {
        finalOutput = `${finalOutput}${e}<br>`
    }
   
    document.getElementById("output").innerHTML = finalOutput;

    //console.log("incrementString done")
    
    console.log("main function done");
};
