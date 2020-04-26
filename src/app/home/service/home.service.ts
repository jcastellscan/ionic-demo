import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'nest-api/node_modules/rxjs';
import { Informative } from 'shared/informative';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class InformativeService {

	constructor(private http: HttpClient) {

	}


	getInformatives(): Observable<Informative[]> {
		return this.http.get<Informative[]>('/api/informatives');
	}

}