function solution(arr, delete_list) {
    let answer = arr.filter(a => !delete_list.includes(a))
    return answer;
}