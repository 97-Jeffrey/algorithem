

const reorderDataFile = (logs) =>{


  let logData = [];
  let digitData = [];


  for(let i=0; i<logs.length; i++){
    let data = logs[i].split(" ")[1];

    if(!isNaN(data)){
      digitData.push(logs[i])
    }else{
      logData.push(logs[i])
    }
  }

  logData.sort((a,b)=>{
    let aData = a.split(" ").slice(1).join(" ");
    let bData = b.split(" ").slice(1).join(" ");

    return aData ===bData? a.localeCompare(b):aData.localeCompare(bData);
  })


  return [...logData, ...digitData]

}

let logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"];
console.log(reorderDataFile(logs))