function fun()
			{
				var clsn=document.getElementById("tbar-ul");
				var rspr=document.getElementById("frmb");
				if (clsn.className=="tbarh") 
				{
				clsn.style.justifyContent="center";
				clsn.style.alignItems="center";
				clsn.style.textAlign="center";
				document.getElementById('tbar-ul-li1').style.left = "-11px";
				document.getElementById('tbar-ul-li3').style.left = "11px";
				document.getElementById('tbar-ul-li1').style.top = "10px";
				document.getElementById('tbar-ul-li3').style.top = "10px";
				document.getElementById('tbar-ul-li1').style.position = "relative";
				document.getElementById('tbar-ul-li2').style.position = "relative";
				document.getElementById('tbar-ul-li3').style.position = "relative";
				document.getElementById('tbar-ul-li1').style.transform = "rotate(-45deg)";
				document.getElementById('tbar-ul-li2').style.display = "none";
				document.getElementById('tbar-ul-li3').style.transform = "rotate(45deg)";
				document.getElementById("tbar-ul-li3").style.transition = "all .5s";
				document.getElementById("tbar-ul-li2").style.transition = "all .5s";
				document.getElementById("tbar-ul-li1").style.transition = "all .5s";
				rspr.style.display="block";
				rspr.style.transition = "all 20s";
				rspr.style.right="0";
				clsn.className = "xbar";
				document.getElementById('body').style.position="fixed";
				
				}
				else
				{
				document.getElementById('tbar-ul-li1').style.left = "0";
				document.getElementById('tbar-ul-li3').style.left = "0";
				document.getElementById('tbar-ul-li2').style.display = "block";
				document.getElementById('tbar-ul-li1').style.top = "0";
				document.getElementById('tbar-ul-li3').style.top = "0";
				document.getElementById('tbar-ul-li1').style.position = "relative";
				document.getElementById('tbar-ul-li3').style.position = "relative";
				document.getElementById('tbar-ul-li1').style.transform = "rotate(0)";
				document.getElementById('tbar-ul-li2').style.left = "0";
				document.getElementById('tbar-ul-li2').style.left = "0";
				document.getElementById('tbar-ul-li3').style.transform = "rotate(0)";
				rspr.style.right="-1000px"
				rspr.style.display="none";
				document.getElementById('body').style.position="relative";
				clsn.className = "tbarh";
				}
			}
			function foba1()
			{
				var tgn=document.getElementById('ul1');
				var dst=tgn.className;
				if(dst=="dn")
				{
					tgn.style.display="block";
					tgn.style.transition="all .5s";
					tgn.className="da";
					document.getElementById("arr1").style.transform="rotate(270deg)";
				}
				else
				{
					tgn.style.display="none";
					tgn.className="dn";
					document.getElementById("arr1").style.transform="rotate(-270deg)";
				}
			}
			
			function foba2()
			{
				var tgn=document.getElementById('ul2');
				var dst=tgn.className;
				if(dst=="dn")
				{
					tgn.style.display="block";
					tgn.style.transition="all .5s";
					tgn.className="da";
					document.getElementById("arr2").style.transform="rotate(270deg)";
				}
				else
				{
					tgn.style.display="none";
					tgn.className="dn";
					document.getElementById("arr2").style.transform="rotate(-270deg)";
				}
			}
			
			function foba3()
			{
				var tgn=document.getElementById('ul3');
				var dst=tgn.className;
				if(dst=="dn")
				{
					tgn.style.display="block";
					tgn.style.transition="all .5s";
					tgn.className="da";
					document.getElementById("arr3").style.transform="rotate(270deg)";
				}
				else
				{
					tgn.style.display="none";
					tgn.className="dn";
					document.getElementById("arr3").style.transform="rotate(-270deg)";
				}
			}
			
			function foba4()
			{
				var tgn=document.getElementById('ul4');
				var dst=tgn.className;
				if(dst=="dn")
				{
					tgn.style.display="block";
					tgn.style.transition="all .5s";
					tgn.className="da";
					document.getElementById("arr4").style.transform="rotate(270deg)";
				}
				else
				{
					tgn.style.display="none";
					tgn.className="dn";
					document.getElementById("arr4").style.transform="rotate(-270deg)";
				}
			}
			
			function foba5()
			{
				var tgn=document.getElementById('ul5');
				var dst=tgn.className;
				if(dst=="dn")
				{
					tgn.style.display="block";
					tgn.style.transition="all .5s";
					tgn.className="da";
					document.getElementById("arr5").style.transform="rotate(270deg)";
				}
				else
				{
					tgn.style.display="none";
					tgn.className="dn";
					document.getElementById("arr5").style.transform="rotate(-270deg)";
				}
			}