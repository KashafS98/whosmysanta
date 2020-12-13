/* global API_URL :readonly */
import axios from 'axios'

export async function getSecretSanta (friends) {
    return axios.post(`/api/v1/draw`, friends)
}