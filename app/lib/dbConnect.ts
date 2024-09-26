import mongoose from 'mongoose'

interface ConnectionObject {
  isConnected: mongoose.ConnectionStates
}

const connection: ConnectionObject = {
  isConnected: mongoose.ConnectionStates.disconnected
}

async function dbConnect(): Promise<void> {
  if (connection.isConnected === mongoose.ConnectionStates.connected) {
    console.log('Already connected to database')
    return
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if (connection.isConnected === mongoose.ConnectionStates.connected) {
      console.log('Using previous connection to the database')
      return
    }
    await mongoose.disconnect()
  }

  const MONGODB_URI = process.env.MONGODB_URI

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable')
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })

    connection.isConnected = mongoose.ConnectionStates.connected
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to database:', error)
    throw error
  }
}

async function dbDisconnect(): Promise<void> {
  if (connection.isConnected === mongoose.ConnectionStates.disconnected) {
    return
  }

  try {
    await mongoose.disconnect()
    connection.isConnected = mongoose.ConnectionStates.disconnected
    console.log('Disconnected from MongoDB')
  } catch (error) {
    console.error('Error disconnecting from database:', error)
    throw error
  }
}

const db = { connect: dbConnect, disconnect: dbDisconnect }

export default dbConnect