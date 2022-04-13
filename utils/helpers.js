// Helper module to get date and big numbers dealt with if the need arises. Short code to save time in the future
module.exports = {
    format_date: (date) => { return date.toLocaleDateString();},
    format_amount: (amount) => {return parseInt(amount).toLocaleString();}
};