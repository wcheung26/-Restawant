module.exports = function(sequelize, DataTypes) {
  
  var Restaurant = sequelize.define("restaurant", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    yelpId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verificationUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    isRestaurant: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    getterMethods: {
      isRestaurant: function() {
        return this.getDataValue('isRestaurant');
      }
    }
  });

  Restaurants.associate = function(models) {
    Restaurants.hasMany(models.Discounts, {
      onDelete: "cascade"
    })
  }; 

  return Restaurant;
};