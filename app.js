const targetDiv = document.getElementsByClassName('text-center mb-2')[1];

  if (targetDiv) {
    const nowLink = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);
    const currentId = parseInt(urlParams.get('id'), 10);

    if (!isNaN(currentId)) {
      const newLink = document.createElement('a');
      newLink.href = `problem.php?id=${currentId + 1}`;
      newLink.innerText = '다음 페이지로';
      newLink.style.marginLeft = '10px'; 
      newLink.className = 'btn btn-success'; 

      targetDiv.appendChild(newLink);
    } else {
      console.warn('URL에서 문제 ID를 추출할 수 없습니다.');
    }
  } else {
    console.warn('지정한 <div> 요소를 찾을 수 없습니다.');
  }