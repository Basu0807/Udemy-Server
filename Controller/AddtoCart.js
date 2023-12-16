const MyLearning =require('../Models/purchasedModel')

const Purchase = async (req, res) => {
    const data = req.body;
    // console.log(data);
  
    try {
      const user = await MyLearning.findOne({ "email": data.email });
  
      if (user) {
        const updatedUser = await MyLearning.findOneAndUpdate(
          { email: data.email },
          { $push: { Item: { $each: data.Item } } }, // Use $each to push multiple items
          { new: true }
        );
        console.log(updatedUser);
        res.send({ msg: "Items added to the user's list", newItem: data.Item });
      } else {
        await MyLearning.create({ email: data.email, Item: data.Item });
        res.send({ msg: "New user created with the items", newItem: data.Item });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error processing request', error: error.message });
    }
  };

const MyLearnings=async (req, res) => {
    try {
      const userEmail = req.params.email; // Get the email ID from the URL parameter
  
      // Fetch ordered items for the specified email
      const userOrders = await MyLearning.findOne({ email: userEmail });
  
      if (!userOrders) {
        return res.status(404).json({ message: 'No courses are found for this user' });
      }
  
      // Send the ordered items as a response
      res.status(200).json(userOrders.Item); // Assuming Item is the array of ordered items in your model
    } catch (error) {
      res.status(500).json({ message: 'Error fetching ordered items', error: error.message });
    }
  }
const DeleteLearning=async(req,res)=>{

    const MyCourses = await MyLearning.deleteMany({})
    if(MyCourses){
        res.send(MyCourses)
    }
    
    }

module.exports={Purchase,MyLearnings,DeleteLearning}