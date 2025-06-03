export interface RegisterUser {
    id?: number;
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
    avatar?: string | 'https://thenounproject.com/icon/profile-4808974/';
}
