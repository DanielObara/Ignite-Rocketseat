import {NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
	const users =[
	{id: 1,name: 'Diego'},
	{id: 2,name: 'Daniel'},
	{id: 3,name: 'Bruno'},
	]
	
	return response.json(users)
}