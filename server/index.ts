import server from './server'

const PORT = process.env.PORT || 3000

const cors = require('cors')
server.use(
  cors({
    origin: '*',
  })
)

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
})
