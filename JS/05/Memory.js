let score=0;
let waarde=0;
let fout=0;
let plaatjearr=new Array();


function start(){
    let classwaarde=0;
    for(let a=0;a<=17;a++){
        waarde=0
        let random=parseInt(Math.random()*9+1);
        for(let i=0;i<=17;i++){
            if(plaatjearr[i]==random){
                waarde++;
            }
        }
        if(waarde>=2){
            a--;
        }else{
            plaatjearr.push(random);
            let plaatje = document.createElement("img");
            plaatje.id=classwaarde;
            plaatje.setAttribute('onClick', "klik(this.id)");
            document.getElementById("plaatjes").appendChild(plaatje);
            classwaarde++;
        }
    }
}
function klik(klas){
    if(document.getElementById(klas).className=="done"){
        alert("Je hebt deze kaart al gevonden")
    }else{
        if(document.getElementsByClassName("actief")[0]!==null){
            document.getElementById(klas).className="actief";
            document.getElementById(klas).src="../img/aap"+plaatjearr[klas]+".jpg";
            if(document.getElementsByClassName("actief")[0].id==document.getElementById(klas).id){
                fout+=1;
                setTimeout(document.getElementsByClassName("actief")[0].className=null, 200);
                setTimeout(document.getElementById(klas).className=null, 200);
            }else if(document.getElementsByClassName("actief")[0].src==document.getElementById(klas).src){
                score+=1;
                document.getElementsByClassName("actief")[0].className="done";
                document.getElementById(klas).className="done";
            }else{
                fout+=1;
                setTimeout(
                    document.getElementsByClassName("actief").className=null,
                    document.getElementById(klas).className=null,
                    2000
                );
            }
        }else{
            document.getElementById(klas).src="../img/aap"+plaatjearr[klas]+".jpg";
            document.getElementById(klas).className="actief";
        }
    }
    text();
}
function text(){
    document.getElementById('scoretext').innerHTML="Score: "+score;
    if(fout==0){
        document.getElementById('fouttext').innerHTML="Fout: nog "+fout+" keer";
    }else{
        document.getElementById('fouttext').innerHTML="Fout: "+fout+' keer';
    }
    if(fout<=5){
        document.getElementById('fouttext').style.color='#000';
    }else if(fout<=10){
        document.getElementById('fouttext').style.color='#ff8000';
    }else{
        document.getElementById('fouttext').style.color='#f00';
    }
}
function reset(){
    // for(a=0;a<=17;a++){
    //     let c=document.getElementByClassName(a);
    //     c.parentNode.removeChild(c);
    // }
    // score=0;
    // fout=0;
    // text()
    // start();
}
start();