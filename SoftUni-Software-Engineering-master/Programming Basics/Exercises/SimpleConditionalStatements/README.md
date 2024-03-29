﻿# Упражнения: Прости проверки

Задачи за упражнение в клас и за домашно към курса [„Основи на програмирането&quot; @ СофтУни](https://softuni.bg/courses/programming-basics).

## 0.Празно Visual Studio решение (Blank Solution)

Създайте празно решение ( **Blank Solution**) във Visual Studio за да организирате решенията на задачите от упражненията – всяка задача ще бъде в отделен проект и всички проекти ще бъдат в общ solution.

1. Стартирайте Visual Studio.
2. Създайте нов **Blank Solution** : [File] [New] [Project].

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/4.PNG)
 
3. Изберете от диалоговия прозорец [Templates] [Other Project Types] [Visual Studio Solutions] [**Blank Solution**]и дайте подходящо име на проекта, например &quot; **Simple-Conditions**&quot;:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/75.PNG)

Сега имате създаден **празен**  **Visual Studio Solution** (без проекти в него):
Целта на този **blank solution** e да добавяте в него **по един проект за** **всяка задача** от упражненията.

## 1.Проверка за отлична оценка

Първата задача от тази тема е да се напише **конзолна програма** , която **въвежда оценка** (десетично число) и отпечатва &quot; **Excellent!**&quot;, ако оценката е **5.50** или по-висока.

| **вход** | **изход** |  **вход** | **изход** |  
| --- | --- | --- | --- | 
| 6 | Excellent! | 5 | (_няма изход_) |
| 5.50 | Excellent! | 5.49 | (_няма изход_) |

1. Създайте **нов проект** в съществуващото Visual Studio решение. В Solution Explorer кликнете с десен бутон на мишката върху **Solution**  **&#39;** **Simple-Conditions &#39;**. Изберете [Add] [New Project…]:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/7.PNG)

2. Ще се отвори диалогов прозорец за избор на тип проект за създаване. Изберете C# конзолно приложениеи задайте име &quot; **Excellent-Result**&quot;:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/76.PNG)

Вече имате solution с едно конзолно приложение в него. Остава да напишете кода за решаване на задачата.

3. Отидете в тялото на метода **Main(string[]args)** и напишете решението на задачата. Можете да си помогнете с кода от картинката по-долу:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/77.PNG)

4. **Стартирайте** програмата с [Ctrl+F5] и я **тествайте** с различни входни стойности:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/78.PNG)

5. **Тествайте** решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/152#0](https://judge.softuni.bg/Contests/Practice/Index/152#0). Трябва да получите **100 точки** (напълно коректно решение):

## 2.Отлична оценка или не

Следващата задача от тази тема е да се напише **конзолна програма** , която **въвежда оценка** (десетично число) и отпечатва &quot; **Excellent!** &quot;, ако оценката е **5.50** или по-висока, или &quot; **Not excellent.** &quot; в противен случай.

| **вход** | **изход** | **вход** | **изход** | 
| --- | --- | --- | --- | 
| 6 | Excellent! | 5 | Not excellent. | 
|5.50 | Excellent! | 5.49 | Not excellent. |

1. Първо създайте **нов**  **C#**  **конзолен проект** в решението &quot; **Simple-Conditions**&quot;.
  - Кликнете с мишката върху решението в Solution Explorer и изберете [Add] [**New Project** …].
  - Изберете [Visual C#] [Windows] [**Console Application**] и задайте име &quot; **Excellent-or-Not**&quot;.
2. **Напишете кода** на програмата. Може да си помогнете с примерния код от картинката:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/79.PNG)

3. Включете режим на **автоматично превключване към текущия проект** като кликнете върху главния solution с десния бутон на мишката и изберете **[Set StartUp Projects…]**:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/56.PNG)

Ще се появи диалогов прозорец, от който трябва да се избере **[Startup Project]** => [**Current selection**]:

![Not fount](/Programming%20Basics/Exercises/images/57.PNG)

4. Сега **стартирайте програмата** , както обикновено с [Ctrl+F5] и я тествайте:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/80.PNG)

5. Тествайте в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#1](https://judge.softuni.bg/Contests/Practice/Index/151#1). Решението би трябвало да бъде прието като напълно коректно.

