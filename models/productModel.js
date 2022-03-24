import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Product = db.define(
  'products',
  {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    stock: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Product;
