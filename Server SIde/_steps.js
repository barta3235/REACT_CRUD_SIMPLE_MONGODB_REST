/**
 * MONGODB CONNECTION
 * 
 * 
 * 1. create account
 * 2. Create an user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > node > show all codes
 * 5. change the password in the uri
 * 
 * 
 * 1. CREATE POST (SERVER SIDE)
 *   1. app.post('/users', async(req,res))
 *   2. MAke the function async to use await inside it
 *   3. make sure you sue the express.json() middleware
 *   4. access data from body | const data= req.body
 *   5. const result = await userCollections.insertOne(data)
 *   6. res.send(result)
 * 1. CREATE POST(CLIENT SIDE)
 *   1. create fetch
 *   2. add second parameter as a object 
 *   3. provide method: 'POST'
 *   4. add headers
 *   5. add body: JSON.stringify(user)
 * 
 * 
 * 2. READ MANY
 *   1. create a cursor: cursor= useCOllection.find()
 *   2.convert the cursor to toARRAY():  const result = await cursor.toArray()
 * 
 * 
 * 
 * 3. DELETE (SERVER SIDE)
 *   1. create app.delete('/users/:id')
 *   2. const id= req.params.id
 *   3. const query= {_id: new ObjectId(id)}
 *   4. const result= await userCollection.deleteOne(query)
 *   5. res.send(result);
 * 3.DELETE (CLIENT SIDE
 *   1.create the dynamic url with id
 *   2. mention the delete method
 * 
 */