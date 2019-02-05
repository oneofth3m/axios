const axios = require('axios')

const getCapital = async () => {
  try {
    return await axios.get('http://127.0.0.1:39173/india')
  } catch (error) {
    console.error(error)
  }
}

const printCapital = async () => {
  const capital = await getCapital()

  console.log(`${Object.entries(capital)}`)
  //console.log(capital)
  console.log(capital.status)
  console.log(capital.statusText)
  console.log(capital.data)
}

printCapital()

const deleteCapital = async () => {
  try {
    return await axios.delete('http://127.0.0.1:39173/india')
  } catch (error) {
    console.error(error)
  }
}

const printDeleteStatus = async () => {
  const resp = await deleteCapital()

  console.log(`${Object.entries(resp)}`)
  console.log(resp.status)
  console.log(resp.statusText)
}

printDeleteStatus()
