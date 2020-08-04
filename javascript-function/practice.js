var anObj = {
    cost: 1234,
    get_cost : function() {
        return this.cost;
    }
};
var acustomObj = Object.create(anObj);
acustomObj.cost = 4321;
delete acustomObj.cost;
console.log(acustomObj.get_cost());