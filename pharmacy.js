

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

// الطالب
function submitTraining() {
  const place = document.getElementById("trainingPlace").value;
  const location = document.getElementById("nearestLocation").value;
  const msg = document.getElementById("confirmationMessage");

  if (place && location) {
    msg.innerText = `✅ تم تسجيلك في "${place}" والموقع الأقرب لك هو "${location}".`;
  } else {
    msg.innerText = "⚠️ يرجى اختيار مكان التدريب والموقع القريب أولاً.";
  }

  msg.style.display = 'block';
}

// بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  // المريض
  const patientForm = document.getElementById('patient-form');
  const patientMessage = document.getElementById('patientMessage');

  if (patientForm && patientMessage) {
    patientForm.addEventListener('submit', function (e) {
      e.preventDefault();
      patientMessage.innerText = "✅ سيصلك الدواء في أقرب وقت.";
      patientMessage.style.display = 'block';
      patientForm.reset();
    });
  }

  // الصيدلية
  const pharmacyForm = document.getElementById('pharmacy-form');
  const pharmacyMessage = document.getElementById('pharmacyMessage');

  if (pharmacyForm && pharmacyMessage) {
    pharmacyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      pharmacyMessage.innerText = "✅ تم تسجيل بيانات الصيدلية بنجاح.";
      pharmacyMessage.style.display = 'block';
      pharmacyForm.reset();
    });
  }

  // شركة الأدوية
  const companyForm = document.getElementById('company-form');
  const companyMessage = document.getElementById('company-message');

  if (companyForm && companyMessage) {
    companyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      companyMessage.innerText = "✅ تم تسجيل طلب التعاون بنجاح.";
      companyMessage.style.display = 'block';
      companyForm.reset();
    });
  }
});
