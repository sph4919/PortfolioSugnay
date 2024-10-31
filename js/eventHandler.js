//toggle setter

let count = 1;

function toggleSetter()
{


  if(count % 2 !== 0)
  {


  let navigation = document.getElementById("hideNavigation");
  navigation.style.display = "none";
  

  let blank = document.getElementById("hideblank");
  blank.style.display = "none";
  blank.style.transition = "0.7s";

  let content = document.getElementById("ContentSection");
  content.style.width = "96vw";
  content.style.marginLeft = "35px";
  count++;

  let navbutton = document.getElementById("toggle");
  navbutton.style.transition = "1s";
  navbutton.style.height = "30px";
  

  
  }
  else
  {
    let navigation = document.getElementById("hideNavigation");
    navigation.style.display = "block";
    navigation.style.transition = "0.7s"
  
    let blank = document.getElementById("hideblank");
    blank.style.display = "block";
    blank.style.transition = "0.7s";

    let content = document.getElementById("ContentSection");
    content.style.width = "72vw";
    content.style.marginLeft = "0px";

    let navbutton = document.getElementById("toggle");
    navbutton.style.transition = "1s";
    navbutton.style.height = "45px";

    
  
    count++;
  }


}


function scrollAbout()
{
    document.getElementById('AboutSC').scrollIntoView({ behavior: 'smooth' });
}
function scrollEducation()
{
    document.getElementById('EducationSC').scrollIntoView({ behavior: 'smooth' });
}
function scrollPS()
{
    document.getElementById('PSSC').scrollIntoView({ behavior: 'smooth' });
}
function scrollCerti()
{
    document.getElementById('CertiSC').scrollIntoView({ behavior: 'smooth' });
}
function scrollFuture()
{
    document.getElementById('FutureSC').scrollIntoView({ behavior: 'smooth' });
}
function scrollWE()
{
    document.getElementById('WESC').scrollIntoView({ behavior: 'smooth' });
}
