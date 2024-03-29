﻿# Упражнения: Прости пресмятания

Задачи за упражнение в клас и за домашно към курса [„Основи на програмирането&quot; @ СофтУни](https://softuni.bg/courses/programming-basics).

## 0.Празно Visual Studio решение (Blank Solution)

Създайте празно решение ( **Blank Solution**) във Visual Studio. Решенията (solutions) във Visual Studio обединяват**група проекти**. Тази възможност е изключително удобна, когато искаме да работим по няколко проекта и бързо да превключваме между тяхили искаме да обединим логически няколко взаимосвързани проекта.

В настоящото практическо занимание ще използваме **Blank Solution**  **с няколко проекта** за да организираме решенията на задачите от упражненията – всяка задача в отделен проект и всички проекти в общ solution.

1. Стартирайте Visual Studio.
2. Създайте нов **Blank Solution** : [File] [New] [Project].

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/35.PNG)

3. Изберете от диалоговия прозорец [Templates] [Other Project Types] [Visual Studio Solutions] [**Blank Solution**]и дайте подходящо име на проекта, например &quot; **Simple-Calculations**&quot;:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/47.PNG)

Сега имате създаден **празен**  **Visual Studio Solution** (с 0 проекта в него):

Целта на този blank solution e да добавяте в него **по един проект за** **всяка задача** от упражненията.

## 1.Пресмятане на лице на квадрат

Първата задача от тази тема е следната: да се напише **конзолна програма** , която **въвежда цяло число** **a** и пресмята лицето на квадрат **със страна** **a**. Задачата е тривиално лесна: въвеждате число от конзолата, умножавате го само по себе си и печатате получения резултат на конзолата.

1. Създайте **нов проект** в съществуващото Visual Studio решение. В Solution Explorer кликнете с десен бутон на мишката върху **Solution**  **&#39;** **Simple-Calculations &#39;**. Изберете [Add] [New Project…]:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/7.PNG)
 
2. Ще се отвори диалогов прозорец за избор на тип проект за създаване. Изберете C# конзолно приложениес име &quot; **Square-Area**&quot;:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/48.PNG)
 
Вече имате solution с едно конзолно приложение в него. Остава да напишете кода за решаване на задачата.

3. Отидете в тялото на метода **Main(string[] args)** и напишете кода от картинката по-долу:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/49.PNG)
 
4. Кодът въвежда цяло число с **a  = int.Parse(Console.ReadLine())**, след това изчислява **area** = ****a**** \ **a** и накрая печата стойността напроменливата **area**.

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/50.PNG)

5. **Тествайте** решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#0](https://judge.softuni.bg/Contests/Practice/Index/151#0). Трябва да получите 100 точки (напълно коректно решение):

## 2.От инчове към сантиметри

Да се напише програма, която **чете от конзолата** **число**(не непременно цяло) и преобразува числото**от инчове в сантиметри **. За целта** умножава инчовете по 2.54** (защото 1 инч = 2.54 сантиметра).

1. Първо създайте **нов**  **C#**  **конзолен проект** в решението &quot; **Simple-Calculations**&quot;. Кликнете с мишката върху решението в Solution Explorer и изберете [Add] [New Project…]:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/51.PNG)
 
Изберете [Visual C#] -> [Windows] -> [Console Application] и задайте име &quot; **Inches-to-Centimeters**&quot;:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/52.PNG)
 
2. **Напишете кода** на програмата. Може да си помогнете с примерния код от картинката:

![Not fount](/Programming%20Basics/Exercises/images/53.PNG)
 
3. **Стартирайте програмата** , както обикновено с [Ctrl+F5]:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/54.PNG)

Изненада! Како става? Програмата не работи правилно… Всъщност това не е ли предходната програма?

Във Visual Studio **текущият активен проект** в един solution е маркиран в получерно и може да се сменя:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/55.PNG)
 
