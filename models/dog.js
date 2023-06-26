export default (sequelize, DataTypes) => {
    const Dog = sequelize.define(
      'dogs',
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        color: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        tail_length: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        weight: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      },
    )
    return Dog
  }
  