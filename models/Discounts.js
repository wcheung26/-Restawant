module.exports = function(sequelize, DataTypes) {
  var Discount = sequelize.define("discount", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    discount: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    clicks: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 0
    }, 
    
    expiration: { 
      type: DataTypes.DATEONLY, 
      allowNull: false, 
      validate: { 
        isDate: true     
      }
    },

    url: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: { 
        isUrl: true     
      }
    }
 
  });

    Discount.associate = function(models) {
      Discount.belongsTo(models.restaurant, {
        foreignKey: {
          allowNull: false
        }
      }); 
    }

    Discount.associate = function(models) {
      Discount.belongsTo(models.influencer, {
        foreignKey: {
          allowNull: false
        }
      }); 
    }

  return Discount;
};