import { NextFunction, Request, Response } from 'express';
import * as models from '../../models';
import { HttpStatusCode } from '../../enum/httpStatusCode';
import { initCompare, initHash } from '../../helpers/helpers.salt';
import { initGene } from '../../middlewares/middleWaresToken';
export default {

    createUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bodyResquest = req.body;
            const passwordHash = await initHash(bodyResquest.password)
            const response = await models.User.create({ ...bodyResquest, password: passwordHash });
            if (response) {
                res.status(HttpStatusCode.Created).json({ msg: 'Nouvel élément ajouté avec succès', data: response });
                return;
            } else {
                res.status(HttpStatusCode.BadRequest).json({ msg: "Une erreur est survenue. Veuillez réessayer.", data: null });
                return
            }
        } catch (error: any) {
            res.status(HttpStatusCode.NonAuthoritativeInformation).json({ msg: `Une erreur est survenue. ${error.message}`, data: [] });
            return
        }
    },
    findAllUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await models.User.findAll();
            if (response) {
                res.status(HttpStatusCode.Ok).json({ msg: 'Voici la liste des éléments que vous avez demandée ', data: response });
                return;
            } else {
                res.status(HttpStatusCode.BadRequest).json({ msg: "Une erreur est survenue. Veuillez réessayer.", data: null });
                return
            }
        } catch (error: any) {
            res.status(HttpStatusCode.NonAuthoritativeInformation).json({ msg: `Une erreur est survenue. ${error.message}`, data: [] });
            return
        }
    },

    authUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bodyResquest: IUser = req.body;

            const response = await models.User.findOne({ where: { email: bodyResquest.email } });

            if (response) {
                const password = await initCompare(bodyResquest.password, response.password);
                if (password) {
                    const token = await initGene({ id: response.id, mail: response.email });
                    res.status(HttpStatusCode.Ok).json({ msg: "L'authentification a été réussie avec succès.", data: response, token });
                    return;
                } else {
                    res.status(HttpStatusCode.BadRequest).json({ msg: "Échec de l'authentification.Veuillez réessayer.", data: null });
                    return;
                }

            } else {
                res.status(HttpStatusCode.BadRequest).json({ msg: "Échec de l'authentification.Veuillez réessayer.", data: null });
                return;
            }
        } catch (error: any) {
            res.status(HttpStatusCode.NonAuthoritativeInformation).json({ msg: `Une erreur est survenue. ${error.message}`, data: [] });
            return
        }
    }


}