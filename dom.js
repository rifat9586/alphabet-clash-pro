function homeScrine(){
    const Home = document.getElementById('homeScrine');
    Home.classList.add('hidden');

    const play = document.getElementById('playSection');
    play.classList.remove('hidden');


    const aplfa = playGarund();

    // const upar=aplfa.toUpperCase();
    
    const textAlf = document.getElementById('alfy')
    textAlf.innerText = aplfa;

    contanewGame(aplfa);
}
function contanewGame(ement){
    const setAlfabat = document.getElementById(ement)
    setAlfabat.classList.add('bg-orange-400');
}
function playGarund(){
    const playString="abcdefghijklmnopqrstvwxyz";
    const stringDebug=playString.split('');
    // console.log(stringDebug)

    const rendomNum=Math.random() * 25;
    const index=Math.round(rendomNum);
    // console.log(index);

    const alfabat=stringDebug[index];
    return alfabat;
}

function keyparass(){
    const lisankey=document.adoptedStyleSheets('keyup');
    console.log(lisankey);
}