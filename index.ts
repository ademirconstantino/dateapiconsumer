import 'reflect-metadata';
import { Service, Inject, Container } from "typedi";
import { DateAPIService } from "./DateAPIService";

@Service()
export class Index {

    dateAPIService: DateAPIService;
    
    constructor() {
        this.dateAPIService = Container.get(DateAPIService);
    }

    consumeAPI() {
       this.dateAPIService.countDays();
    }

}

const indexInstance = Container.get(Index);
indexInstance.consumeAPI();