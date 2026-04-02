const object = {
    name : "Asmit",
    age : 20,
}

console.log(object);

const obj = new Object({ name: "Asmit"});

console.log(obj);

obj.name = "Asmit Sharma";
const user = {
  name: "Asmit",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

user.greet(); // Hello Asmit

console.log(obj);

const gameDev = {
  name: "Asmit",
  skills: ["C++", "Unity", "Blender"],
  isLearning: true,
  uploadVideo: function() {
    console.log("Uploading devlog...");
  }
};


