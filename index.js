
function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson)
  
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine){
 let katzDeliLine = "first person in line"
 return katzDeliLine;
  
  if(nowServing > 0){
  katzDeliLine.pop()
  }
  if( nowServing = 0){
    return ("There is nobody waiting to be served!")
  }
}


