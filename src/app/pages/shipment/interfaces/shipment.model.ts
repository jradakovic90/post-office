import { PostOfficeModel } from "../../post-office/interfaces/post-office.model";

export interface ShipmentModel {
    id: string,
    type: ShipmentTypeModel,
    origin: boolean,
    destination: boolean,
    delivered: boolean,
    weight: ShipmentWeightModel,
    office: PostOfficeModel,
}

export interface ShipmentTypeModel{
    id: number,
    name: string,
}

export interface ShipmentWeightModel{
    id: number,
    desc: string
}