## 3.Четно или нечетно

Да се напише програма, която въвежда **цяло число** и печата дали е **четно** или **нечетно**.Примери:

| **вход** | **изход** | **вход** | **изход** |  
| --- | --- | --- | --- | 
| 2 | even | 3 | odd | 
|25  | even | 1024 | odd |

1. Първо добавете **нов**  **C#**  **конзолен проект** в съществуващия solution.
2. **Напишете кода** на програмата. Проверката за четност може да се реализира чрез проверка на **остатъка при деление на 2** по следния начин: **var even = (num % 2 == 0)**.
3. **Стартирайте** програмата с **[Ctrl+F5]** и я тествайте:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/81.PNG)

4. Тествайте в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#2](https://judge.softuni.bg/Contests/Practice/Index/151#2).

## 4.Намиране на по-голямото число

Да се напише програма, която въвежда **две цели числа** и отпечатва по-голямото от двете.Примери:

| **вход** | **изход** |  **вход** | **изход** | 
| --- | --- | --- | --- | 
| 5 <br/> 3 | 5 | 3 <br/> 5 | 5 |
| 10 <br/> 10 | 10 | -5 <br/> 5 | 5 |

1. Първо добавете **нов**  **C#**  **конзолен проект** в съществуващия solution.
2. **Напишете кода** на програмата. Необходима е единична **if** - **else** конструкция.
3. **Стартирайте** програмата с **[Ctrl+F5]** и я тествайте:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/82.PNG)

4. Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#3](https://judge.softuni.bg/Contests/Practice/Index/151#3).

> **Подсказка** : може да си помогнете частично с кода от картинката, който е нарочно замъглен, за да помислите как да си го напишете сами:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/83.PNG)

## 5.Изписване на число до 10 с думи

Да се напише програма, която въвежда **цяло число в диапазона** **[0…10]** и го **изписва с думи** на английски език. Ако числото е извън диапазона, изписва &quot; **number too big**&quot;. Примери:

| **вход** | **изход** |  **вход** | **изход** |  
| --- | --- | --- | --- |
| 5 | five | 1 | one |
| 9 | nine | 10 | number too big |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#4](https://judge.softuni.bg/Contests/Practice/Index/151#4).

> **Подсказка** : можете да напишете дълга **if** - **else** - **if** - **else** … **else** , с която да разгледате възможните **11 случая**.

## 6.Бонус точки

Дадено е **цяло число** – брой точки. Върху него се начисляват **бонус точки** по правилата, описани по-долу. Да се напише програма, която пресмята **бонус точките** за това число и **общия брой точки** с бонусите.

- Ако числото е **до 100** включително, бонус точките са **5**.
- Ако числото е **по-голямо от 100** , бонус точките са **20%** от числото.
- Ако числото е **по-голямо от 1000** , бонус точките са **10%** от числото.
- Допълнителни бонус точки (начисляват се отделно от предходните):
  - **oo** За **четно** число + 1 т.
  - **oo** За число, което **завършва на 5** + 2 т.

Примери:

| **вход** | **изход** |  **вход** | **изход** | 
| --- | --- | --- | --- | 
| 20 | 6 <br/> 26 | 175 | 37 <br/> 212 |
| 2703 | 270.3 <br/> 2973.3 | 15875 | 1589.5 <br/> 17464.5 |

Ето как би могло да изглежда решението на задачата в действие:

![Not fount](/SoftUni-Software-Engineering-master/Programming%20Basics/Exercises/images/84.PNG)

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#5](https://judge.softuni.bg/Contests/Practice/Index/151#5).

> **Подсказка** :
> - Основните бонус точки можете да изчислите с **if** - **else** - **if** - **else** - **if** конструкция (имате 3 случая).
> - Допълнителните бонус точки можете да изчислите с **if** - **else** - **if** конструкция (имате още 2 случая).

## 7.Сумиране на секунди

Трима спортни състезатели финишират за някакъв **брой секунди** (между **1** и **50** ). Да се напише програма, която въвежда времената на състезателите и пресмята **сумарното им време** във формат &quot; **минути:секунди**&quot;. Секундите да се изведат с **водеща нула** (2 -> &quot;02&quot;, 7 -> &quot;07&quot;, 35 -> &quot;35&quot;). Примери:

