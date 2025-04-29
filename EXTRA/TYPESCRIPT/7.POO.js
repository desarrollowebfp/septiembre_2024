var Character = /** @class */ (function () {
    function Character(name, level) {
        this.name = name;
        this.level = level;
    }
    Character.prototype.info = function () {
        return "".concat(this.name, " tiene el nivel ").concat(this.level);
    };
    return Character;
}());
var cloud = new Character("Cloud Strife", 50);
console.log(cloud.name);
console.log(cloud.level);
console.log(cloud.info());
