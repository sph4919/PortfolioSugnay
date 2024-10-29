//toggle setter

let count = 1;

function toggleSetter(event)
{


  if(count % 2 !== 0)
  {


  let navigation = document.getElementById("hideNavigation");
  navigation.style.display = "none";

  let blank = document.getElementById("hideblank");
  blank.style.display = "none";

  let content = document.getElementById("ContentSection");
  content.style.width = "98vw";
  count++;
  

  let Name = event.targetName;
  console.log(Name)
  }
  else
  {
    let navigation = document.getElementById("hideNavigation");
    navigation.style.display = "block";
  
    let blank = document.getElementById("hideblank");
    blank.style.display = "block";
    console.log(count);
    let content = document.getElementById("ContentSection");
    content.style.width = "72vw";
  
    count++;
  }


}