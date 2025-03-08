console.log("Hello World!!!")
console.log("Hello Smriti")

setTimeout(()=>{
    console.log("I am inside set timeout")
},200
);

console.log("The End")


const callback=(arg)=>{
    console.log(arg)
}

const loadScript=(src, callback)=>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload=callback("Smriti");
    document.head.append(sc)

}
loadScript("URL",callback)