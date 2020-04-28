// tslint:disable: indent
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'nest-api/node_modules/rxjs';
import { Informative } from 'shared/informative';

@Injectable({
	providedIn: 'root'
})
export class InformativeService {

	constructor(private http: HttpClient) { }

	getInformatives(): Observable<Informative[]> {
		return this.http.get<Informative[]>('/api/informatives');
	}

	likeInformative(id: string, changes: Partial<Informative>): Observable<Informative> {
		return this.http.put<Informative>('/api/informatives/' + id, changes);
	}

	removeInformative(id: string) {
		return this.http.delete('/api/informatives/' + id);
	}

	createInformative() {
		const newInf: Partial<Informative> = {
			title: 'titleCreated',
			subTitle: 'subtitleCreated',
			description: 'descCreated',
			liked: false,
			likes: 0
		};
		return this.http.post('/api/informatives/', newInf);
	}

}
