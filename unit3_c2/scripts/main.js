
function Form(n,e,s,t){
    this.name = n;
    this.email=e ;
    this.address= s;
    this.amount=t;

}



function storeData(event){
    event.preventDefault();
   let form = document.getElementById("user_form");
   let name = form.name.value;
   let email = form.email.value;
   let address = form.address.value;
   let amount = form.amount.value;

   let s1= new Form(name,email,address,amount)

   let data= JSON.parse(localStorage.getItem('user'))||[];

   data.push(s1);

   localStorage.setItem('user',JSON.stringify(data))

   console.log(s1)
}