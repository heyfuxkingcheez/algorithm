function solution(answers) {
    var answer = [];
    let result = [];
    let a = [1, 2, 3, 4, 5]
    let b = [2, 1, 2, 3, 2, 4, 2, 5]
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
   let countA = 0;
   let countB = 0;
   let countC = 0;
    
    const calculate = (whose, countWhose) => {
       const lengthCalculate = Math.ceil(answers.length / whose.length)
       const repeatedResult = Array.from({length: lengthCalculate}, () => whose).flat().slice(0, answers.length)
       
       for(let i = 0; i < answers.length; i++) {
           if(repeatedResult[i] === answers[i]) {
               countWhose ++
           } else {
               countWhose += 0
           }
       }
        result.push(countWhose)
    }
   calculate(a, countA)
   calculate(b, countB)
   calculate(c, countC)
    
    const max = Math.max(...result)
    
   console.log(max)
   for(let i = 0; i < result.length; i++) {
      if(max === result[i]) answer.push(i + 1)
   }
    console.log(answer)
    return answer;
}