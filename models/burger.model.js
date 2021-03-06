module.exports = function(sequelize, DataTypes){
   var Burgers = sequelize.define("Burgers", {
    burgerName: {
       type: DataTypes.STRING,
       allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
      }
   });

   return Burgers;
}