const organizeInstructors = function(instructors) {
  let output = {};
  for(const each of instructors){
    let courseName = each.course;
    output[courseName] =[];
    for(const each of instructors){
      if(each.course === courseName){
        output[courseName].push(each.name)
      }
    }
  }
  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));