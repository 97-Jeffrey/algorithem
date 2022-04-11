function processLogs(logs, threshold) {


  let output = [];
  let idMap = {};

  for (let i = 0; i < logs.length; i++) {
    
    let log = logs[i][0].split(' ');

    if (log[0] == log[1]) {
      idMap[log[0]] ? idMap[log[0]]++ : idMap[log[0]] = 1;
    } 
    else {
      idMap[log[0]] ? idMap[log[0]]++ : idMap[log[0]] = 1;
      idMap[log[1]] ? idMap[log[1]]++ : idMap[log[1]] = 1;
    }
  }

  console.log(idMap);
  
  for(let id in idMap) {
    if(idMap[id] >= threshold) {
      output.push(id);
    }
  }
  
  return output.sort((a,b)=>b -a);
}

console.log(processLogs([
  ["345366 89921 45"],
  ["029323 38239 23"],
  ["38239 345366 15"],
  ["029323 38239 77"],
  ["345366 38239 23"],
  ["029323 345366 13"],
  ["38239 38239 23"]
], 3))