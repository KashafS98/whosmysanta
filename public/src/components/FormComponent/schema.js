import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const schema = {
    title: 'Test',
    type: 'object',
    properties: {
        friends : {
          type: 'array',
          items : {
            type : 'object',
            properties : {
              name : {
                type : 'string',
              },
              email : {
                type : 'string',
              }
            },
            "required": [
                "name",
                "email"
              ]
          }
        }
    },

};




const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema) {
    const validator = ajv.compile(schema);

    return (model) => {
        validator(model);
        return validator.errors?.length ? { details: validator.errors } : null;
    };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);