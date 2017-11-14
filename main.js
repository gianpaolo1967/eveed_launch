document.getElementById('btn').onclick = function() {
	var str = document.getElementById('title').value;
	var arr = str.split(' ');
	
		var p0 = document.getElementById('p0');
		var p1 = document.getElementById('p1');
		var p2 = document.getElementById('p2');
		var p3 = document.getElementById('p3');
		var p4 = document.getElementById('p4');
		var os = document.getElementById('os').value;
		var sex = document.getElementById('sex').value;
		var country = document.getElementById('country').value;
        var post = document.getElementById('post');
		country = country.toUpperCase();
		p0.innerHTML = '';
		p1.innerHTML = '';
		p2.innerHTML = '';
		p3.innerHTML = '';
		p4.innerHTML = '';
		for (var i = 0; i < arr.length; i++) {
			if (i % 2 == 0) {
				p0.innerHTML += arr[i].charAt(0).toUpperCase();
				p1.innerHTML += arr[i].charAt(0).toUpperCase();
				p2.innerHTML += arr[i].charAt(0).toUpperCase();
				p3.innerHTML += arr[i].charAt(0).toUpperCase();
				p4.innerHTML += arr[i].charAt(0).toUpperCase();
			}
			if (i % 2 !== 0) {
				p0.innerHTML += arr[i].charAt(0).toLowerCase();
				p1.innerHTML += arr[i].charAt(0).toLowerCase();
				p2.innerHTML += arr[i].charAt(0).toLowerCase();
				p3.innerHTML += arr[i].charAt(0).toLowerCase();
				p4.innerHTML += arr[i].charAt(0).toLowerCase();
			}
					console.log(arr[i]);
            
		}
		p0.innerHTML += '18' + os.charAt(0).toLowerCase() + sex.charAt(0).toLowerCase() + country;
		p1.innerHTML += '24' + os.charAt(0).toLowerCase() + sex.charAt(0).toLowerCase() + country;
		p2.innerHTML += '30' + os.charAt(0).toLowerCase() + sex.charAt(0).toLowerCase() + country;
		p3.innerHTML += '34' + os.charAt(0).toLowerCase() + sex.charAt(0).toLowerCase() + country;
		p4.innerHTML += '35' + os.charAt(0).toLowerCase() + sex.charAt(0).toLowerCase() + country;
    
        post.innerHTML = 'Post: "' + arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3] + ' ' + arr[4] + '..." ' + country + '_' + 18 + '<br>' + 'Post: "' + arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3] + ' ' + arr[4] + '..." ' + country + '_' + 24 + '<br>' + 'Post: "' + arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3] + ' ' + arr[4] + '..." ' + country + '_' + 30 + '<br>' + 'Post: "' + arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3] + ' ' + arr[4] + '..." ' + country + '_' + 34 + '<br>'; 
	


}
