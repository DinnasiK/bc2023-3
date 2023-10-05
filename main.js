const fs = require("node:fs")

fs.readFile("data.json", (err, data) =>{
    if(err===null){
        const d = JSON.parse(data)

        let maxr = 0;

        for(const a of d){
            if(a.rate > maxr){
                maxr=a.rate;
            }
        }

        fs.writeFile("output.txt", `Максимальний курс:${maxr}`, (err) => {
            if(err===null){
                console.log("The file has been saved!")
            } else {
                console.log(err)
            }
        }
        )

    } else {
        console.log(err)
    }
})