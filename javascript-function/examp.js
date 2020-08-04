function comp(err){
    if(err){
        return response.send(err)
    } else{
        response.send("tasks completed")
    }
}
function comp1(err,tasks){
 if(err){
     return response.send(err);
 } else {
     tasks.completed = true;
     tasks.save(comp(err));
 }
}
function comp2(err, user){
    if(err){
        return response.send(err)
    }else{
        Tasks.findById(user.taskId,comp1(err,tasks));
    }
}
function endpointHandler(request,response){
    user.findById(request.userId,comp2(err,user));
}