import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, FILTER_SERVICE } from './actionTypes';

export function addService(name: string, price: string, id: string) {
  return {type: ADD_SERVICE, payload: {name, price, id}};
}

export function removeService(id: string) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name: string, value: string) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function editService(id: string) {
  return {type: EDIT_SERVICE, payload: {id}}
}

export function filterService(value: string) {
  return {type: FILTER_SERVICE, payload: {value}}
}