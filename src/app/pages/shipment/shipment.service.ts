import { Injectable } from "@angular/core";
import { ApiBaseService } from "src/app/shared/services/api-base-service";
import { ShipmentModel } from "./interfaces/shipment.model";


@Injectable()
export class ShipmentService extends ApiBaseService {

    private baseEndpoint = 'shipment';

    getShipments() {
        return this.get<ShipmentModel[]>(this.baseEndpoint + "/list");
    }

    getShipment(shipmentId: string) {
        return this.post<ShipmentModel>(this.baseEndpoint + "/get", { id: shipmentId });
    }

    deleteShipment(shipmentId: string) {
        return this.post<string>(this.baseEndpoint + "/delete", { id: shipmentId });
    }

    editShipment(shipment: ShipmentModel) {
        return this.post<ShipmentModel>(this.baseEndpoint + "/update", shipment);
    }

    addShipment(shipment: ShipmentModel) {
        return this.post<ShipmentModel>(this.baseEndpoint + "/add", shipment);
    }

}
