import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class ApplicationService{

    
    async readFile(filePath: string): Promise<any> {
      const response = await fetch(filePath);
      const myJson = await response.json();      
        console.log(JSON.stringify(myJson));
        return myJson;
        /* let rawData;
        try {
          rawData = fs.readFileSync('assets/' + filePath);
        } catch (ex) {
          console.log(ex);
        }
        return JSON.parse(rawData!.toString()); */
      }

}