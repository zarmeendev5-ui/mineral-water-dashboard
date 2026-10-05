function showSlide(slideId) {
    document.querySelectorAll('.slide-content').forEach(slide => slide.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(slideId).classList.add('active');
    event.target.classList.add('active');
}