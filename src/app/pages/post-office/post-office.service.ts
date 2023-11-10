import { Injectable } from "@angular/core";
import { ApiBaseService } from "src/app/shared/services/api-base-service";
import { PostOfficeModel } from "./interfaces/post-office.model";


@Injectable()
export class PostOfficeService extends ApiBaseService {

    private baseEndpoint = 'office';

    getPostOffices() {
        return this.get<PostOfficeModel[]>(this.baseEndpoint + "/list");
    }

    getPostOffice(postOfficeId: string) {
        return this.post<PostOfficeModel>(this.baseEndpoint + "/get", {id: postOfficeId});
    }

    deletePostOffice(postOfficeId: string) {
        return this.post<string>(this.baseEndpoint + "/delete", {id: postOfficeId});
    }

    editPostOffice(postOffice: PostOfficeModel) {
        return this.post<PostOfficeModel>(this.baseEndpoint + "/update", postOffice);
    }

    addPostOffice(postOffice: any) {
        return this.post<any>(this.baseEndpoint + "/add", postOffice);
    }

}
