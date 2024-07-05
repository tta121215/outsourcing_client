import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { ConditionProfileDto } from '../dto/condition_profile';

@Injectable({
  providedIn: 'root'
})
export class ConditionProfileService {

  url:string = "";

  constructor(private restService:RestService) { }

  getConditionProfile(id:string){
    return id ? this.restService.get(`${this.url}/${id}`) : this.restService.get(`${this.url}`);
  }

  createConditionProfile(conditionProfile:ConditionProfileDto){
    return this.restService.post(`${this.url}`,conditionProfile);
  }

  updateConditionProfile(id:string,conditionProfile:ConditionProfileDto){
    return this.restService.put(`${this.url}/${id}`,conditionProfile);
  }

  deleteCondtionProfile(id:string){
    return this.restService.delete(`${this.url}/${id}`);
  }
  
}
