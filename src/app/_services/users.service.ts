import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private apiUrl = 'http://localhost:9090/users/';
    

    constructor(private http: HttpClient) {}

    addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}`, user); // badalt user b User
    }

    resetPassword(email: string, newPassword:string): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}reset-password`, {email,newPassword});
    }

    updateUser(user: User): Observable<User> {
        //console.log('password in service ' + user.password);
        return this.http.put<User>(`${this.apiUrl}updateUser/${user._id}`, user);
    }

    updateUserPassword(user: User, password: string): Observable<User> {
        //console.log('password in service ' + user.password);
        return this.http.put<User>(
            `${this.apiUrl}updateUserPassword/${user._id}`,
            password
        );
    }

    getAllusers(): Observable<any> {
        return this.http.get<User[]>(this.apiUrl);
    }
    getUserCount(): Observable<any> {
        return this.http.get(`${this.apiUrl}count`);
    }
    getCurrentUser(): Observable<any> {
        return this.http.get(`${this.apiUrl}current`);
    }

    removeUser(userId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}delete/${userId}`);
    }

    blockUser(userId: number): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}${userId}/block`, null);
    }

    unblockUser(userId: number): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}${userId}/unblock`, null);
    }
    getUserById(userId:any):Observable<User>{
        return this.http.get<User>(`${this.apiUrl}${userId}`)
    }
    countAdmin():Observable<any>{
        return this.http.get(`${this.apiUrl}count/admin`);
    }
    countUser():Observable<any>{
        return this.http.get(`${this.apiUrl}count/user`);
    }

}
