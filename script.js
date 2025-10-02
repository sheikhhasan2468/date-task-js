 function showdate(){
    let input = document.getElementById("dateinput").value;

    if (input){
        let date = new Date(input);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();


        document.getElementById("result").innerText = 
          `Day: ${day}, Month: ${month}, Year: ${year}`;
}
else{
    document.getElementById("result").innerHTML=
    "please select date" ;
}

}