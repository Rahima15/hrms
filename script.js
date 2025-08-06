
// ========== Candidate Data ==========
const candidates = {
  "1": {
    name: "Rahul Mehta",
    email: "rahul.mehta@example.com",
    phone: "+91 9876543210",
    position: "Frontend Developer",
    resumeFile: "rahul_resume.pdf"
  },
  "2": {
    name: "Anita Singh",
    email: "anita.singh@example.com",
    phone: "+91 9123456780",
    position: "Backend Developer",
    resumeFile: "anita_resume.pdf"
  }
};

let selectedCandidate = null;

function loadCandidate() {
  const selectedId = document.getElementById("candidateSelect").value;
  const infoDiv = document.getElementById("candidateInfo");
  const statusDiv = document.getElementById("statusContainer");

  if (selectedId && candidates[selectedId]) {
    selectedCandidate = candidates[selectedId];
    document.getElementById("name").textContent = selectedCandidate.name;
    document.getElementById("email").textContent = selectedCandidate.email;
    document.getElementById("phone").textContent = selectedCandidate.phone;
    document.getElementById("position").textContent = selectedCandidate.position;
    document.getElementById("resumeLink").textContent = selectedCandidate.resumeFile;
    document.getElementById("resumeLink").href = "#/" + selectedCandidate.resumeFile;

    infoDiv.style.display = "block";
    statusDiv.style.display = "block";

    document.getElementById("statusSelect").value = "";
    document.getElementById("sendLinkBtn").disabled = true;
  } else {
    selectedCandidate = null;
    infoDiv.style.display = "none";
    statusDiv.style.display = "none";
  }
}

function handleStatusChange() {
  const status = document.getElementById("statusSelect").value;
  document.getElementById("sendLinkBtn").disabled = (status !== "Selected");
}

function generatePreJoiningLink() {
  const baseUrl = "https://company.com/pre-joining/";
  const uniqueId = crypto.randomUUID();
  return baseUrl + uniqueId;
}

function sendPreJoiningLink() {
  if (!selectedCandidate) return;
  const link = generatePreJoiningLink();
  alert(`✅ Pre-Joining link sent to ${selectedCandidate.name} (${selectedCandidate.email}) via Email & WhatsApp\n\n🔗 Link: ${link}`);
}

// ========== Interview Data ==========
const interviewCandidates = {
  "1": {
    name: "Rahul Mehta",
    email: "rahul.mehta@example.com",
    phone: "+91 9876543210",
    position: "Frontend Developer",
    interviewer: "Priya Sharma",
    date: "2025-08-04",
    time: "11:00 AM",
    comments: "Strong frontend skills, quick learner",
  },
  "2": {
    name: "Anita Singh",
    email: "anita.singh@example.com",
    phone: "+91 9123456780",
    position: "Backend Developer",
    interviewer: "Suresh Kumar",
    date: "2025-08-05",
    time: "2:00 PM",
    comments: "Excellent problem-solving skills",
  }
};

let selectedInterviewCandidate = null;

function loadInterviewCandidate() {
  const selectedId = document.getElementById("interviewCandidateSelect").value;
  const detailsDiv = document.getElementById("interviewDetails");
  const statusContainer = document.getElementById("interviewStatusContainer");
  const linkSection = document.getElementById("interviewLinkSection");

  if (selectedId && interviewCandidates[selectedId]) {
    selectedInterviewCandidate = interviewCandidates[selectedId];

    detailsDiv.innerHTML = `
      <h3>Interview Details</h3>
      <p><strong>Candidate:</strong> ${selectedInterviewCandidate.name}</p>
      <p><strong>Email:</strong> ${selectedInterviewCandidate.email}</p>
      <p><strong>Phone:</strong> ${selectedInterviewCandidate.phone}</p>
      <p><strong>Position:</strong> ${selectedInterviewCandidate.position}</p>
      <p><strong>Interviewer:</strong> ${selectedInterviewCandidate.interviewer}</p>
      <p><strong>Date:</strong> ${selectedInterviewCandidate.date}</p>
      <p><strong>Time:</strong> ${selectedInterviewCandidate.time}</p>
      <p><strong>Comments:</strong> ${selectedInterviewCandidate.comments}</p>
    `;

    detailsDiv.style.display = "block";
    statusContainer.style.display = "block";
    linkSection.classList.add("hidden");

    document.getElementById("interviewStatusSelect").value = "";
    document.getElementById("sendInterviewLinkBtn").disabled = true;
    document.getElementById("interviewGeneratedLink").value = "";
  } else {
    selectedInterviewCandidate = null;
    detailsDiv.style.display = "none";
    statusContainer.style.display = "none";
    linkSection.classList.add("hidden");
  }
}

function handleInterviewStatusChange() {
  const status = document.getElementById("interviewStatusSelect").value;
  const sendBtn = document.getElementById("sendInterviewLinkBtn");
  const linkSection = document.getElementById("interviewLinkSection");
  const linkInput = document.getElementById("interviewGeneratedLink");

  if (status === "Selected") {
    sendBtn.disabled = false;
    const uniqueLink = generatePreJoiningLink();
    linkInput.value = uniqueLink;
    linkSection.classList.remove("hidden");
  } else {
    sendBtn.disabled = true;
    linkSection.classList.add("hidden");
    linkInput.value = "";
  }
}

