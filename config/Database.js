import {Sequelize} from "sequelize";

const db = new Sequelize('freedb_tht_crud','freedb_dandan','wXq3P!f9fZgjWnR',{
    host: 'sql.freedb.tech',
    dialect: "mysql"
});

export default db;