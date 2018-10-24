import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RepositoriesService {

    private username: string;
    constructor(private http: Http) {
        console.log('service ready');
        this.username = 'JuanMagos';
    }
    getRepos() {
        return this.http.get('https://api.github.com/users/juanmagos/repos').pipe(map(res => res.json()));
    }
}
