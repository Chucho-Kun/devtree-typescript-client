import { isAxiosError } from "axios";
import api from '../config/axios'
import {type User, type UserHandler } from '../types'

export async function getUser() {
    try {
        const { data } = await api<User>('/user')
        return data
    } catch (error) {
        if( isAxiosError(error) && error.response ) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function updateProfile(formData: User) {
    try {
        const { data } = await api.patch<string>('/user', formData )
        return data
    } catch (error) {
        if( isAxiosError(error) && error.response ) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function uploadImage( file: File ) {
    
    let formData = new FormData()
    formData.append('file', file)
    console.log(formData);
    
    try {
        const { data: {image} } : { data: {image: string} } = await api.post('/user/image', formData )
        return image
    } catch (error) {
        if( isAxiosError(error) && error.response ) {
            throw new Error( error.response.data.error )
        }
    }
}

export async function getUserByHandler<UserHandler>(handle: string) {
    try {
        const { data } = await api(`/${handle}`)
        return data
    } catch (error) {
        if( isAxiosError(error) && error.response ) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function searchByHandler<UserHandler>(handle: string) {
    try {
        const { data } = await api.post<string>('/search', { handle })
        return data
    } catch (error) {
        if( isAxiosError(error) && error.response ) {
            throw new Error(error.response.data.error);
        }
    }
}
