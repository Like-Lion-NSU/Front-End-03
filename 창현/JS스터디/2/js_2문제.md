## 챕터 3-1.
<hr/>

### 1번.
>* 3번

### 2번.
>``` 
><script>
>   const a = Number(prompt('첫 번째 숫자', ''))
>   const b = Number(prompt('두 번째 숫자', ''))
> 
>   if (a>b){
>       alert('첫 번째로 입력한 숫자가 더 큽니다.')
>   } else if(a===b){
>       alert('두 숫자가 같습니다.')
>   } else{
>       alert('두 번째로 입력한 숫자가 더 큽니다.')   
>   }
></script>
>```

### 3번.
> &&

### 4번.
>```
><script>
>   const a = Number(prompt('숫자를 입력해주세요',''))
>   if(a<0){
>       alert('입력한 숫자는 음수입니다.')
>   }else if(a===0){
>       alert('입력한 숫자는 0입니다.')
>   }else{
>       alert('입력한 숫자는 양수입니다.')
>   }
></script>
>```

### 5번.
>```
><script>
>   const a = Number(prompt('숫자를 입력해주세요',''))   
>   if(a%2===0){
>       alert('입력한 숫자는 짝수입니다.')
>   }else{
>       alert('입력한 숫자는 홀수입니다.')
>   }
></script>
>```


### 6번.
>```
><script>
>   const a = Number(prompt('월을 입력해주세요',''))   
>   if (a>=3 && a<=4){
>       alert('봄입니다.')
>   }else if(a>=5 && a<=8){
>       alert('여름입니다.')
>   }else if(a>=9 && a<=10){
>       alert('가을입니다.')
>   }else{
>       alert('겨울입니다.')
>   }
></script>
>```

<hr/>

## 챕터 3-2.
<hr/>

### 1번.
> true

### 2번.
>```
><script>
>   cosnt rawInput = prompt('태어난 해를 입력해주세요.','')
>   const year = Number(rawInput)
>   const e = year%12
>   let result
>   switch(e){
>       case 0: result='원숭이'
>       case 1: result='닭'
>       case 2: result='개'
>       case 3: result='돼지'
>       case 4: result='쥐'
>       case 5: result='소'
>       case 6: result='호랑이'
>       case 7: result='토끼'
>       case 8: result='용'
>       case 9: result='뱀'
>       case 10: result='말'
>       defualt: result='양'
>   }
>   alert(`${year}년에 태어났다면 ${result}띠 입니다.`)
></script>
>```

### 3번.
>```
><script>
>   cosnt rawInput = prompt('태어난 해를 입력해주세요.','')
>   const year = Number(rawInput)
>   
>   let 간
>   let gan = '신,유,술,해,자,축,인,묘,진,사,오,미'.split(',')
>   간 = gan[year%12]
>
>   let 띠
>   let ddi='경,신,임,계,갑,을,병,정,무,기'.split(',')
>   띠=ddi[year%10]
>   
>   alert(`${year}년은 ${간}${띠}년입니다.`)
></script>
>```


### 4번.
> 4번

### 5번.
> 3번

<hr/>

## 챕터 4-1.
<hr/>

### 1번. 
> 1-1. "2"   
> 1-2. "배"   
> 1-3. 273

### 2번.
> 4   
> 5

### 3번.
> 3-1. 파괴적처리   
> 3-2. 파괴적처리   
> 3-3. 비파괴적처리   
> 3-4. 비파괴적처리
<hr/>

## 챕터 4-2.
<hr/>

### 1번.
> ```
>   # for in 반복문
>   0
>   1
>   2
>   3
>   
>   # for of 반복문
>   사과
>   배
>   귤
>   바나나
> ```

### 2번.
>[3, 6, 9]   
>const -> let

### 3번.
>```
><script>
>   let output = 1
>   for (let i=1; i<101;i++){
>       output *=i
>   }
>   console.log(`1~100의 숫자를 모두 곱하면, ${output}입니다.`)
></script>
>```

### 4번.
>```
><script>
>   let output = ''
>   const size = 5
>   for (let i=size; i>0; i--){
>       let count=0
>       for(let j=i-1; j>0; j--){
>           output+=' '
>           count+=1
>       }
>        for(let k=0; k<(size-count)*2-1;k++){
>            output+='*'
>        }
>        output+='\n'
>   }
>   for (let i=1; i<size;i++){
>       let count=0
>        for(let j=0;j<i;j++){
>            output+=' '
>            count+=1
>        }
>        for(let k=(size-count)*2-1;k>0;k--){
>            output+='*'
>        }
>        output+='\n'
>   }
>   console.log(output)
></script>
>```