function sendInterviewPreJoiningLink() {
  if (!selectedInterviewCandidate) return;
  const link = document.getElementById("interviewGeneratedLink").value;
  alert(`✅ Pre-Joining link sent to ${selectedInterviewCandidate.name} (${selectedInterviewCandidate.email}) via Email & WhatsApp\n\n🔗 Link: ${link}`);
}

function sendViaEmail() {
  if (!selectedInterviewCandidate) return;
  const link = document.getElementById("interviewGeneratedLink").value;
  alert(`📧 Email sent to ${selectedInterviewCandidate.email} with link:\n${link}`);
}

function sendViaWhatsApp() {
  if (!selectedInterviewCandidate) return;
  const link = document.getElementById("interviewGeneratedLink").value;
  alert(`📱 WhatsApp sent to ${selectedInterviewCandidate.phone} with link:\n${link}`);
}

// ========== Pre-Joining Form Submission ==========

// ========== Experience Form Toggle ==========
function toggleExperienceForm() {
  const select = document.getElementById('experienceSelect');
  const expFields = document.getElementById('experiencedFields');
  if (select.value === "Experienced") {
    expFields.classList.remove('hidden');
  } else {
    expFields.classList.add('hidden');
  }
}


  function submitForm() {
    const candidateType = document.getElementById("experienceSelect").value;

    if (candidateType === "none") {
      alert("Please select the candidate type.");
      return;
    }

    if (candidateType === "Experienced") {
      const hrName = document.getElementById("hrName").value.trim();
      const hrEmail = document.getElementById("hrEmail").value.trim();

      if (!hrName || !hrEmail) {
        alert("Please fill in HR Name and HR Email.");
        return;
      }

      alert("Email sent to HR for verification.");
    } else if (candidateType === "Fresher") {
      alert("Fresher form submitted successfully.");
    }
  }


// ========== Post Submission ==========

  const fieldsToDisable = [
    "name", "mobile", "email", "aadhar", "pan", "education", "referral", "ctc",
    "slip1", "slip2", "slip3", "check1", "check2", "check3", "finalCheck"
  ];

  function setFormDisabled(disabled) {
    fieldsToDisable.forEach(id => {
      const field = document.getElementById(id);
      if (field) field.disabled = disabled;
    });
  }

  function submitForm() {
    // Check if final confirmation checkbox is ticked
    const finalCheck = document.getElementById("finalCheck");
    if (!finalCheck.checked) {
      alert("Please enter all the details.");
      return;
    }

    // Store submission time in localStorage
    const now = new Date().getTime();
    localStorage.setItem("submittedAt", now);

    alert("Form submitted successfully & WhatsApp message has been sent. You have 2 hours to edit your details.");

    // WhatsApp message to candidate
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const ctc = document.getElementById("ctc").value.trim();

    if (mobile.length < 10) {
      alert("Invalid mobile number for WhatsApp message.");
      return;
    }

    const whatsappNumber = "91" + mobile; // India code
    const message = `Hello ${name}, your pre-joining form has been successfully submitted. Your CTC details: ${ctc}. You can edit the form within 2 hours.`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

    // Open WhatsApp message in new tab
    window.open(whatsappURL, "_blank");

    // Check edit time
    checkEditWindow();
  }

  

  // On page load
  window.onload = checkEditWindow;


  //offer letter

  
  let offerData = {};

  function generateOffer() {
    // Validate required fields
    const candName = document.getElementById("candName").value.trim();
    const designation = document.getElementById("designation").value.trim();
    const pfOptin = document.getElementById("pfOptin").value;
    const salary = document.getElementById("salary").value.trim();
    const joiningDate = document.getElementById("joiningDate").value;

    if (!candName || !designation || !pfOptin || !salary || !joiningDate) {
      alert("Please fill in all fields.");
      return;
    }

    offerData = { candName, designation, pfOptin, salary, joiningDate };

    // Create offer letter HTML
    const offerHtml = `
      <p>Dear <strong>${candName}</strong>,</p>
      <p>We are pleased to offer you the position of <strong>${designation}</strong> at our company.</p>
      <p>Salary: <strong>${salary}</strong></p>
      <p>PF Opt-in: <strong>${pfOptin}</strong></p>
      <p>Your joining date is set for <strong>${joiningDate}</strong>.</p>
      <p>Please confirm your acceptance by clicking the 'Accept Offer' button below.</p>
      <p>We look forward to having you on our team.</p>
      <p>Sincerely,<br>HR Team</p>
    `;

    document.getElementById("offerContent").innerHTML = offerHtml;
    document.getElementById("offerLetter").style.display = "block";
  }

  function sendEmail() {
    alert("Send Email functionality to be implemented with backend.");
  }

  function sendWhatsApp() {
    if (!offerData.candName || !offerData.designation) {
      alert("Please generate the offer letter first.");
      return;
    }
    // Example candidate number (replace with actual)
    const candidateNumber = prompt("Enter candidate WhatsApp number (with country code, e.g., 919876543210):");
    if (!candidateNumber) return;

    const message = `Hello ${offerData.candName}, congratulations! Your offer for the position of ${offerData.designation} has been sent. Please check your email for details.`;
    const url = `https://wa.me/${candidateNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }