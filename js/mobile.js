/* Website template by freewebsitetemplates.com */
window.onload = function(){
			var getNavi = document.getElementById('menu');
			document.getElementById('mobile-navigation').onclick = function(){
				var a = getNavi.getAttribute('style');
				if(a){
					getNavi.removeAttribute('style');
					document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-menu.png)';
				} else {
					getNavi.style.display='block';
					document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-close.png)';
				}
			};
			var getElm = getNavi.getElementsByTagName("LI");
			for(var i=0;i<getElm.length;i++){
				if(getElm[i].children.length>1){
					var smenu = document.createElement("span");
					smenu.setAttribute("class","mobile-submenu");
					smenu.setAttribute("OnClick","submenu("+i+")");
					getElm[i].appendChild(smenu);
				};
			};
			submenu = function (i){
				var sub = getElm[i].children[1];
				var b = sub.getAttribute('style');
				if(b){
					sub.removeAttribute('style');
					getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-expand.png)';
					getElm[i].lastChild.style.backgroundColor='rgba(255, 255, 255, 0.8)';
				} else {
					sub.style.display='block';
					getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-collapse.png)';
					getElm[i].lastChild.style.backgroundColor='rgba(248, 98, 130, 0.8)';
				}
			};
		};
		  

		document.addEventListener("DOMContentLoaded", function () {
			const welcomeMessage = document.getElementById("welcome-message");
			if (welcomeMessage) {
			  welcomeMessage.textContent = "Welcome to our Fanclub!";
			  welcomeMessage.style.textAlign = "center";
			  welcomeMessage.style.fontSize = "24px";
			  welcomeMessage.style.margin = "20px 0";
			  welcomeMessage.style.color = "#2d89ef";
			}
		  });
		
		  document.addEventListener("DOMContentLoaded", function () {
			const submitButton = document.getElementById("submit-button");
			const userMessage = document.getElementById("user-message");
		  
			submitButton.addEventListener("click", function () {
			  const name = document.getElementById("name").value.trim();
			  const email = document.getElementById("email").value.trim();
		  
			  if (name && email) {
				userMessage.textContent = `Thank you, ${name}! We've received your email: ${email}.`;
				userMessage.style.color = "green";
		  
				// Clear the input fields
				document.getElementById("name").value = "";
				document.getElementById("email").value = "";
			  } else {
				userMessage.textContent = "Please fill in both fields.";
				userMessage.style.color = "red";
			  }
			});
		  });
		  