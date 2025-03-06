function createCard(title,cName,views,monthsOld, duration, thumbnail){


    let viewStr
    if(views<1000000){
        viewStr=views/1000 + "K";

    }





   let html=`<div class="card">
   <div class="image">
                    <img src="${thumbnail}"
                </div>
                <div class="capsule">${duration}</div>
                <div class="text">
                    <h1> ${title}</h1>
                    <p>${cName} . ${viewsNumber} views. ${monthsOld} months ago</p>
                </div>
    </div>`
    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}