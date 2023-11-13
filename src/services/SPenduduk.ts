import { Request, Response } from "express";
import Penduduk from "../databases/models/penduduk";
import IPenduduk from "../interfaces/IPenduduk";

export default new class SPenduduk {
    async find(req: Request, res: Response) : Promise<Response> {
        try {
            const penduduks = await Penduduk.findAll();
            return res.status(200).json(penduduks);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async findOne(req: Request, res: Response) : Promise<Response> {
        const id: number = parseInt(req.params.id);

        const data = await Penduduk.findByPk(id);

        if (data == undefined) return res.status(404).json("Data not found");

        return res.status(200).json(data);
    }

    async create(req: Request, res: Response) : Promise<Response> {
        const data = req.body

        let createdAt: Date | undefined = data.createdAt;
        let updatedAt: Date | undefined = data.updatedAt;
        if(createdAt == undefined) createdAt = new Date();
        if(updatedAt == undefined) updatedAt = new Date();

        const newPenduduk = await Penduduk.create({
            ...data,
            createdAt,
            updatedAt
        }, {});

        if (newPenduduk == undefined) return res.status(404).json("Data not found");

        return res.status(200).json(newPenduduk);
    }
    
    async update(req: Request, res: Response) : Promise<Response> {
        const id: number = parseInt(req.params.id);
        const json = req.body;

        let name: string | undefined;
        let birthplace: string | undefined;
        let date_of_birth: string | undefined;
        let identity_number: number | undefined;
        let gender: string | undefined;
        let address: string | undefined;

        const data = await Penduduk.findByPk(id);
        if(json.name == undefined) name = data?.name;
        else name = json.name;
        if(json.birthplace == undefined) birthplace = data?.birthplace;
        else birthplace = json.birthplace;
        if(json.date_of_birth == undefined) date_of_birth = data?.date_of_birth;
        else date_of_birth = json.date_of_birth;
        if(json.identity_number == undefined) identity_number = data?.identity_number;
        else identity_number = json.identity_number;
        if(json.gender == undefined) gender = data?.gender;
        else gender = json.gender;
        if(json.address == undefined) address = data?.address;
        else address = json.address;

        const penduduk = await Penduduk.update({
            name,
            birthplace,
            date_of_birth,
            identity_number,
            gender,
            address,
            updatedAt: new Date()
        }, {
            where: {
                id
            }
        });

        if (penduduk == undefined) return res.status(404).json("Data not found");
        return res.status(200).json(penduduk);
    }

    async delete(req: Request, res: Response) : Promise<Response> {
        const id: number = parseInt(req.params.id);
        const penduduk = await Penduduk.destroy({
            where: {
                id
            }
        });

        if (penduduk != 1) return res.status(404).json("Data not found");
        return res.status(200).json("Data deleted");
    }
}