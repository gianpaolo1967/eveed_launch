document.getElementById('btn').onclick = function() {
    
    var offer = document.getElementById('offer').value;
    var country = document.getElementById('country').value;
    country = country.toUpperCase();
    var sex = document.getElementById('sex').value;
    sex = sex.toUpperCase();
    
    var targeting = document.getElementById('targeting').value;
    var age = document.getElementById('age').value;
    var placement = document.getElementById('placement').value;
    var lp = document.getElementById('lp').value;
    var ad = document.getElementById('ad').value;
    var s = (' | ');
    var ss = ('|');
    var campaign = document.getElementById('campaign');
    var utm = document.getElementById('utm')
    campaign.innerHTML = 'Campaign Name: '+ offer + s + country + s + sex + s + targeting + s + age + s + placement + s + lp + s + ad;
    
    utm.innerHTML = 'UTM: '+ offer + ss + country + ss + sex + ss + targeting + ss + age + ss + placement + ss + lp + ss + ad;
    
}