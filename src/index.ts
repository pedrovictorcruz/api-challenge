import { Server } from 'http'
import { connect, connection } from 'mongoose'
import { webServer } from './app/server/server'

require('dotenv').config();

async function connectToMongodb () {
  console.log(process.env['DB_URL']);
  
  try {
    await connect(process.env['DB_URL'] as string)
  } catch (error) {
    console.log('Error:', error)
  }
}

connection.on('connected', () => {
  console.log('Mongodb connected to: ', connection.db.databaseName)
})

connection.on('error', (error) => {
  console.error('error', error)
})

connection.on('disconnected', () => {
  console.log('Mongodb disconnected')
})

export const init = async (): Promise<Server> => {
  void connectToMongodb()
  return await webServer()
}

(async () => {
  return await init()
})()
