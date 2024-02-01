import { Response, Request, NextFunction } from "express";
import * as models from "../../models";
import { HttpStatusCode } from "../../enum/httpStatusCode";
import dayjs from "dayjs";

export default {
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bodyResquest: IEtudiant = req.body;
            const existed = await models.Etudiants.findOne({ where: { [models.Op.and]: [{ nom: bodyResquest.nom }, { prenom: bodyResquest.prenom }] } });
            if (existed) return res.status(HttpStatusCode.Conflict).json({ msg: "L'étudiant existe déjà dans la base de données", data: null });

            const response = await models.Etudiants.create({ ...bodyResquest });
            if (response) {
                const inscription = await models.Inscription.create({
                    annee: dayjs().format('YYYY'),
                    dateInscription: dayjs().format('YYYY-MM-DD'),
                    etudiantId: response.id
                });
                const itemsUE = await models.UniteEnseignement.findAll();
                const responseData = itemsUE.map((item: any) => ({
                    uniteEId: item?.id,
                    inscriptionId: inscription.id,
                    dateInscription: response?.createdAt,
                    is_active: false,
                }));
                const responseVerified = await models.Verification.bulkCreate(responseData as any);
                if (responseVerified) return res.status(HttpStatusCode.Created).json({ msg: 'Nouvel élément ajouté avec succès', data: response });

            } else {
                res.status(HttpStatusCode.BadRequest).json({ msg: "Une erreur est survenue. Veuillez réessayer.", data: null });
                return
            }
        } catch (error: any) {
            res.status(HttpStatusCode.NonAuthoritativeInformation).json({ msg: `Une erreur est survenue. ${error.message}`, data: [] });
            return
        }
    },

    find: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await models.Etudiants.findAll();
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

    deleteUE: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.query;
            const response = await models.Etudiants.destroy({ where: id });
            if (response) {
                res.status(HttpStatusCode.Ok).json({ msg: 'La mise à jour a été effectuée avec succès.', data: response });
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
}