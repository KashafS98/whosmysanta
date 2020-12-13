const getEmailTemplate = (friend, user) => {
    return `Hi ${user}, you are the Secret Santa for your friend ${friend}. Make sure they don't know it's you and get them an awesome christmas gift!`
}

module.exports = getEmailTemplate