4. За да включите режим на **автоматично преминаване към текущия проект** , кликнете върху главния solution с десния бутон на мишката и изберете **[Set StartUp Projects…]**:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/56.PNG)

Ще се появи диалогов прозорец, от който трябва да се избере **[Startup Project]** ->  [**Current selection**]:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/57.PNG)

5. Сега отново **стартирайте програмата** , както обикновено с [Ctrl+F5]. Този път ще се стартира текущата отворена програма, която преобразува инчове в сантиметри. Изглежда работи коректно:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/58.PNG)

6. Сега **превключете към преходната програма** (лице на квадрат). Това става с двоен клик на мишката върху файла **Program.cs** от предходния проект &quot; **Square-Area**&quot; в панела [Solution Explorer] на Visual Studio:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/59.PNG)
 
7. Натиснете пак **[Ctrl+F5]**. Този път трябва да се стартира другият проект:

![Not fount](/Programming%20Basics/Exercises/images/60.PNG)
 
8. Превключете обратно към проекта &quot; **Inches-to-Centimeters**&quot; и го стартирайте с **[Ctrl+F5]**:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/61.PNG)
 
**Превключването между проектите** е много лесно, нали? Просто избираме файла със сорс кода на програмата, кликваме го два пъти с мишката и при стартиране тръгва програмата от този файл.

9. Тествайте с **дробни числа** , например с **2.5** :

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/62.PNG)
 
**Внимание:** в зависимост от регионалните настройки на операционната система, е възможно вместо **десетична точка** (US настройки)да се използва **десетична запетая** (BG настройки).Ако програмата очаква десетична точка и бъде въведено число с десетична запетая или на обратно (бъде въведена десетична точка когато се очаква десетична запетая), ще се получи следната грешка:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/63.PNG)
 
Препоръчително е **да промените настройките на компютъра си** , така че да се използва **десетична точка** :

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/64.PNG)

10. Вече е време за **тестване в**  **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#1](https://judge.softuni.bg/Contests/Practice/Index/151#1). Решението би трябвало да бъде прието като напълно коректно:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/65.PNG)
 
## 3.Поздрав по име

Да се напише програма, която **чете от конзолата**** име на човек **и отпечатва &quot;** Hello, ****&lt;name&gt;****! **&quot;, където** &lt;name&gt;**е въведеното преди това име.

1. Първо създайте **нов**  **C#**  **конзолен проект** с име &quot; **Greeting**&quot; в решението &quot; **Simple-Calculations**&quot;:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/66.PNG)

2. **Напишете кода** на програмата. Ако се затруднявате, може да ползвате примерния код по-долу:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/67.PNG)
 
3. **Стартирайте** програмата с **[Ctrl+F5]**и я тествайте:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/68.PNG)
 
4. Тествайте в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#2](https://judge.softuni.bg/Contests/Practice/Index/151#2). Преди да пратите решението сложете коментар на първия ред, който печата &quot;Enter your name&quot;.

## 4.Съединяване на текст и числа

Напишете C# програма, която прочита от конзолата име, фамилия, възраст и град и печата съобщениеот следния вид: &quot; **You are &lt;firstName&gt; &lt;lastName&gt;, a &lt;age&gt;-years old person from &lt;town&gt;** &quot;.

1. Добавете към текущото Visual Studio решение още един **конзолен**  **C#**  **проект** с име &quot; **Concatenate-Data**&quot;.
2. **Напишете кода** , който чете входните данни от конзолата:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/69.PNG)

3. **Допишете код** , който отпечатва описаното в условието на задачата съобщение.

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/70.PNG)

На горната картинка кодът е нарочно даден размазан, за да помислите как да си го напишете сами.

4. **Тествайте** решението локално с [Ctrl+F5] и въвеждане на примерни данни.
5. Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#3](https://judge.softuni.bg/Contests/Practice/Index/151#3).

## 5.Лице на трапец

