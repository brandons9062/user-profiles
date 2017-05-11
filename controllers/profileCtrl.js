var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = profiles;

profiles.getFriendsProfiles = function (req, res){
    var fProfArr = [];
    for(var i = 0; i < req.session.currentUser.friends.length; i++){
        for(var k = 0; k < profiles.length; k++){
            
            if(req.session.currentUser.friends[i] == profiles[k].name){
                fProfArr.push(profiles[k]);
            }
        }
    }
    res.status(200).json({
        currentUser: req.session.currentUser,
        friends: fProfArr
    })
}