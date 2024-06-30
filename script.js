function groupElement(data){
    let gp = document.getElementById("group");
gp.addEventListener('change',(e)=>{
// e.preventDefault()
let val = document.querySelector("#group").value;
console.log(val)
let gif = data.filter((e)=>{
    if(e.group === val)
        return e.htmlCode;
})
let myDiv = document.getElementById("wrapper");
myDiv.innerHTML = "";
gif.forEach((e)=>{
    let par = document.createElement("p");
    par.innerHTML = e.htmlCode;
    par.setAttribute('style', 'display: inline-block;')
    document.getElementById("wrapper").appendChild(par);
})
})
}

function selectGroup(data){
    let sel = document.getElementById("category");
    try{
        let grp;
        sel.addEventListener('change', (e)=>{
            grp = [];
            // e.preventDefault();
            data.forEach((e)=>{
                if(e.category === sel.value){
                    if(!grp.includes(e.group)){
                        grp.push(e.group)
                    }
                }
            })
            document.querySelector("#group").length = 0;
                grp && grp.forEach(e=>{
                let opt = document.createElement("option");
                opt.innerText = e;
                document.querySelector("#group").appendChild(opt);
            })
            groupElement(data);
        })    
    }
    catch(error){
        console.log(error)
    }
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




