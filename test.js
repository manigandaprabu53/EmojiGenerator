function selectGroup(data){
    let sel = document.getElementById("category");
    try{
        let grp;
        sel.addEventListener('change', (e)=>{
            // if(grp.length > 0){
            //     grp.forEach((e)=>{
            //         document.querySelector("#group").removeChild(e)
            //     })
            // }
            grp = [];

            console.log(grp)
            // e.preventDefault();
    //         data.forEach((e)=>{
    //             if(e.category === sel.value){
    //                 if(!grp.includes(e.group)){
    //                     grp.push(e.group)
    //                 }
    //             }
    //         })
    //         grp && grp.forEach(e=>{
    //             let opt = document.createElement("option");
    //             opt.innerText = e;
    //             console.log(e)
    //             document.querySelector("#group").appendChild(opt);
    //         })
    //     })

        
    // }
    // catch(error){
    //     console.log(error)
    // }
}


// Function to get the category from the API
async function getCategory(){
    try {
        let res = await fetch('https://emojihub.yurace.pro/api/all',{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        let arr = [];
        if(res.status === 200){
            let data = await res.json();
            
            data.forEach((e)=>{
                if(!arr.includes(e.category)){
                    arr.push(e.category);
                }  
            })
            arr.forEach(e=>{
                let opt = document.createElement("option");
                opt.innerText = e;
                document.querySelector("#category").appendChild(opt);
            })
            selectGroup(data);

            
        }
    } catch (error) {
        console.log(error)
    }
}
getCategory();




