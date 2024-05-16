(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,o){if(e){if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var o=59;window.validateFecalElastase=function(){var e=document.getElementById("fecalElastase"),t=e.value.trim();""!==t&&(/^\d{1,3}$/.test(t)||(alert("Fecal elastase test result must be entered as a number between 0 and 999."),e.value=""))},window.validateEnzymeDose=function(e){var t=document.getElementById(e),o=t.value.trim();""!==o&&(/^[1-9]\d*$/.test(o)||(alert("Please enter your dose as a number without commas. For example 36000 rather than 36,000."),t.value=""))};var n={abdominal:["Abdominal pain after you eat","Bloating/distension of your stomach","Excessive gas","Trapped gas","Nausea","Feeling very full for hours after you eat"],toiletRelated:["Messy smelly stools that stick to the side of the toilet bowl","Diarrhea","Constipation","Urgent bowel movement (rush to the toilet)","See fat or oil in stool or on toilet paper","4 or more bowel movements per day"],foodRelated:["I avoid eating large meals","I avoid certain foods or food groups (excluding food allergies or celiac)","I avoid fatty foods"]};function a(e,t){var o={Abdominal:["A-F-Pain","A-F-Bloat","A-F-EGas","A-F-TGas","A-F-Naus","A-F-Full","A-S-Pain","A-S-Bloat","A-S-EGas","A-S-TGas","A-S-Naus","A-S-Full"],"Toilet-related":["T-F-Smell","T-F-Dia","T-F-Const","T-F-Urg","T-F-Fat","T-F-4BM","T-S-Smell","T-S-Dia","T-S-Const","T-S-Urg","T-S-Fat","T-S-4BM"],"Food-related":["F-F-Lrg","F-F-Crtn","F-F-Fat","F-S-Lrg","F-S-Crtn","F-S-Fat"]},n=["Never","At least once, but not regularly","Once a month","Once a week","A few times a week","Most days of the week"],a=["I don't have this symptom","Slightly annoying","Bothersome","Very bothersome"],r=e,i="<h2>".concat(e,' Symptoms - Frequency</h2><table class="symptom-frequency">');i+="<tr><th>Symptom</th><th>Never</th><th>At least once, but not regularly</th><th>Once a month</th><th>Once a week</th><th>A few times a week</th><th>Most days of the week</th></tr>",t.forEach((function(e,t){var a=o[r][t];i+="<tr><td>".concat(e,"</td>");for(var s=0;s<=5;s++)i+='<td><label for="'.concat(a,"_").concat(s,'"><input type="radio" id="').concat(a,"_").concat(s,'" name="').concat(a,'" value="').concat(s,'" ').concat(0===s?"required":"","><span>").concat(n[s],"</span></label></td>");i+="</tr>"})),i+="</table>";var s="<h2>".concat(e,' Symptoms - Severity</h2><table class="symptom-severity">');return s+="<tr><th>Symptom</th><th>I don't have this symptom</th><th>Slightly annoying</th><th>Bothersome</th><th>Very bothersome</th></tr>",t.forEach((function(e,n){var i=o[r][n+t.length];s+="<tr><td>".concat(e,"</td>");for(var l=0;l<=3;l++)s+='<td><label for="'.concat(i,"_").concat(l,'"><input type="radio" id="').concat(i,"_").concat(l,'" name="').concat(i,'" value="').concat(l,'" ').concat(0===l?"required":"","><span>").concat(a[l],"</span></label></td>");s+="</tr>"})),i+(s+="</table>")}function r(e){var t=document.getElementById("epiInfo"),o=t.querySelectorAll("input, select");e?(t.style.display="block",o.forEach((function(e){return e.setAttribute("required","")}))):(t.style.display="none",o.forEach((function(e){return e.removeAttribute("required")})))}function i(e){var t=document.getElementById("enzymeDetails"),o=t.querySelectorAll("input, select");e?(t.style.display="block",o.forEach((function(e){return e.setAttribute("required","")}))):(t.style.display="none",o.forEach((function(e){return e.removeAttribute("required")})))}document.getElementById("abdominalSymptomsSection").innerHTML=a("Abdominal",n.abdominal),document.getElementById("toiletRelatedSymptomsSection").innerHTML=a("Toilet-related",n.toiletRelated),document.getElementById("foodRelatedSymptomsSection").innerHTML=a("Food-related",n.foodRelated),document.addEventListener("DOMContentLoaded",(function(){var t,a,s=document.querySelectorAll('input[name="epiDiagnosis"]'),l=document.querySelectorAll('input[name="takingEnzymes"]'),c=document.getElementById("giSurveyForm"),d=document.querySelector('input[type="submit"]'),u=document.createElement("p");function m(){var e,t,o="Yes"===(null===(e=document.querySelector('input[name="epiDiagnosis"]:checked'))||void 0===e?void 0:e.value),n="Yes"===(null===(t=document.querySelector('input[name="takingEnzymes"]:checked'))||void 0===t?void 0:t.value);o||document.querySelectorAll("#epiInfo input, #epiInfo select").forEach((function(e){return e.removeAttribute("required")})),n||document.querySelectorAll("#enzymeDetails input, #enzymeDetails select").forEach((function(e){return e.removeAttribute("required")})),c.checkValidity()?(d.disabled=!1,d.style.backgroundColor="#4B0082",u.style.display="none"):(d.disabled=!0,d.style.backgroundColor="grey",u.style.display="block")}u.textContent="You are missing some required fields, please review the form and fill out completely.",u.style.color="red",u.style.display="none",c.appendChild(u),s.forEach((function(e){e.addEventListener("change",(function(e){var t="Yes"===e.target.value;r(t),t||document.querySelectorAll("#epiInfo input, #epiInfo select").forEach((function(e){return e.removeAttribute("required")}))}))})),l.forEach((function(e){e.addEventListener("change",(function(e){var t="Yes"===e.target.value;i(t),t||document.querySelectorAll("#enzymeDetails input, #enzymeDetails select").forEach((function(e){return e.removeAttribute("required")}))}))})),r("Yes"===(null===(t=document.querySelector('input[name="epiDiagnosis"]:checked'))||void 0===t?void 0:t.value)),i("Yes"===(null===(a=document.querySelector('input[name="takingEnzymes"]:checked'))||void 0===a?void 0:a.value)),c.addEventListener("input",m),m(),c.addEventListener("submit",(function(t){t.preventDefault(),console.log("Form submit event triggered."),document.getElementById("qrcode");var a=function(){var t=0,o=[],a={Abdominal:["A-F-Pain","A-F-Bloat","A-F-EGas","A-F-TGas","A-F-Naus","A-F-Full","A-S-Pain","A-S-Bloat","A-S-EGas","A-S-TGas","A-S-Naus","A-S-Full"],"Toilet-related":["T-F-Smell","T-F-Dia","T-F-Const","T-F-Urg","T-F-Fat","T-F-4BM","T-S-Smell","T-S-Dia","T-S-Const","T-S-Urg","T-S-Fat","T-S-4BM"],"Food-related":["F-F-Lrg","F-F-Crtn","F-F-Fat","F-S-Lrg","F-S-Crtn","F-S-Fat"]};[].concat(e(n.abdominal.map((function(e,t){return{name:e,abbr:a.Abdominal[t]}}))),e(n.toiletRelated.map((function(e,t){return{name:e,abbr:a["Toilet-related"][t]}}))),e(n.foodRelated.map((function(e,t){return{name:e,abbr:a["Food-related"][t]}})))).forEach((function(e){var n=document.querySelector('input[name="'.concat(e.abbr,'"]:checked')),a=document.querySelector('input[name="'.concat(e.abbr.replace("-F-","-S-"),'"]:checked')),r=n?parseInt(n.value,10):0,i=a?parseInt(a.value,10):0,s=r*i;t+=s,o.push({name:e.name,frequency:r,severity:i,score:s})})),o.sort((function(e,t){return t.score-e.score}));var r=o[2]?o[2].score:null,i=o.filter((function(e){return e.score>=r}));return document.getElementById("scoreDisplay").innerText="EPI/PEI-SS Total Score: ".concat(t),{totalScore:t,symptomScores:o,topSymptoms:i}}(),r=a.totalScore,i=a.symptomScores;a.topSymptoms,m(i);var s=new FormData(t.target),l=s.get("epiDiagnosis"),c=s.get("takingEnzymes"),d={};s.forEach((function(e,t){("No"!==l||"epiDuration"!==t&&"fecalElastase"!==t&&"takingEnzymes"!==t&&"enzymeType"!==t&&"mealDose"!==t&&"snackDose"!==t&&"idealEnzymes"!==t)&&("No"!==c||"enzymeType"!==t&&"mealDose"!==t&&"snackDose"!==t&&"idealEnzymes"!==t)&&(t.includes("-F-")||t.includes("-S-")||(Reflect.has(d,t)?(Array.isArray(d[t])||(d[t]=[d[t]]),d[t].push(e)):d[t]=e))})),d.totalScore=r;var u={"Abdominal pain after you eat":{frequency:"A-F-Pain",severity:"A-S-Pain"},"Bloating/distension of your stomach":{frequency:"A-F-Bloat",severity:"A-S-Bloat"},"Excessive gas":{frequency:"A-F-EGas",severity:"A-S-EGas"},"Trapped gas":{frequency:"A-F-TGas",severity:"A-S-TGas"},Nausea:{frequency:"A-F-Naus",severity:"A-S-Naus"},"Feeling very full for hours after you eat":{frequency:"A-F-Full",severity:"A-S-Full"},"Messy smelly stools that stick to the side of the toilet bowl":{frequency:"T-F-Smell",severity:"T-S-Smell"},Diarrhea:{frequency:"T-F-Dia",severity:"T-S-Dia"},Constipation:{frequency:"T-F-Const",severity:"T-S-Const"},"Urgent bowel movement (rush to the toilet)":{frequency:"T-F-Urg",severity:"T-S-Urg"},"See fat or oil in stool or on toilet paper":{frequency:"T-F-Fat",severity:"T-S-Fat"},"4 or more bowel movements per day":{frequency:"T-F-4BM",severity:"T-S-4BM"},"I avoid eating large meals":{frequency:"F-F-Lrg",severity:"F-S-Lrg"},"I avoid certain foods or food groups (excluding food allergies or celiac)":{frequency:"F-F-Crtn",severity:"F-S-Crtn"},"I avoid fatty foods":{frequency:"F-F-Fat",severity:"F-S-Fat"}};function m(e){var t=document.getElementById("topSymptomsDisplay");t.innerHTML="";var o=document.createElement("p");o.textContent="Here are the individual symptoms you reported experiencing in order of score (frequency times severity):",o.style.fontStyle="italic",t.appendChild(o),e.forEach((function(e){if(e.score>0){var o=document.createElement("div");o.classList.add("symptom-container");var n=document.createElement("div");n.textContent=e.name,n.classList.add("symptom-label"),o.appendChild(n);var a=document.createElement("div");a.classList.add("symptom-bar"),o.appendChild(a);var r=e.score/15*100,i=document.createElement("div");i.classList.add("score-dot"),i.textContent=e.score,i.style.left="calc(".concat(r,"% - 15px)"),a.appendChild(i),t.appendChild(o)}}))}function y(e){var t,n=document.getElementById("scoreDisplay2"),a=document.getElementById("scoreDisplay3");t=e>o?"above":e<o?"below":"at";var r="<p><strong>What does the EPI/PEI-SS Total Score mean?</strong></p><p>Your total score (".concat(e,') is based on how you reported the burden of severity and frequency of each symptom. There are 15 symptoms, each with a possible score of up to 15, which adds up to a total score possible of 225.</p>\n            <p><strong>Has the EPI/PEI-SS been validated?</strong></p>\n            <p>EPI/PEI-SS is in the process of being validated as a screening tool. To date, <a href="https://doi.org/10.31219/osf.io/qpktg" target="_blank">one study</a>  has been done in a real-world population with people already diagnosed with EPI. In people already diagnosed with EPI and already taking treatment for EPI (which is called pancreatic enzyme replacement therapy, PERT), the average EPI/PEI-SS total score was around 98. In contrast, in the group without a diagnosis of EPI, the average EPI/PEI-SS total score was around 38.</p>\n            <p>If we use a cutoff score of ').concat(o," – meaning if your score is ").concat(o," or higher – this suggests that ").concat(81," of 100 people with scores greater than or equal to ").concat(o," will likely have EPI. This concept is called sensitivity. In contrast, estimates for specificity suggest that ").concat(75," of 100 people who do not have EPI will correctly be identified as likely not having it.</p>\n            <p><strong>What should I do with my EPI/PEI-SS score?</strong></p>\n            <p><strong>TLDR:</strong> Your EPI/PEI-SS total score is ").concat(e,", which is ").concat(t," the cutoff of ").concat(o,". This means that ");r+=e>=o?'<strong style="color: #4B0082;">if you are bothered by your GI symptoms, you may want to speak to your doctor about being screened for EPI.</strong></p>':"it is less likely that you may have EPI. However, it is possible to have a lower score and still have EPI. If you are concerned and bothered by your symptoms, you may want to speak to your doctor about your screening options.</p>",document.getElementById("pdfButton").classList.remove("hidden"),n.innerHTML=r,a.innerHTML="<p>The most common screening for EPI is a non-invasive stool test called a fecal elastase test. If you are already taking enzymes, you do not have to discontinue them for the fecal elastase test.</p>"}i.forEach((function(e){var t=u[e.name];t&&(d["".concat(t.frequency,"_Frequency")]=e.frequency,d["".concat(t.severity,"_Severity")]=e.severity,d["".concat(t.frequency,"_Total_Score")]=e.score)})),Object.assign(d,{timestamp:(new Date).toISOString(),geo:s.get("geo"),age:s.get("age"),gender:s.get("gender"),conditions:s.getAll("condition[]"),epiDiagnosis:l,epiDuration:s.get("epiDuration")||"",fecalElastase:s.get("fecalElastase")||"",takingEnzymes:c,enzymeType:s.get("enzymeType")||"",mealDose:s.get("mealDose")||"",snackDose:s.get("snackDose")||"",idealEnzymes:s.get("idealEnzymes")||"",totalScore:r,symptomScores:i,uuid:uuidv4()}),fetch(SERVER_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then((function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){console.log("Form data successfully submitted:",e),m(i),y(r)})).catch((function(e){console.error("There was a problem with the fetch operation:",e)})),y(r),/Mobi|Android/i.test(navigator.userAgent)?(f.classList.remove("hidden"),p.classList.add("hidden")):(p.classList.remove("hidden"),f.classList.add("hidden")),window.printReport=function(){var e=window.jspdf.jsPDF;html2canvas(document.querySelector("#scoreDisplay")).then((function(t){html2canvas(document.querySelector("#topSymptomsDisplay")).then((function(o){html2canvas(document.querySelector("#scoreDisplay2")).then((function(n){var a=new e({orientation:"portrait",unit:"px",format:"letter"}),r=a.internal.pageSize.getWidth(),i=(r-40)/t.width,s=(r-40)/o.width,l=(r-40)/n.width,c=Math.min(i,s,l);a.addImage(t,"JPEG",20,20,t.width*c,t.height*c),a.addImage(o,"JPEG",20,t.height*c+40,o.width*c,o.height*c),a.addImage(n,"JPEG",20,(t.height+o.height)*c+60,n.width*c,n.height*c),a.save("EPI-PEI-SS-report.pdf")}))}))})).catch((function(e){console.error("Error capturing canvas elements:",e)}))}}));var y=document.getElementById("Research"),h=document.getElementById("conditionalText");y.addEventListener("change",(function(){this.checked?h.style.display="none":h.style.display="block"})),y.checked||(h.style.display="block");var p=document.getElementById("pdfButton"),f=document.getElementById("screenshotMessage")}))})();