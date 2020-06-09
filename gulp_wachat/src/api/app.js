import request from '../utils/http';
import { USER_API, BASE_API } from '../config/index';


export function getGraphql(params) {
	return request({
		url: `${BASE_API}/graphql`,
		data: params,
		method: 'GET',
		header: {
			'content-type': 'application/graphql',
		},
	});
}

export function postGraphql(data) {
	return request({
		url: `${BASE_API}/graphql`,
		data,
		method: 'POST',
		header: {
			'content-type': 'application/graphql',
		},
	});
}

export function wxlogin(data) {
	return request({
		baseURL: `${USER_API}/wxlogin`,
		data,
		method: 'POST',
		header: {
			'content-type': 'application/json',
		},
	});
}
