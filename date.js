

module.exports.getdate=getdate;
function getdate(){
  var options = { weekday: 'long',
   month: 'long',
   day: 'numeric' };
  var today= new Date();
  day=today.toLocaleDateString("en-US", options);
  return day;
};
module.exports.getday=getday;
function getday(){
  var options = { weekday: 'long'
 };
  var today= new Date();
  day=today.toLocaleDateString("en-US", options);
  return day;
};
