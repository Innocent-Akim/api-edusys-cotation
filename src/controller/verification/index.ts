import { Response, Request, NextFunction } from "express";
import * as models from "../../models";
import { HttpStatusCode } from "../../enum/httpStatusCode";

export default {
    find: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await models.Etudiants.findAll({
                include: [
                    {
                        model: models.Inscription,
                        include: [
                            {
                                model: models.Verification, include: [
                                    { model: models.UniteEnseignement }
                                ]
                            },
                        ]
                    }
                ]
            })
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


    activeUE: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bodyResquest: IVerification = req.body;
            const response = await models.Verification.findOne({
                where: {
                    [models.Op.and]: [
                        { inscriptionId: bodyResquest.inscriptionId },
                        { uniteEId: bodyResquest.uniteEId }]
                }
            });
            if (response) {
                response.set({ is_active: !response.is_active });
                await response.save();
            }
            res.status(HttpStatusCode.Ok).json({ msg: 'La mise à jour a été effectuée avec succès.', data: response });
            return;
        } catch (error: any) {
            res.status(HttpStatusCode.BadRequest).json({ msg: `Une erreur est survenue. ${error.message}`, data: [] });
            return
        }
    },

    updateUE: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.query;
            const bodyResquest: IUniteEnseignement = req.body;
            const response = await models.UniteEnseignement.findOne({ where: id });
            if (response) {
                response.set({
                    codeUE: bodyResquest.codeUE,
                    credit: bodyResquest.credit,
                    semetre: bodyResquest.semetre,
                    designation: bodyResquest.designation,

                });
                await response.save();
            }
            res.status(HttpStatusCode.Ok).json({ msg: 'La mise à jour a été effectuée avec succès.', data: response });
            return;

        } catch (error: any) {
            res.status(HttpStatusCode.BadRequest).json({ msg: `Une erreur est survenue. ${error.message}`, data: [] });
            return
        }
    },
}