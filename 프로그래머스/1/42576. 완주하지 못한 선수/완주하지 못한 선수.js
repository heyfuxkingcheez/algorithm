function solution(participants, completions) {
    var answer = '';
    let participantsMap = new Map()
    
    for(const participant of participants) {
        participantsMap.set(participant, (participantsMap.get(participant) || 0) + 1)
    }
    
    
    for(const completion of completions) {
        if(participantsMap.get(completion) > 0) {
            participantsMap.set(completion, (participantsMap.get(completion) - 1))
        }
    }
    
    for(const participantMap of participantsMap) {
        if(participantMap[1] > 0) {
            answer = participantMap[0]
        }
    }
    
    return answer;
}