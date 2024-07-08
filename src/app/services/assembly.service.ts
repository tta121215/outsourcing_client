import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { AssemblyDto } from '../dto/assembly-dto';

@Injectable({
  providedIn: 'root',
})
export class AssemblyService {
  url: String = 'assembly';

  constructor(private restService: RestService) {}

  createAssembly(assembly: AssemblyDto) {
    return this.restService.post(`${this.url}`, assembly);
  }

  getAssembly(id: string) {
    return this.restService.get(`${this.url}/${id}`);
  }

  updateAssembly(id: string, assembly: AssemblyDto) {
    return this.restService.put(`${this.url}/${id}`, assembly);
  }

  deleteAssembly(id: string) {
    return this.restService.delete(`${this.url}/${id}`);
  }
}