Напишете програма, която чете от конзолата три числа **b1** , **b2** и **h** и **пресмята лицето на трапец** с основи **b1** и **b2** и височина **h**. **Формулата за лице на трапец** е **(b1**+****b2)**** *****h**** / **2**.

На фигурата по-долу е показан трапец със страни 8 и 13 и височина 7. Той има лице (8 + 13) \* 7 / 2 = 73.5.

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/71.PNG)

1. Добавете към текущото Visual Studio решение още един **конзолен**  **C#**  **проект** с име &quot; **Trapezoid-Area**&quot;.
2. **Напишете кода** , който чете входните данни от конзолата, пресмята лицето на трапеца и го отпечатва:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/72.PNG)

Кодът на картинката е нарочно размазан, за да си го доизмислите и допишете сами.

3. **Тествайте** решението локално с [Ctrl+F5] и въвеждане на примерни данни.
4. Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#4](https://judge.softuni.bg/Contests/Practice/Index/151#4).

## 6.Периметър и лице на кръг

Напишете програма, която чете от конзолата **число**** r **и пресмята и отпечатва** лицето **и** периметъра на кръг **/ окръжност с радиус** r**.

| **вход** | **изход** |
| --- | --- |
| 3 | Area = 28.2743338823081 <br/> Perimeter = 18.8495559215388 |
| 4.5 | Area = 63.6172512351933 <br/> Perimeter = 28.2743338823081 |

За изчисленията можете да използвате следните формули:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/73.PNG)

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#5](https://judge.softuni.bg/Contests/Practice/Index/151#5).

## 7.Лице на правоъгълник в равнината

**Правоъгълник** е зададен с **координатите** на два от своите срещуположни ъгъла ( **x1** , **y1** ) – ( **x2** , **y2** ). Да се пресметнат **площта** и **периметъра** му. **Входът** се чете от конзолата. Числата **x1** , **y1** , **x2** и **y2** са дадени по едно наред. **Изходът** се извежда на конзолата и трябва да съдържа два реда с по една число на всеки от тях – лицето и периметъра.

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/74.PNG)

| **вход** | **изход** |
| --- | --- |
| 60 <br/> 20 <br/> 10 <br/> 50 | 15001 <br/> 60  |
| 30 <br/> 40 <br/> 70 <br/> -10 | 2000 <br/> 180 |
| 600.25 <br/> 500.75 <br/> 100.50 <br/> -200.5 | 350449.6875 <br/> 2402 |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#6](https://judge.softuni.bg/Contests/Practice/Index/151#6).

## 8.Лице на триъгълник

