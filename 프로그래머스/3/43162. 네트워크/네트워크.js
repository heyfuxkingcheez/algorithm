function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let networkCount = 0;
    
    const bfs = (startNode) => {
        let queue = [startNode];
        visited[startNode] = true;
        
        while (queue.length > 0) {
            let node = queue.shift();
            for(let i = 0; i < n; i++) {
                if(computers[node][i] === 1 && !visited[i]) {
                    queue.push(i);
                    visited[i] = true
                }
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]){
            bfs(i);
            networkCount++;
        }
    }
    
    
    return networkCount;
}