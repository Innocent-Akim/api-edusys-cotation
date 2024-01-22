import Joi from 'joi';
import { IClient } from '../types';

export const validatorCreateClient = (body: IClient) => {
    const Schema = Joi.object({
        fullname: Joi.string().min(2).optional(),
        sexe: Joi.string().valid('Masculin', 'Féminin', 'Autre').optional(),
        phone: Joi.string().min(2).required().regex(/^\+\d{10,}$/)
            .message('Le numéro de téléphone doit commencer par un signe plus (+) suivi d\'au moins 10 chiffres.'),
        mail: Joi.string().email().optional().message('Le champ email doit être une adresse email valide.')
    }).required().messages({
        'any.required': 'Le numéro de téléphone est obligatoire.'
    });

    return Schema.validate(body);
};
