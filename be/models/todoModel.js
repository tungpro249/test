import { DataTypes } from 'sequelize';
import sequelize from '../config/connect.js';

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
  },
});

export default Todo;
