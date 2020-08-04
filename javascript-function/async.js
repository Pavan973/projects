function endpointHandler(request,response) {
    user.findById(request.userId,function(err,user){
        if(err){
            response.send(err);
        } else {
            Tasks.findById(user.taskId,function(err,tasks){
                if(err){
                    return response.send(err);
                }else{
                    tasks.completed = true;
                    tasks.save(function(err){
                        if(err){
                            return response.send(err);
                        }else{
                            response.send("tasks completed");
                        }
                    });
                }
            });
        }
    });
}