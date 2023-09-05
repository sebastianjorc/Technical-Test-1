'use strict';
const users = [
    {
      username: 'test@test.com',// 'userTest',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test0@test.com',// 'userTest0',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test1@test.com',// 'userTest1',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test2@test.com',// 'userTest2',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test3@test.com',// 'userTest3',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test4@test.com',// 'userTest4',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test5@test.com',// 'userTest5',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test6@test.com',// 'userTest6',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test7@test.com',// 'userTest7',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test8@test.com',// 'userTest8',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test9@test.com',// 'userTest9',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test10@test.com',// 'userTest10',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test11@test.com',// 'userTest11',
      //email: 
      password: 'Test1234!', // Asegúrate de que la contraseña esté hasheada
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Agrega más usuarios aquí si lo deseas
];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Insertar registros con la opción 'ignoreDuplicates'
      return queryInterface.bulkInsert('Users', users, {
        ignoreDuplicates: true,
        updateOnDuplicate: ['username'], // Opcional, especifica qué campos actualizar si se encuentra un duplicado
      });
    } catch (error) {
      console.error('Error al insertar registros en la tabla Users:', error);
      throw error; // Reenviar el error para que se maneje adecuadamente
    }
  },

  down: async (queryInterface, Sequelize) => {
    const usernames = users.map(user => user.username);
    try {
      // Eliminar registros por nombre de usuario
      return queryInterface.bulkDelete('Users', { username: usernames });
    } catch (error) {
      console.error('Error al eliminar registros en la tabla Users:', error);
      throw error; // Reenviar el error para que se maneje adecuadamente
    }
  }
};
