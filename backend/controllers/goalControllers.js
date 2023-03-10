

// GET METHOD
const getGoals = asyncHandler (req, res) => {
    res.status(200).json({message: 'Get goals'});
}

// CREATE METHOD
const setGoal = asyncHandler (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please enter a text field')
    }
    res.status(200).json({message: 'Set goal'});
}

// UPDATE METHOD
const updateGoal = asyncHandler (req, res) => {
    res.status(200).json({message: 'Updated goal'});
}

// DELETE METHOD
const deleteGoal = asyncHandler (req, res) => {
    res.status(200).json({message: 'Deleted goal'});
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}