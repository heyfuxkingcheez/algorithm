function solution(s) {
    var answer = 0;
    var arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    arr.forEach((e, i) => {
       s = s.split(e).join(i)
        console.log(s)
        
    })
    return Number(s);
}