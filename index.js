function takeANumber(curr,name){
  curr.push(name)
  return `Welcome, ${name}. You are number ${curr.length} in line.`
}

function nowServing(curr){
  if(curr.length > 0){
    var first = curr[0]
    curr.pop()
    return `Currently serving ${first}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
}