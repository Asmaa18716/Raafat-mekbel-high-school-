// نسخ الباسورد
document.addEventListener('click', function(e){
  if(e.target && e.target.id === 'copyBtn') {
    const input = document.getElementById('school-password');
    if(!input) return;
    navigator.clipboard?.writeText(input.value).then(()=>{
      e.target.textContent = 'تم النسخ ✅';
      setTimeout(()=> e.target.textContent = 'انسخ', 1500);
    }).catch(()=>{
      alert('نسخ فشل — ممكن تنسخي يدويًا');
    });
  }
});

// مثال: إضافة إعلان ديناميكي (لو حابة تضيفي إعلانات من هنا بدون تعديل HTML)
const announcements = [
  // اضافة اشعارات هنا كمثال
  // "تذكير: آخر ميعاد لتسليم ملفات الرحلة 10 ديسمبر.",
];

const el = document.getElementById('announcements-list');
if(el && announcements.length){
  el.innerHTML = announcements.map(a => `<li>${a}</li>`).join('');
    }
