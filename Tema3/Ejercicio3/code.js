navigator.userAgent.replaceAll(/[1234567890]/g, "");

function sumar(s) {
    let num=0;
    for(let i=0;i<=s.lenght;i++){
        if(!isNaN(Number(s[i]))){
            sum+=Number(s[i]);
        }

    }
}