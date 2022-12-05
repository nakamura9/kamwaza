import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default async function handler(req, res) {
  const data = await client.getEntries({
    content_type: "project",
  })
  
  const qString = req.query.query.toLowerCase()

  res.status(200).json({
     items: data.items.filter(p => (
        (p.fields.title && p.fields.title.toLowerCase().includes(qString)) || 
        (p.fields.location && p.fields.location.toLowerCase().includes(qString))
        )
      ) 
  })
}
