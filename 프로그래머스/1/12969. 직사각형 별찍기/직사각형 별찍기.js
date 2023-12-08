process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
   
    let str = ""
    for(let i = 1; i <= a; i++) {
        str += "*"
        
        
    }
    let d = str+"\n"
    console.log(d.repeat(b))
});