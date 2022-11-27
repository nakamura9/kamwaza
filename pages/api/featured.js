import { createClient } from "contentful"
import { useRouter } from "next/router"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default async function handler(req, res) {
  const data = await client.getEntries({
    content_type: "project",
    "fields.featuredOnHomePage": true
  })
  res.status(200).json({ items: data.items })
}
