const client = require('./client')

const createUser = async ({ name, email, username, password }) => {
  const {
    rows: [user],
  } = await client.query(
    `
          INSERT INTO users(name, email, username, password)
          VALUES ($1, $2, $3, $4)
          ON CONFLICT (username) DO NOTHING
          RETURNING *
      `,
    [name, email, username, password]
  )
  delete user.password
  return user
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
SELECT * FROM users
WHERE id=$1
`,
      [id]
    );
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    throw error;
  }
}
const getUserByUsername = async (username) => {
  const {
    rows: [user],
  } = await client.query(
    `
    SELECT * FROM users
    WHERE users.username = $1
    `,
    [username]
  )
  delete user.password
  return user
}

module.exports = { createUser, getUserByUsername, getUserById }