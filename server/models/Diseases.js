module.exports = (sequelize, DataTypes) => {
    const Diseases = sequelize.define("Diseases", {
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        descr:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
    return Diseases;
}