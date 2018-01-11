


const Sequelize = require('sequelize');
const sequelize = new Sequelize('bloggy-mc-bloggers', 'allysonconrad', '', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize   
    .authenticate()
    .then(() => {
        console.log('that totally connected, man');
    })
    .catch((err) => {
        console.error('Oh noes that did not work.  ');
    })

module.exports = sequelize;

// User.sync()
//     .then (() => {
//         console.log('It should have created the table.');
//         return User.create({
//             firstName: 'Allyson',
//             lastName: 'Cooooonrad'
//         });
//     });

// User.findOne({
//     where: {
//         id: 1
//     }
// })
// .then((me) =>{
//     console.log(me)
// })

