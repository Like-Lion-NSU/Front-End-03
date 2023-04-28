#HTML Beginner
-----------------
#HTML : HyperText Markup Language
        태그를 통해 텍스트에 생명을 불어넣는 것

#HTML 요소
<여는태그> 내용 <닫는태그>


#HTML 속성
속성이름="속성값"

여러개 작성할 경우
속성이름="속성값"V"속성이름="속성값"V속성이름="속성값"


#HTML 주석
주석 : 작성은 되어 있는 코드를 브라우저에 뜨지 않도록 무시
<!--<p>임금님 귀는 당나귀 귀!</p>-->


#HTML 문서구조
Boilerplate
<<<<<<< HEAD
~~~<!DOCTYPE html> => html 문서라는 것을 알려주는 것
=======
<!DOCTYPE html> => html 문서라는 것을 알려주는 것
>>>>>>> 채륜
<html lang="ko"> => 어떤언어로 작성되어 있는지를 알려주는 것
<head> => 브라우저 화면에 나타나지 않음, 웹문서의 속성, 인코딩 방식, 외부 리소스 로드... 등을 설정하는 항목
    <meta charset="UTF-8"> => 인코딩 방식(전세계 언어를 모두 지원)
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> => 브라우저 호환성
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> => 브라우저 넓이 설정
    <title>Document</title> => 표지에 적혀있는 제목과 같은 역할을 함
</head>
<body>
    
</body>
</html>


#HTML Block 요소 (면의 요소를 가지고 있음)
<h1>, <h2>, <h3> : (heading 태그) 제목이나 표지를 의미 h1 ~ h6 까지 지원함
                   글씨를 키우려는 목적으로 사용 x
<p> : (paragraph 태그) 글을 나타냄
<ol> : 순서를 매기는 역할
<ul> 
<li> : 하나하나의 요소 역할
<div> : 여러 가지 요소들을 그룹하는 역할

#HTML Inline 요소 (선의 요소를 가지고 있음)
<a> : (anchor 태그) 다른 페이지로 링크를 걸 수 있음
      새로 추가하고 싶을 때 target="_blank" 추가
<span> : 일부 영역을 선택하기 위함


<br> : 줄 나눔 (여는태그와 닫는태그가 없고 단일태그 사용)