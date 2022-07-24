module.exports = (sequelize, DataTypes) => {
  const Plans = sequelize.define("Plans", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    general: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    specialist: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    physiotherapy: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    feePerMonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },          
  });

  return Plans
};