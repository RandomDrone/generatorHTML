"use strict"

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

   // console.log("modifyChars done")
    return newWord;
}


//handle start button
document.getElementById("btnStart").onclick = function ()
{
    var result1 = ["ROB?_Sercos.Slave_x.DeviceCodey"];
    const test = ["aa","bb","cc"];
    var result2 = [];
    var finalResults =[];
    var finalOutput = "";
    var state = 0;
    var newWord= '';
    var index = 0;
    var startVal;
    var endVal;
    var step;
    var key,key2;
    var sourceWord;
    var keysArray = [
        {
            startVal:1,
            endVal:3,
            step:1,
            key:"?"
        },
        {
            startVal:1,
            endVal:2,
            step:1,
            key:"x"
        },
        {
            startVal:1,
            endVal:4,
            step:1,
            key:"y"
        }
    ];

    //read input fields
    startVal = parseInt(document.getElementById("valStart").value);
    endVal = parseInt(document.getElementById("valEnd").value);
    step = parseInt(document.getElementById("step").value);
    key  = document.getElementById("key").value;
    key2  = document.getElementById("key2").value;
    sourceWord = document.getElementById("input").value;
   
    //incrementString
    // for(let i=startVal; i<=endVal; i=i+step)
    // {
    //    // newWord = newWord+ modifyChars(sourceWord, key, i) + "<br>";
    //    result1.push(modifyChars(sourceWord, key, i));
       
    // }

    console.log(keysArray.length);
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
