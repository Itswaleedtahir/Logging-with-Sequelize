//Controller

module.exports.updateProfile = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you have a user object available in the request
        const route = req.originalUrl;
        const userBody = req.body
        if (req.file) {
            userBody['profile'] = req.file.filename
        }
        const finduser = await Users.findOne({where :{id:req.user.id}})
        const beforeChanges = finduser.dataValues;
        await Users.update({ ...userBody }, { where: { id: req.user.id } });
        const result = await Users.findByPk(req.user.id);
        const afterChanges = result.dataValues;
        
        //Function to handle data dump
        logUserActivity(userId, route, beforeChanges, afterChanges);

        return res.json({ result, message: 'profile updated successfully' })
    } catch (e) {
        console.log(e);
        return res.status(200).
        json({ message: e.message, status: 0 });
    }
};