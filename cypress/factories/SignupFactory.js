var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{
    deliver: function()
    {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '17022014',
                street: 'Rua José Jarbas Saconato',
                number: '0204',
                details: 'Ap 202',
                district: 'Parque City',
                city_state: 'Bauru/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}