| **вход** | **изход** |  **вход** | **изход** |
| --- | --- | --- | --- | 
| 35 <br/> 45 <br/> 44 | 2:04 | 22 <br/> 7 <br/> 34 | 1:03 |
| 50 <br/> 50 <br/> 49 | 2:29 | 14 <br/> 12 <br/> 10 | 0:36 |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#6](https://judge.softuni.bg/Contests/Practice/Index/151#6).

> **Подсказка** :
> - Сумирайте трите числа и получете резултата в секунди. Понеже **1 минута = 60 секунди** , ще трябва да изчислите броя минути и броя секунди в диапазона от 0 до 59.
> - Ако резултатът е между 0 и 59, отпечатайте 0 минути + изчислените секунди.
> - Ако резултатът е между 60 и 119, отпечатайте 1 минута + изчислените секунди минус 60.
> - Ако резултатът е между 120 и 179, отпечатайте 2 минути + изчислените секунди минус 120.
> - Ако секундите са по-малко от 10, изведете водеща нула преди тях.

## 8.Конвертор за мерни единици

Да се напише програма, която **преобразува разстояние** между следните 8 **мерни единици** : **m** , **mm** , **cm** , **mi** , **in** , **km** , **ft** , **yd**. Използвайте съответствията от таблицата по-долу:

| **входна единица** | **изходна единица** |
| --- | --- |
| **1** meter ( **m** ) | **1000** millimeters ( **mm** ) |
| **1** meter ( **m** ) | **100** centimeters ( **cm** ) |
| **1** meter ( **m** ) | **0.000621371192** miles ( **mi** ) |
| **1** meter ( **m** ) | **39.3700787** inches ( **in** ) |
| **1** meter ( **m** ) | **0.001** kilometers ( **km** ) |
| **1** meter ( **m** ) | **3.2808399** feet ( **ft** ) |
| **1** meter ( **m** ) | **1.0936133** yards ( **yd** ) |

Входните данни се състоят от три реда:

- Първи ред: число за преобразуване
- Втори ред: входна мерна единица
- Трети ред: изходна мерна единица (за резултата)

Примерен вход и изход:

| **вход** | **изход** |   **вход** | **изход** |  **вход** | **изход** |
| --- | --- | --- | --- | --- | --- | 
| 12 <br/> km <br/> ft | 39370.0788 ft | 150 <br/>  mi <br/>  in | 9503999.99393599 mi | 450 <br/> yd <br/> km | 0.41147999937455 yd |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#7](https://judge.softuni.bg/Contests/Practice/Index/151#7).

## 9.Познай паролата

Да се напише програма, която **въвежда парола** (един ред с произволен текст) и проверява дали въведеното **съвпада** с фразата &quot; **s3cr3t!P@ssw0rd** &quot;.При съвпадение да се изведе &quot; **Welcome**&quot;. При несъвпадение да се изведе &quot; **Wrong password!** &quot;. Примери:

| **вход** | **изход** |  **вход** | **изход** |  **вход** | **изход** |
| --- | --- | --- | --- | --- | --- |
| qwerty | Wrong password! | s3cr3t!P@ssw0rd | Welcome | s3cr3t!p@ss | Wrong password! |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#8](https://judge.softuni.bg/Contests/Practice/Index/151#8).

> **Подсказка** : използвайте **if** - **else** конструкцията.

## 10.Число от 100 до 200

Да се напише програма, която **въвежда цяло число** и проверява дали е **под 100** , **между 100 и 200** или **над 200**. Да се отпечатат съответно съобщения като в примерите по-долу:

| **вход** | **изход** |   | **вход** | **изход** |   | **вход** | **изход** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 95 | Less than 100 | 120 | Between 100 and 200 | 210 | Greater than 200 |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#9](https://judge.softuni.bg/Contests/Practice/Index/151#9).

> **Подсказка** : използвайте **if** - **else** - **if** - **else** конструкция за да проверите всеки от трите случая.

## 11.Еднакви думи

Да се напише програма, която **въвежда две думи** и проверява дали са еднакви. Да не се прави разлика между главни и малки думи. Да се изведе &quot; **yes**&quot; или &quot; **no**&quot;. Примери:

