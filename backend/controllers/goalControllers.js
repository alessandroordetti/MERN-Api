//Creating controller

// GET METHOD
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'});
}

// CREATE METHOD
const setGoal = (req, res) => {
/*     if(!req.body.text){
        res.status(400)
        throw new Error('Please enter a text field')
    } */
    res.status(200).json({message: 'Set goal'});
}

// UPDATE METHOD
const updateGoal = (req, res) => {
    res.status(200).json({message: 'Updated goal'});
}

// DELETE METHOD
const deleteGoal = (req, res) => {
    res.status(200).json({message: 'Deleted goal'});
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}