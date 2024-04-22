let user = {
  name: "Mauricio",
  age: 33,
  isProfessor: true,
  courses: ["programming 1", "programming 2", "mathematical logic 1"],
};
let user_json = JSON.stringify(user);
console.log("Data type: " + typeof user_json);
console.log(user_json);

let userObject = JSON.parse(user_json);
console.log("Data type: " + typeof userObject);
console.log(userObject);

let schedule = `{
    "meetups": [
        { "title": "Conference 1", "date": "2017-11-30T12:00:00.000Z" },
        { "title": "Conference 2", "date": "2017-04-18T12:00:00.000Z" }
        ]
    }`;
schedule = JSON.parse(schedule, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});
console.log("Date: " + schedule.meetups[1].date.getDate());
