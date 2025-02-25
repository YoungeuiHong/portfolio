### 한국가톨릭대사전 OCR 검수 사이트 구축
> 한국가톨릭대사전의 원본 이미지와 OCR 결과물을 비교하여 잘못 인식된 부분을 수정할 수 있는 웹 사이트를 제작했습니다.
* __하이라이팅 기능 개발__
  * OCR 정확도가 낮아서 오타일 가능성인 높은 부분에 하이라이팅하는 기능 개발
* __테이블 수정 기능 개발__
  * HTML 형태로 주어진 테이블의 내용을 수정하고, 특정 단어를 찾기 / 바꾸기할 수 있는 기능 개발
  * `contenteditable` 테이블 에디터에서 DOM을 직접 편집하기 때문에, 이를 React state와 동기화하는 것이 관건이었음
    * `useRef`를 활용하여 에디터의 DOM을 직접 참조하면서 필요한 순간에만 React state를 갱신하도록 구현함. 
    * 이를 통해 불필요한 리렌더링을 최소화하면서도, 사용자가 입력할 때 IME 입력이 방해 받거나, 커서가 예상치 못하게 이동하는 문제를 방지할 수 있었음. 
  * 하이라이팅 기능으로 인해 단순한 문자열 검색 • 치환 방식으로는 구현이 불가능했음
    * `TreeWalker` API를 활용하여 DOM 내 텍스트 노드를 순회하며 검색 • 치환하는 방식으로 구현  
  
<img src="/assets/markdown/embed/tmaxai/ocr_inspection.webp" />
  
### 한국가톨릭대사전 홈페이지 구축 (<a href="https://encyclopedia.catholic.or.kr/" target="_blank">🔗 홈페이지 링크</a>)
> 한국가톨릭대사전 홈페이지의 서비스 페이지 및 관리자 페이지 개발에 참여했습니다.
* __주석 / 테이블 에디터 개발__
  * Quill과 quill-better-table 라이브러리를 한국가톨릭대사전 서비스에 맞게 커스텀하여 주석 작성 에디터와 테이블 에디터를 개발
  
  <img src="/assets/markdown/embed/tmaxai/table_editor.webp">
  <img src="/assets/markdown/embed/tmaxai/footnote_editor.webp">
* __반응형 웹 제작__
  * PC 및 모바일 환경에서 모두 이용할 수 있게끔 CSS 미디어 쿼리를 활용하여 반응형 UI를 구현
  <img src="/assets/markdown/embed/tmaxai/responsive_ui.webp">
* __CI/CD 환경 구축 및 웹 성능 최적화__
  * Nginx, Vite, Docker, GitLab Runner를 사용하여 CI/CD 파이프라인을 구축
  * Nginx에서 Gzip 텍스트 압축을 적용하여 FCP 시간을 1.8초에서 0.7초로 단축하고 Lighthouse 성능 점수를 22점 향상시킴.
  * Vite의 Tree Shaking, Code Splitting 옵션을 최적화하여 번들 크기를 줄이고, 초기 로딩 속도를 개선. 이를 통해 Lighthouse 성능 점수를 93점까지 향상시킴.
