import { getDb } from '../utils/db'

export default async function () {
  const db = await getDb()

  await db.collection('user').createIndex({
    userId: 1,
  })

  await db.collection('sessions').createIndex({
    id: 1,
  })

  await db.collection('questions').createIndex({
    sessionId: 1,
  })

  await db.collection('questions').createIndex({
    title: 'text',
    content: 'text',
  })
}
