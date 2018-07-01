import path from 'path'
import express from 'express'

const dir = path.join(__dirname, '..', '..', '..', 'web', 'public')

export default express.static(dir)
