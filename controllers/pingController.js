import packageJSON from '../package.json' assert { type: 'json' }

export const ping = (req, res) => {
  res.send(`${packageJSON.name}.Version${packageJSON.version}`)
}
