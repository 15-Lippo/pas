import { NextApiRequest, NextApiResponse } from "next"
import nc from "next-connect"
import cors from "cors"

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(cors())
    .get(async (req, res) => {
        const response = await(await fetch(
            // Doc: https://syncwith.com/yahoo-finance/yahoo-finance-api
            `https://query1.finance.yahoo.com/v8/finance/chart/tsla?metrics=high?&interval=1d&range=5d`
        )).json()
        const { chart } = response
        res.status(200).json(chart.result[0])
    })

export default handler