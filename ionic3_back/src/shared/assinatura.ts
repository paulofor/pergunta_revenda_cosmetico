export var PathValidador : string = 'http://www.digicom.inf.br:21040';


export var Cartao = {
    "nomeCartao": "",
    "bandeira": "",
    "numero": "",
    "anoExpira": "",
    "mesExpira": "",
    "verificador": ""
}



export var Assinatura = {
    "plan": "1C6706EE27273298846D2FAC6EA0FEEE",
    "sender": {
        "name": "",
        "email": "",

        "hash" : "",
        "phone": {
            "areaCode": "",
            "number": ""
        },
        "address": {
            "street": "",
            "number": "",
            "complement": "",
            "district": "",
            "city": "",
            "state": "",
            "country": "BRA",
            "postalCode": ""
        },
        "documents": [
            {
                "type": "CPF",
                "value": ""
            }

        ]
    },
    "paymentMethod": {
        "type": "CREDITCARD",
        "creditCard": {
            "token": "",
            "holder": {
                "name": "",
                "birthDate": "",
                "phone": {
                    "areaCode": "",
                    "number": ""
                },
                "documents": [
                    {
                        "type": "CPF",
                        "value": ""
                    }
                ]
            }
        },
    }
}
