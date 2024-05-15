// Define cutoff, sensitivity, and specificity, based on first paper, see: https://doi.org/10.31219/osf.io/qpktg
const cutoff = 59;
const sensitivity = 0.81; // 81%
const specificity = 0.75; // 75%

// Code to validate the form inputs
function validateFecalElastase() {
    const fecalElastaseInput = document.getElementById('fecalElastase');
    const fecalElastaseValue = fecalElastaseInput.value.trim();

    // Only proceed with validation if the input is not empty
    if (fecalElastaseValue !== '') {
        // Check if the value is not a three-digit number
        if (!/^\d{1,3}$/.test(fecalElastaseValue)) {
            alert('Fecal elastase test result must be entered as a number between 0 and 999.');
            fecalElastaseInput.value = ''; // Reset the input
        }
    }
}

function showModal(modalId) {
    document.getElementById(modalId + 'Modal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId + 'Modal').style.display = 'none';
}


function validateEnzymeDose(doseInputId) {
    const doseInput = document.getElementById(doseInputId);
    const doseValue = doseInput.value.trim();

    // Only proceed with validation if the input is not empty
    if (doseValue !== '') {
        // Check if the value is not a positive integer
        if (!/^[1-9]\d*$/.test(doseValue)) {
            alert('Please enter your dose as a number without commas. For example 36000 rather than 36,000.');
            doseInput.value = ''; // Reset the input
        }
    }
}

// Code that matches the symptom names with the shortened symptom abbreviations and generates the tables for the symptoms frequency and severity
const symptoms = {
    abdominal: ["Abdominal pain after you eat", "Bloating/distension of your stomach", "Excessive gas", "Trapped gas", "Nausea", "Feeling very full for hours after you eat"],
    toiletRelated: ["Messy smelly stools that stick to the side of the toilet bowl", "Diarrhea", "Constipation", "Urgent bowel movement (rush to the toilet)", "See fat or oil in stool or on toilet paper", "4 or more bowel movements per day"],
    foodRelated: ["I avoid eating large meals", "I avoid certain foods or food groups (excluding food allergies or celiac)", "I avoid fatty foods"]
};

function generateSymptomsSections(symptomType, symptomsArray) {
    let abbreviations = {
        "Abdominal": ["A-F-Pain", "A-F-Bloat", "A-F-EGas", "A-F-TGas", "A-F-Naus", "A-F-Full", "A-S-Pain", "A-S-Bloat", "A-S-EGas", "A-S-TGas", "A-S-Naus", "A-S-Full"],
        "Toilet-related": ["T-F-Smell", "T-F-Dia", "T-F-Const", "T-F-Urg", "T-F-Fat", "T-F-4BM", "T-S-Smell", "T-S-Dia", "T-S-Const", "T-S-Urg", "T-S-Fat", "T-S-4BM"],
        "Food-related": ["F-F-Lrg", "F-F-Crtn", "F-F-Fat", "F-S-Lrg", "F-S-Crtn", "F-S-Fat"]
    };


      let frequencyLabels = ["Never", "At least once, but not regularly", "Once a month", "Once a week", "A few times a week", "Most days of the week"];
      let severityLabels = ["I don't have this symptom", "Slightly annoying", "Bothersome", "Very bothersome"];
    
    let symptomTypeKey = symptomType;

    // Frequency section
    let frequencySectionHTML = `<h2>${symptomType} Symptoms - Frequency</h2><table class="symptom-frequency">`;
    frequencySectionHTML += `<tr><th>Symptom</th><th>Never</th><th>At least once, but not regularly</th><th>Once a month</th><th>Once a week</th><th>A few times a week</th><th>Most days of the week</th></tr>`;
    symptomsArray.forEach((symptom, index) => {
        const abbrFreqName = abbreviations[symptomTypeKey][index]; // Use abbreviation for frequency
        frequencySectionHTML += `<tr><td>${symptom}</td>`; // Keep displaying the full symptom description
        for (let i = 0; i <= 5; i++) {
            frequencySectionHTML += `<td><label for="${abbrFreqName}_${i}"><input type="radio" id="${abbrFreqName}_${i}" name="${abbrFreqName}" value="${i}" ${i === 0 ? 'required' : ''}><span>${frequencyLabels[i]}</span></label></td>`;
     //      frequencySectionHTML += `<td><input type="radio" name="${abbrFreqName}" value="${i}" ${i === 0 ? 'required' : ''}></td>`;
             
         // use this one for testing so not required
          //   frequencySectionHTML += `<td><input type="radio" name="${abbrFreqName}" value="${i}" ${i === 0}></td>`;
          
          //testing with required AND checked by default
        //  frequencySectionHTML += `<td><input type="radio" name="${abbrFreqName}" value="${i}" ${i === 0 ? 'required' : ''} checked></td>`;
        }
        frequencySectionHTML += `</tr>`;
    });
    frequencySectionHTML += `</table>`;

    // Severity section
    let severitySectionHTML = `<h2>${symptomType} Symptoms - Severity</h2><table class="symptom-severity">`;
    severitySectionHTML += `<tr><th>Symptom</th><th>I don't have this symptom</th><th>Slightly annoying</th><th>Bothersome</th><th>Very bothersome</th></tr>`;
    symptomsArray.forEach((symptom, index) => {
        const abbrSevName = abbreviations[symptomTypeKey][index + symptomsArray.length]; // Use abbreviation for severity
        severitySectionHTML += `<tr><td>${symptom}</td>`; // Keep displaying the full symptom description
        for (let i = 0; i <= 3; i++) {
             severitySectionHTML += `<td><label for="${abbrSevName}_${i}"><input type="radio" id="${abbrSevName}_${i}" name="${abbrSevName}" value="${i}" ${i === 0 ? 'required' : ''}><span>${severityLabels[i]}</span></label></td>`;

            // severitySectionHTML += `<td><input type="radio" name="${abbrSevName}" value="${i}" ${i === 0 ? 'required' : ''}></td>`;
          
          // use this one for testing so not required
            //severitySectionHTML += `<td><input type="radio" name="${abbrSevName}" value="${i}" ${i === 0 }></td>`;
          
          //testing with them all required AND checked
         // severitySectionHTML += `<td><input type="radio" name="${abbrSevName}" value="${i}" ${i === 0 ? 'required' : ''} checked></td>`;
        }
        severitySectionHTML += `</tr>`;
    });
    severitySectionHTML += `</table>`;

    return frequencySectionHTML + severitySectionHTML;
}

document.getElementById('abdominalSymptomsSection').innerHTML = generateSymptomsSections('Abdominal', symptoms.abdominal);
document.getElementById('toiletRelatedSymptomsSection').innerHTML = generateSymptomsSections('Toilet-related', symptoms.toiletRelated);
document.getElementById('foodRelatedSymptomsSection').innerHTML = generateSymptomsSections('Food-related', symptoms.foodRelated);

// Function to toggle the visibility and requirement of the EPI info section
function toggleEpiInfo(display) {
    const epiInfo = document.getElementById('epiInfo');
    const inputs = epiInfo.querySelectorAll('input, select');

    if (display) {
        epiInfo.style.display = 'block';
        inputs.forEach(input => input.setAttribute('required', ''));
    } else {
        epiInfo.style.display = 'none';
        inputs.forEach(input => input.removeAttribute('required'));
    }
}

// Function to toggle the visibility and requirement of the enzyme details section
function toggleEnzymeDetails(display) {
    const enzymeDetails = document.getElementById('enzymeDetails');
    const enzymeInputs = enzymeDetails.querySelectorAll('input, select');

    if (display) {
        enzymeDetails.style.display = 'block';
        enzymeInputs.forEach(input => input.setAttribute('required', ''));
    } else {
        enzymeDetails.style.display = 'none';
        enzymeInputs.forEach(input => input.removeAttribute('required'));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const epiDiagnosisRadios = document.querySelectorAll('input[name="epiDiagnosis"]');
    const takingEnzymesRadios = document.querySelectorAll('input[name="takingEnzymes"]');
    const form = document.getElementById('giSurveyForm');
    const submitButton = document.querySelector('input[type="submit"]');
    let isFormSubmitted = false;
    const helperText = document.createElement('p');
    helperText.textContent = "You are missing some required fields, please review the form and fill out completely.";
    helperText.style.color = 'red';
    helperText.style.display = 'none'; // Start with helper text hidden
    form.appendChild(helperText);

    // Attach event listeners to EPI diagnosis radio buttons
    epiDiagnosisRadios.forEach(radio => {
        radio.addEventListener('change', function(event) {
            const isEpiYes = event.target.value === 'Yes';
            toggleEpiInfo(isEpiYes);

            // Remove required attributes if 'No' is selected
            if (!isEpiYes) {
                const epiInfoInputs = document.querySelectorAll('#epiInfo input, #epiInfo select');
                epiInfoInputs.forEach(input => input.removeAttribute('required'));
            }
        });
    });

    // Attach event listeners to taking enzymes radio buttons
        takingEnzymesRadios.forEach(radio => {
            radio.addEventListener('change', function(event) {
                const isTakingEnzymesYes = event.target.value === 'Yes';
                toggleEnzymeDetails(isTakingEnzymesYes);

                // Remove required attributes if 'No' is selected
                if (!isTakingEnzymesYes) {
                    const enzymeInputs = document.querySelectorAll('#enzymeDetails input, #enzymeDetails select');
                    enzymeInputs.forEach(input => input.removeAttribute('required'));
                }
            });
        });

    // Initial check in case the user has pre-selected an option
    const epiDiagnosedYes = document.querySelector('input[name="epiDiagnosis"]:checked')?.value === 'Yes';
    toggleEpiInfo(epiDiagnosedYes);

    const takingEnzymesYes = document.querySelector('input[name="takingEnzymes"]:checked')?.value === 'Yes';
    toggleEnzymeDetails(takingEnzymesYes);

    // Function to check the validity of the form
        function checkFormValidity() {
            // Additional checks for EPI and enzyme details
            const isEpiYes = document.querySelector('input[name="epiDiagnosis"]:checked')?.value === 'Yes';
            const isTakingEnzymesYes = document.querySelector('input[name="takingEnzymes"]:checked')?.value === 'Yes';

            if (!isEpiYes) {
                const epiInfoInputs = document.querySelectorAll('#epiInfo input, #epiInfo select');
                epiInfoInputs.forEach(input => input.removeAttribute('required'));
            }

            if (!isTakingEnzymesYes) {
                const enzymeInputs = document.querySelectorAll('#enzymeDetails input, #enzymeDetails select');
                enzymeInputs.forEach(input => input.removeAttribute('required'));
            }

            if (form.checkValidity()) {
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '#4B0082'; // Purple color
                helperText.style.display = 'none';
            } else {
                submitButton.disabled = true;
                submitButton.style.backgroundColor = 'grey';
                helperText.style.display = 'block';
            }
        }

        // Event listener to check the form validity in real-time
        form.addEventListener('input', checkFormValidity);

    // Initial check
    checkFormValidity();

    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        console.log('Form submit event triggered.'); // Debugging line

        const qrContainer = document.getElementById('qrcode');

        // Calculate scores and top symptoms
        let { totalScore, symptomScores, topSymptoms } = calculateAndDisplayScore();

        // Display symptom scores with bars in the HTML document
        displaySymptomScores(symptomScores);

        // Collecting form data
        const formData = new FormData(event.target);
        let epiDiagnosis = formData.get('epiDiagnosis');
        let takingEnzymes = formData.get('takingEnzymes');

        // Create a data object, handling multiple values with the same name
        const data = {};
        formData.forEach((value, key) => {
            // Skip fields based on 'epiDiagnosis' and 'takingEnzymes' logic
            if (epiDiagnosis === "No" && (key === "epiDuration" || key === "fecalElastase" || key === "takingEnzymes" || key === "enzymeType" || key === "mealDose" || key === "snackDose" || key === "idealEnzymes")) {
                return; // Skip this iteration
            }
            if (takingEnzymes === "No" && (key === "enzymeType" || key === "mealDose" || key === "snackDose" || key === "idealEnzymes")) {
                return; // Skip this iteration
            }

            if (Reflect.has(data, key)) {
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key]];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });

        // Now, add the totalScore to the data object
        data.totalScore = totalScore;
        data.symptomScores = symptomScores;

//        // Get the current date and format it as MM-DD-YY
//        const cDate = new Date();
//        const formattedDate = `${cDate.getMonth() + 1}-${cDate.getDate()}-${cDate.getFullYear().toString().slice(-2)}`;
//
//        // Add the formatted date to the data object
//        data.cDate = formattedDate;
//
//        // Convert form data to a JSON string
//        const dataString = JSON.stringify(data);
//        const encodedData = encodeURIComponent(dataString);
//        const localURL = `file:///Users/danamichellelewis/Dropbox/Mac%20(2)/Desktop/QR%20code%20test/index2.html?data=${encodedData}`;
//        console.log('Data String:', dataString); // Debugging line
//        console.log('QR Code URL:', localURL); // Debugging line to see the full QR code URL
//
//        // Clear previous QR code if it exists
//        if (qrContainer.getElementsByTagName('canvas').length > 0) {
//            qrContainer.innerHTML = '';
//        }
//
//        // Generate QR Code
//        new QRCode(qrContainer, {
//            text: localURL,
//            width: 128,
//            height: 128,
//            colorDark: "#4B0082",
//            colorLight: "#E6E6FA",
//            correctLevel: QRCode.CorrectLevel.H
//        });

        function calculateAndDisplayScore() {
            let totalScore = 0;
            let symptomScores = [];
            
            const abbreviations = {
                "Abdominal": ["A-F-Pain", "A-F-Bloat", "A-F-EGas", "A-F-TGas", "A-F-Naus", "A-F-Full", "A-S-Pain", "A-S-Bloat", "A-S-EGas", "A-S-TGas", "A-S-Naus", "A-S-Full"],
                "Toilet-related": ["T-F-Smell", "T-F-Dia", "T-F-Const", "T-F-Urg", "T-F-Fat", "T-F-4BM", "T-S-Smell", "T-S-Dia", "T-S-Const", "T-S-Urg", "T-S-Fat", "T-S-4BM"],
                "Food-related": ["F-F-Lrg", "F-F-Crtn", "F-F-Fat", "F-S-Lrg", "F-S-Crtn", "F-S-Fat"]
            };

            const symptomDetails = [
                ...symptoms.abdominal.map((name, index) => ({ name, abbr: abbreviations["Abdominal"][index] })),
                ...symptoms.toiletRelated.map((name, index) => ({ name, abbr: abbreviations["Toilet-related"][index] })),
                ...symptoms.foodRelated.map((name, index) => ({ name, abbr: abbreviations["Food-related"][index] }))
            ];

            symptomDetails.forEach(detail => {
                const frequencyElement = document.querySelector(`input[name="${detail.abbr}"]:checked`);
                const severityElement = document.querySelector(`input[name="${detail.abbr.replace('-F-', '-S-')}"]:checked`);
                
                const frequency = frequencyElement ? parseInt(frequencyElement.value, 10) : 0;
                const severity = severityElement ? parseInt(severityElement.value, 10) : 0;
                const score = frequency * severity;
                totalScore += score;

                // Store individual symptom scores with their full names for later
                symptomScores.push({ name: detail.name, score });
            });

            // Sort symptomScores in descending order based on score
            symptomScores.sort((a, b) => b.score - a.score);

            // Identify tie at the boundary of top three
            let boundaryScore = symptomScores[2] ? symptomScores[2].score : null; // Score of the third symptom, if exists
            let topSymptoms = symptomScores.filter(symptom => symptom.score >= boundaryScore);

            // Update the display with the total score
            document.getElementById('scoreDisplay').innerText = `EPI/PEI-SS Total Score: ${totalScore}`;

            // Return both totalScore and the top three symptom scores with full names
            return { totalScore, symptomScores, topSymptoms };
        }

        function displaySymptomScores(symptomScores) {
            const topSymptomsDisplay = document.getElementById('topSymptomsDisplay');
            topSymptomsDisplay.innerHTML = ''; // Clear previous content
            
            // Create and append introductory text
            const introText = document.createElement('p');
            introText.textContent = "Here are the individual symptoms you reported experiencing in order of score (frequency times severity):";
            introText.style.fontStyle = 'italic'; // Directly italicize the text
            topSymptomsDisplay.appendChild(introText);

            const maxScore = 15; // Assuming the maximum score for a symptom is 15
            symptomScores.forEach(symptom => {
                if (symptom.score > 0) { // Only display symptoms with scores greater than 0
                    const symptomContainer = document.createElement('div');
                    symptomContainer.classList.add('symptom-container');
                    
                    const symptomLabel = document.createElement('div');
                    symptomLabel.textContent = symptom.name;
                    symptomLabel.classList.add('symptom-label');
                    symptomContainer.appendChild(symptomLabel);
                    
                    const symptomBar = document.createElement('div');
                    symptomBar.classList.add('symptom-bar');
                    symptomContainer.appendChild(symptomBar);
                    
                    const scorePercentage = (symptom.score / maxScore) * 100;
                    
                    const symptomDot = document.createElement('div');
                    symptomDot.classList.add('score-dot');
                    symptomDot.textContent = symptom.score;
                    symptomDot.style.left = `calc(${scorePercentage}% - 15px)`; // Adjusting 15px to center the dot
                    symptomBar.appendChild(symptomDot);
                    
                    topSymptomsDisplay.appendChild(symptomContainer);
                }
            });
        }

        displayAdviceText(totalScore); // Call a separate function to handle advice text

        function displayAdviceText(totalScore) {
            const scoreDisplay2 = document.getElementById('scoreDisplay2'); // Ensure this element exists in your HTML
            const scoreDisplay3 = document.getElementById('scoreDisplay3');
            
            let statusText;
            if (totalScore > cutoff) {
                statusText = "above";
            } else if (totalScore < cutoff) {
                statusText = "below";
            } else {
                statusText = "at"; // Specific case for scores that meet the cutoff
            }

            let adviceText = `<p><strong>What does the EPI/PEI-SS Total Score mean?</strong></p><p>Your total score (${totalScore}) is based on how you reported the burden of severity and frequency of each symptom. There are 15 symptoms, each with a possible score of up to 15, which adds up to a total score possible of 225.</p>
            <p><strong>Has the EPI/PEI-SS been validated?</strong></p>
            <p>EPI/PEI-SS is in the process of being validated as a screening tool. To date, <a href="https://doi.org/10.31219/osf.io/qpktg" target="_blank">one study</a>  has been done in a real-world population with people already diagnosed with EPI. In people already diagnosed with EPI and already taking treatment for EPI (which is called pancreatic enzyme replacement therapy, PERT), the average EPI/PEI-SS total score was around 98. In contrast, in the group without a diagnosis of EPI, the average EPI/PEI-SS total score was around 38.</p>
            <p>If we use a cutoff score of ${cutoff} – meaning if your score is ${cutoff} or higher – this suggests that ${sensitivity * 100} of 100 people with scores greater than or equal to ${cutoff} will likely have EPI. This concept is called sensitivity. In contrast, estimates for specificity suggest that ${specificity * 100} of 100 people who do not have EPI will correctly be identified as likely not having it.</p>
            <p><strong>What should I do with my EPI/PEI-SS score?</strong></p>
            <p><strong>TLDR:</strong> Your EPI/PEI-SS total score is ${totalScore}, which is ${statusText} the cutoff of ${cutoff}. This means that `;

            if (totalScore >= cutoff) {
                adviceText += `<strong style="color: #4B0082;">if you are bothered by your GI symptoms, you may want to speak to your doctor about being screened for EPI.</strong></p>`;
            } else {
                adviceText += `it is less likely that you may have EPI. However, it is possible to have a lower score and still have EPI. If you are concerned and bothered by your symptoms, you may want to speak to your doctor about your screening options.</p>`;
            }
            
            let additionalAdviceText = `<p>The most common screening for EPI is a non-invasive stool test called a fecal elastase test. If you are already taking enzymes, you do not have to discontinue them for the fecal elastase test.</p>`;
            
            document.getElementById('pdfButton').classList.remove('hidden');

            scoreDisplay2.innerHTML = adviceText;
            scoreDisplay3.innerHTML = additionalAdviceText;
        }

                
        // Mark the form as submitted
        isFormSubmitted = true;

        // Update the visibility after form submission
        toggleVisibility();

        window.printReport = function() {
            const { jsPDF } = window.jspdf;
            
            // Capture the canvases
            html2canvas(document.querySelector("#scoreDisplay")).then(canvasScoreDisplay => {
                html2canvas(document.querySelector("#topSymptomsDisplay")).then(canvasTopSymptoms => {
                    html2canvas(document.querySelector("#scoreDisplay2")).then(canvasScoreDisplay2 => {
                        
                        // Initialize the PDF
                        const pdf = new jsPDF({
                            orientation: 'portrait',
                            unit: 'px',
                            format: 'letter'
                        });

                        const contentWidth = pdf.internal.pageSize.getWidth();
                        const margin = 20;

                        // Calculate scales
                        const scaleScoreDisplay = (contentWidth - 2 * margin) / canvasScoreDisplay.width;
                        const scaleTopSymptoms = (contentWidth - 2 * margin) / canvasTopSymptoms.width;
                        const scaleScoreDisplay2 = (contentWidth - 2 * margin) / canvasScoreDisplay2.width;

                        const scale = Math.min(scaleScoreDisplay, scaleTopSymptoms, scaleScoreDisplay2);

                        // Add images to the PDF
                        pdf.addImage(canvasScoreDisplay, 'JPEG', margin, margin, canvasScoreDisplay.width * scale, canvasScoreDisplay.height * scale);
                        pdf.addImage(canvasTopSymptoms, 'JPEG', margin, canvasScoreDisplay.height * scale + margin * 2, canvasTopSymptoms.width * scale, canvasTopSymptoms.height * scale);
                        pdf.addImage(canvasScoreDisplay2, 'JPEG', margin, (canvasScoreDisplay.height + canvasTopSymptoms.height) * scale + margin * 3, canvasScoreDisplay2.width * scale, canvasScoreDisplay2.height * scale);

                        // Save the PDF
                        pdf.save('EPI-PEI-SS-report.pdf');
                    });
                });
            }).catch(err => {
                console.error('Error capturing canvas elements:', err);
            });
        

        };
    });

    // Handle the research checkbox
    const researchCheckbox = document.getElementById('Research');
    const conditionalText = document.getElementById('conditionalText');

    researchCheckbox.addEventListener('change', function() {
        if (!this.checked) {
            conditionalText.style.display = 'block';
        } else {
            conditionalText.style.display = 'none';
        }
    });

    // Initial check for the research checkbox
    if (!researchCheckbox.checked) {
        conditionalText.style.display = 'block';
    }

     // Function to detect if the user is on a mobile device
        function isMobileDevice() {
            return /Mobi|Android/i.test(navigator.userAgent);
          //  return true; // test as mobile device
        }

        // Elements
        const pdfButton = document.getElementById('pdfButton');
        const screenshotMessage = document.getElementById('screenshotMessage');
    
    // Function to toggle the visibility based on device type and form submission state
        function toggleVisibility() {
            if (isFormSubmitted) {
                if (isMobileDevice()) {
                    screenshotMessage.classList.remove('hidden');
                    pdfButton.classList.add('hidden');
                } else {
                    pdfButton.classList.remove('hidden');
                    screenshotMessage.classList.add('hidden');
                }
            } else {
                pdfButton.classList.add('hidden');
                screenshotMessage.classList.add('hidden');
            }
        }
   
});
