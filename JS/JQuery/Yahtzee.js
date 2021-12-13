let score=0;
let bonus=0;
let waardes=new Array();
let puntenscore = 0;

function check(id){
    let punten=0;
    let dezelfde=0;
    if(id=='1'||id=='2'||id=='3'||id=='4'||id=='5'||id=='6'){
        let classnamen=Number(id)-1;
        for(let a=1;a<=5;a++){
            if (document.getElementById('dobbelsteen'+a).className==classnamen){
                score+=Number(id);
                punten+=Number(id);
                puntenscore+=Number(id);
            }
        }
        if(puntenscore>=63&&bonus!=1){
            bonus=1;
            document.getElementById('bonustekst').value==35;
            score+=35
        }
    }else if(id=='3dezelfde'){
        for(let a=1;a<=5;a++){
            for(let i=1;i<=5;i++){
                if(document.getElementById("dobbelsteen"+i).className==a){
                    dezelfde++;
                }
            }
            if(dezelfde>=3){
                score+=a*dezelfde;
                punten+=a*dezelfde;
                a=5;
            }
        }
    }else if(id=='carre'){
        for(let a=1;a<=5;a++){
            for(let i=1;i<=5;i++){
                if(document.getElementById("dobbelsteen"+i).className==a){
                    dezelfde++;
                }
            }
            if(dezelfde>=4){
                score+=a*dezelfde;
                punten+=a*dezelfde;
                a=5;
            }
        }
    }else if(id=='fullhouse'){
        let waarde1=0;
        for(let a=1;a<=5;a++){
            for(let i=1;i<=5;i++){
                if(document.getElementById("dobbelsteen"+i).className==a){
                    dezelfde++;
                }
            }
            if(dezelfde==3&&waarde1!=1){
                waarde=1;
                score+=a*dezelfde;
                punten+=a*dezelfde;
            }else if(dezelfde==2&&waarde1!=1){                
                waarde=1;
                score+=a*dezelfde;
                punten+=a*dezelfde;
            }else if(dezelfde==3&&waarde1!=0){
                score+=a*dezelfde;
                punten+=a*dezelfde;
                a=5;
            }else if(dezelfde==2&&waarde1!=0){
                score+=a*dezelfde;
                punten+=a*dezelfde;
                a=5;
            }
        }
    }else if(id=='kl.straat'||id=='gr.straat'){
        let kl1=0;
        let kl2=0;
        let kl3=0;
        let kl4=0;
        let kl5=0;
        let kl6=0
        for(let i=1;i<=5;i++){
            if(document.getElementById("dobbelsteen"+i).className==0){kl1++}
            if(document.getElementById("dobbelsteen"+i).className==1){kl2++}
            if(document.getElementById("dobbelsteen"+i).className==2){kl3++}
            if(document.getElementById("dobbelsteen"+i).className==3){kl4++}
            if(document.getElementById("dobbelsteen"+i).className==4){kl5++}
            if(document.getElementById("dobbelsteen"+i).className==5){kl6++}
        }
        if(id=="kl.straat"){
            if(kl1>=1&&kl2>=1&&kl3>=1&&kl4>=1){straat(0);}
            else if(kl2>=1&&kl3>=1&&kl4>=1&&kl5>=1){straat(0);}
            else if(kl3>=1&&kl4>=1&&kl5>=1&&kl6>=1){straat(0);}
        }else{
            if(kl1>=1&&kl2>=1&&kl3>=1&&kl4>=1&&kl5>=1){straat();}
            else if(kl2>=1&&kl3>=1&&kl4>=1&&kl5>=1&&kl6>=1){straat();}
        }
        function straat(id){
            if(id=='0'){
                punten+=40;
                score+=40;
            }else{
                punten+=50;
                score=+50;
            }
        }
    }else if(id=='yahtzee'){
        for(let a=1;a<=5;a++){
            for(let i=1;i<=5;i++){
                if(document.getElementById("dobbelsteen"+i).className==a){
                    dezelfde++;
                }
            }
            if(dezelfde==5){
                score+=50;
                punten+=50;
                a=5;
            }
        }
    }else if(id="chance"){
        for(let a=1;a<=5;a++){
            for(let i=1;i<=5;i++){
                if(document.getElementById("dobbelsteen"+i).className==a){
                    punten+=a+1;
                    score+=a+1;
                }
            }
        }
    }
    document.getElementById(id+"tekst").value=punten;
    document.getElementById('score').value=score;
    document.getElementById(id).disabled=true;
    for(let i=1;i<=5;i++){
        document.getElementById("dobbelsteen"+i).removeAttribute('src');
        document.getElementById("dobbelsteen"+i).removeAttribute('class');
    }
}
function roll(){
let stenen=new Array("dice-one-solid", "dice-two-solid", "dice-three-solid", "dice-four-solid", "dice-five-solid", "dice-six-solid");
    for(let i=1;i<=5;i++){
        let random=parseInt(Math.random()*6);
        document.getElementById("dobbelsteen"+i).src="dobbelsteen/"+stenen[random]+".svg";
        document.getElementById("dobbelsteen"+i).className=random;
        waardes.push(random);
    }
}