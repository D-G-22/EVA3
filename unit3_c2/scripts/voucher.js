


const url= "https://masai-vouchers-api.herokuapp.com/api/vouchers";

async function getData(){

    try{
        let res= await fetch(url);

    let data= await res.json();
    append(data);
    console.log(data);

    } catch(err){

        console.log(err)
    }
    
}
getData()

function append (data){
    let container=document.getElementById("voucher_list");
    container.innerHTML=null;

   // data.forEach(function(el){
        //let container=document.getElementById("voucher_list");


        let img= document.createElement("img");
        img.src=data.image;

        let h2 = document.createElement("h2");
        h2.innerText=data.name;

        let p= document.createElement("p");
        p.innerText=data.price;

        let div= document.createElement("div");
        div.append(img,h2,p);
        container.append(div);


    //});
}