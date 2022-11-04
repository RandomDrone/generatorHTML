const btnCopy = document.querySelector("#btnCopy");

btnCopy.addEventListener("click",   function() {
    var range = document.createRange();
    range.selectNode(document.getElementById("output"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    showSnackBar();
} );

//nie działa kopiowanie z DIVa
// function resultToClipboard() {
//     // Get the text field
//     var copyText = document.getElementById("output");
  
//     // Select the text field
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices
  
//      // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);
  
//     // Alert the copied text
//     alert("Copied the text: " + copyText.value);
//   }

  function showSnackBar() {
    var sb = document.getElementById("snackbar");
  
    //this is where the class name will be added & removed to activate the css
    sb.className = "show";
  
    setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
  }