| **вход** | **изход** | **вход** | **изход** |  
| --- | --- | --- | --- |
| Hello <br/> Hello | yes | SoftUni <br/> softuni | yes |
| Soft <br/> Uni | no | beer <br/> vodka | no | 

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#10](https://judge.softuni.bg/Contests/Practice/Index/151#10).

> **Подсказка** : използвайте **if** - **else** конструкция.Преди сравняване надумите ги обърнете в долен регистър: **word = word.ToLower()**.

## 12.Информация за скоростта

Да се напише програма, която **въвежда скорост** (десетично число)и отпечатва **информация за скоростта**. При скорост **до 10** (включително) отпечатайте &quot; **slow**&quot;. При скорост **над 10** и **до 50** отпечатайте &quot; **average**&quot;. При скорост **над**  **50** и **до**  **150** отпечатайте &quot; **fast**&quot;. При скорост **над**  **150** и **до**  **1000** отпечатайте &quot; **ultra fast**&quot;. При по-висока скорост отпечатайте &quot; **extremely fast**&quot;. Примери:

| **вход** | **изход** | **вход** | **изход** |   
| --- | --- | --- | --- | 
| 8 | slow | 49.5 | average |
| 126 | fast | 160 | ultra fast |
| 3500 | extremely fast ||

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#11](https://judge.softuni.bg/Contests/Practice/Index/151#11).

> **Подсказка** : използвайтесерия от **if** - **else** - **if** - **else**** - ****…** конструкции, за да хванете всичките 5 случая.

## 13.Лица на фигури

Да се напише програма, която **въвежда размерите на геометрична** фигура и пресмята лицето й. Фигурите са четири вида: квадрат ( **square** ), правоъгълник ( **rectangle** ), кръг ( **circle** )и триъгълник ( **triangle** ). На първия ред на входа се чете вида на фигурата ( **square** , **rectangle** , **circle** или **triangle** ). Ако фигурата е **квадрат** , на следващия ред се чете едно число – дължина на страната му. Ако фигурата е **правоъгълник** , на следващите два реда четат две числа – дължините на страните му. Ако фигурата е **кръг** , на следващия ред чете едно число – радиусът на кръга. Ако фигурата е **триъгълник** , на следващите два реда четат две числа – дължината на страната му и дължината на височината към нея. Резултатът да се закръгли до **3 цифри след десетичната точка**. Примери:

| **вход** | **изход** |  **вход** | **изход** | 
| --- | --- | --- | --- | 
| square <br/> 5 | 25 | rectangle <br/> 7 <br/> 2.5 | 17.5 |
| circle <br/> 6 | 113.097 | triangle <br/> 4.5 <br/> 20 | 45 |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#12](https://judge.softuni.bg/Contests/Practice/Index/151#12).

**Подсказка** : използвайтесерия от **if** - **else** - **if** - **else**** - ****…** конструкции, за да обработите 4-те вида фигури.

## 14.Време + 15 минути

Да се напише програма, която **въвежда час и минути** от 24-часово денонощие и изчислява колко ще е **часът след 15 минути**. Резултатът да се отпечата във формат **hh:mm**. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с **водеща нула** когато е необходимо. Примери:

| **вход** | **изход** |  **вход** | **изход** | **вход** | **изход** | 
| --- | --- | --- | --- | --- | --- | 
| 1 <br/> 46 | 2:01 | 0 <br/> 01 | 0:16 | 23 <br/> 59 | 0:14 |

| **вход** | **изход** |  **вход** | **изход** |
|---|---|---|---|
| 11 <br/> 08 | 11:23 | 12 <br/> 49 | 13:04 |

Тествайте решението си в **judge**  **системата** : [https://judge.softuni.bg/Contests/Practice/Index/151#13](https://judge.softuni.bg/Contests/Practice/Index/151#13).

> **Подсказка** : добавете 15 минути и направете няколко проверки. Ако минутите надвишат 59, увеличете часовете с 1 и намалете минутите със 60. По аналогичен начин разгледайте случая, когато часовете надвишат 23. При печатането на минутите проверете за водеща нула.

## 15.Еднакви 3 числа

Три еднакви числа: да се въведат 3 числа и да се отпечата дали са еднакви (yes / no).

## 16.Изписване на число до 100 с думи

\* Да се напише програма, която превръща число [0…100] в текст: 25  &quot;twenty five&quot;
