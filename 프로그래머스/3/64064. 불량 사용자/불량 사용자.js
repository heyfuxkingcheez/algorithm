 const solution = (user_id, banned_id) => {
   const isMatch = (userId, bannedId) => {
       let regex = new RegExp("^" + bannedId.replace(/\*/g, ".") + "$");
       return regex.test(userId);
   }
   
   const getPossibleMatches = (user_id, banned_id) => {
       let possibleMatches =[];
       
       for(let ban of banned_id) {
           let matches = user_id.filter(user => isMatch(user, ban));
           possibleMatches.push(matches)
       }
       return possibleMatches;
   }
   
   const countUniqueCombinations = (matches, banned_id) => {
       let result = new Set();
       
       const backtrack = (index, current) => {
           if(index === banned_id.length) {
               let sortedCombination = [...current].sort().join(',')
               result.add(sortedCombination)
               return;
           }
           for(let user of matches[index]) {
               if(!current.has(user)) {
                   current.add(user);
                   backtrack(index + 1, current);
                   current.delete(user)
               }
           }
       }
       backtrack(0, new Set());
       console.log(result)
       return result.size
   }
   
  
let possibleMatches = getPossibleMatches(user_id, banned_id)
return countUniqueCombinations(possibleMatches, banned_id)  
 }
 
   