Напишете програма, която чете от конзолата **страна** и **височина** на **триъгълник** и пресмята неговото лице.Използвайте **формулата** за лице на триъгълник: **area** = **a** * **h** / **2**. Закръглете резултата до **2 знака след десетичната точка** използвайки [**Math.Round(area,**](https://msdn.microsoft.com/en-us/library/75ks3aby(v=vs.110).aspx) [**2)**](https://msdn.microsoft.com/en-us/library/75ks3aby(v=vs.110).aspx).

| **вход** | **изход** |
| --- | --- |
| 20 <br/> 30 | Triangle area = 300  |
| 15 <br/> 35 | Triangle area = 262.5 |
| 7.75 <br/> 8.45 | Triangle area = 32.74 |
| 1.23456 <br/> 4.56789 | Triangle area = 2.82 |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#7](https://judge.softuni.bg/Contests/Practice/Index/151#7).

## 9.Конзолен конвертор: от градуси °C към градуси °F

Напишете програма, която чете **градуси по скалата на Целзий** (°C) и ги преобразува до **градуси** **по скалата на Фаренхайт**(°F). Потърсете в Интернет подходяща [формула](http://bfy.tw/3rGh), с която да извършите изчисленията. Закръглете резултата до**2 знака след десетичната точка**. Примери:

| **вход** | **изход** |  **вход** | **изход** |  
| --- | --- | --- | --- |
| 25 | 77 | 0 | 32 | 
|-5.5 | 22.1 | 32.3 | 90.14 |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#8](https://judge.softuni.bg/Contests/Practice/Index/151#8).

## 10.Конзолен конвертор: от радиани в градуси

Напишете програма, която чете **ъгъл в** [**радиани**](https://bg.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B4%D0%B8%D0%B0%D0%BD) (rad) и го преобразува в [**градуси**](https://bg.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_(%D1%8A%D0%B3%D1%8A%D0%BB)) (deg). Потърсете в Интернет подходяща формула. Числото **π** в C# програми е достъпно чрез **Math.PI**. Закръглете резултата до най-близкото цяло число използвайки **Math.Round()**. Примери:

| **вход** | **изход** | **вход** | **изход** | 
| --- | --- | --- | --- |
| 3.1416 | 180 | 6.2832 | 360 | 
|0.7854 | 45 | 0.5236 | 30 |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#9](https://judge.softuni.bg/Contests/Practice/Index/151#9).

## 11.Конзолен конвертор: USD към BGN

Напишете програмаза **конвертиране на щатски долари** (USD) **в български лева** (BGN). **Закръглете** резултата до **2 цифри** след десетичната запетая. Използвайте фиксиран **курс** между долар и лев: **1 USD** = **1.79549 BGN**.

| **вход** | **изход** | **вход** | **изход** | **вход** | **изход** |
| --- | --- | --- | --- | --- | --- |
| 20 | 35.91 BGN | 100 | 179.55 BGN | 12.5 | 22.44 BGN |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#10](https://judge.softuni.bg/Contests/Practice/Index/151#10).

## 12.\* Конзолен междувалутен конвертор

Напишете програмаза **конвертиране** на парична сума от една валута в друга. Трябва да се поддържат следните валути: **BGN **,** USD **,** EUR **,** GBP**. Използвайте следните фиксирани валутни курсове:

| **Курс** | **USD** | **EUR** | **GBP** |
| --- | --- | --- | --- |
| **1**  **BGN** | 1.79549 | 1.95583 | 2.53405 |

**Входът** e **сума за конвертиране** + **входна валута** + **изходна валута**. **Изходът** е едно число – преобразуваната сума по посочените по-горе курсове, закръглен до **2 цифри** след десетичната точка. Примери:

| **вход** | **изход** | **вход** | **изход** | 
| --- | --- | --- | --- |
| 20 <br/> USD <br/> BGN | 35.91 BGN | 100 <br/> BGN <br/> EUR | 51.13 EUR | 
|12.35 <br/> EUR <br/> GBP | 9.53 GBP | 150.35 <br/> USD <br/> EUR | 138.02 EUR |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#1](https://judge.softuni.bg/Contests/Practice/Index/151#11) [1](https://judge.softuni.bg/Contests/Practice/Index/151#11).

## 13.\*\* Пресмятане с дати: 1000 дни на Земята

Напишете програма, която въвежда **рождена дата** във формат &quot; **dd-MM-yyyy**&quot; и пресмята датата, на която се навършват **1000 дни** от тази рождена дата и я отпечатва в същия формат.

| **вход** | **изход** |
| --- | --- |
| 25-02-1995 | 20-11-1997 |
| 07-11-2003 | 02-08-2006 |
| 30-12-2002 | 24-09-2005 |
| 01-01-2012 | 26-09-2014 |
| 14-06-1980 | 10-03-1983 |

> **\***  **Подсказки** : потърсете информация за типа **DateTime** в C# и по-конкретно разгледайте методите **ParseExact(str,format) **,** AddDays(count) **и** ToString(format)**. С тяхна помощ може да решите задачата, без да е необходимо да изчислявате дни, месеци и високосни години.

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#12](https://judge.softuni.bg/Contests/Practice/Index/151#12). Не печатайте нищо допълнително на конзолата освен изискваната дата!

