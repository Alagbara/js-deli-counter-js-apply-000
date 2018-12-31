
function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson)
  
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine){
  
  if(!katzDeliLine.length){
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  //if( nowServing = 0){
    //return ("There is nobody waiting to be served!")
  //}
}

function currentLine(line){
  if (!line.length) {
    return "The line is currently empty."
  }
  console.log(line)
  if(currentLine === 0){
    return " The line is currently empty."
  }
  return currentLine
}


