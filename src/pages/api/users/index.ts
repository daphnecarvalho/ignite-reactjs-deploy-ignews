import { NextApiRequest, NextApiResponse } from "next";

export default function Users(_request: NextApiRequest, response: NextApiResponse) {
  const users = [
    { id: 1, name: "Daphne" },
    { id: 2, name: "Daniele" },
    { id: 3, name: "Diego" }
  ];

  return response.json(users);
}