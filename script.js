

const url = "https://jsonplaceholder.typicode.com/users";

 const res = fetch(url)
 //console.log(res)
 .then((data)=>data.json())
 .then((data1)=>{
    const box = document.getElementById("box")
    const row = document.getElementById("users-container")
    //const column = document.getElementById("col")
    
for(let i=0;i<data1.length;i++){
    
        row.innerHTML += `
        <div class="col-sm-4" id="column">
       

        <div class="card" id="crd">
        
                         <h6 class="card-title txt">Name:${data1[i].name}</h5>
                         <p class="card-text txt">Email:${data1[i].email}</p>
                         <p class="card-text txt">Street:${data1[i].address.street}</p>
                         <p class="card-text txt">City:${data1[i].address.city}</p>

        

        </div>
        </div>`
        
        box.append(row)
}

})
 .catch((error)=>{
 console.log(error)
 })

    // for(let i=0;i<data1.length;i++){
    //     console.log(`Name:${data1[i].name} Email:${data1[i].email} Street:${data1[i].address.street} City:${data1[i].address.city}`)
    //         }

    // }
    // )