import { Service, Inject, Container } from "typedi";

@Service()
export class DateAPIService {

  countDays() {
    var Client = require('node-rest-client').Client;
    var client = new Client();
    var args = {
      parameters: { startDate: '01/01/2024', endDate: '31/12/2024' }
    };
    console.log("Call to: http://localhost:8080/countDays");
    client.get("http://localhost:8080/countDays", args, function (data, response) {
	      console.log(data.response);
	     // console.log(response);
    });
  };
  
}