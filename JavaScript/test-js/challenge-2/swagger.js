const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        version: "1.0.0",
        title: "Api MaisPraTi",
        description: "Express e Swagger "
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],
    components: {
        schemas: {
            someBody: {
                $name: "Dênis",
                $age: 23,
                about: "Dev Full Stack JAVEIRO!"
            },
            // someResponse: {
            //     name: "Ajaques",
            //     age: 24,
            //     diplomas: [
            //         {
            //             school: "idk",
            //             year: 2020,
            //             completed: true,
            //             internship: {
            //                 hours: 290,
            //                 location: "RS"
            //             }
            //         }
            //     ]
            // },
        },
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./endpoints.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index');           // Your project's root file
});