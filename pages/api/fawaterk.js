import axios from 'axios';

export default async function handler(req, res) {
  const config = {
    method: 'get',
    url: 'https://staging.fawaterk.com/api/v2/getPaymentmethods',
    headers: {
      Authorization: 'Bearer 675c67d42e2782fc6b4e309be8f0959d66eed3c4d10345d5c1',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios(config);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
