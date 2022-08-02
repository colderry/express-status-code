import { StatusCode } from "./StatusCode";

type Statuses = keyof (typeof StatusCode);
/**
 * @param {Express.Response} response - The express response.
 * @param {string} code - The status code (can be either `string` or `number`).
 * @param {any} body - The response body (anything that `res.send` supports).
*/
export function sendResponse (response: any, code: Statuses | number, body?: any) {
	const statusCode: number = (typeof code === "string") ? StatusCode[code] : code;

	response.status(statusCode);
	if (body) {
		return response.send(body);
	}
}