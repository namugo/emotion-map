const mapContainer = document.getElementById('map-container');
const emotionPicker = document.getElementById('emotion-picker');
let clickX = 0;
let clickY = 0;

// 지도 클릭 시 감정 선택창 띄우기
mapContainer.addEventListener('click', function (e) {
  const rect = mapContainer.getBoundingClientRect();
  clickX = e.clientX - rect.left;
  clickY = e.clientY - rect.top;

  emotionPicker.style.left = `${clickX}px`;
  emotionPicker.style.top = `${clickY}px`;
  emotionPicker.classList.remove('hidden');
});

// 감정 선택 후 마커 추가
document.querySelectorAll('.emoji').forEach(button => {
  button.addEventListener('click', function () {
    const emoji = this.textContent;

    const marker = document.createElement('div');
    marker.className = 'marker';
    marker.textContent = emoji;
    marker.style.left = `${clickX}px`;
    marker.style.top = `${clickY}px`;

    mapContainer.appendChild(marker);
    emotionPicker.classList.add('hidden');
  });
});
