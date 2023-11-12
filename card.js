<script>
    var paper = document.getElementById('paper image');

    var isDragging = false;

    paper.addEventListener('mousedown', startDrag);
    paper.addEventListener('mouseup', endDrag);
    paper.addEventListener('mousemove', drag);

    paper.addEventListener('touchstart', startDrag);
    paper.addEventListener('touchend', endDrag);
    paper.addEventListener('touchmove', drag);

    function startDrag(e) {
        e.preventDefault(); // Prevent default behavior to avoid issues with touch events
        isDragging = true;
    }

    function endDrag() {
        isDragging = false;
    }

    function drag(e) {
        if (isDragging) {
            var x = e.clientX || e.touches[0].clientX;
            var y = e.clientY || e.touches[0].clientY;
            paper.style.left = x - paper.clientWidth / 2 + 'px';
            paper.style.top = y - paper.clientHeight / 2 + 'px';
        }
    }
</script>
const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
