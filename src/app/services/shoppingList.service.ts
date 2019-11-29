import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AllPhoneList } from './data.module'
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable()

export class ShoppingService {
    private itemsInCartSubject = new BehaviorSubject([]);
    private itemsInCart: AllPhoneList[] = [];
    modalAction$ = this.itemsInCartSubject.asObservable();
    constructor(private http: HttpClient) {
    }
    public getAllPhoneList() {
        return this.http.get<AllPhoneList>(API_URL + '/list_of_electronics');
    }
    public editProfileDetails(id, data) {
        return this.http.put(API_URL + '/profile_details/' + id, data);
    }
    public getProfileDetails() {
        return this.http.get(API_URL + '/profile_details' );
    }
    public getloginDetails() {
        return this.http.get(API_URL + '/login_details' );
    }
    
    public addToCart(item) {
        this.itemsInCartSubject.next(item);
    }
}
