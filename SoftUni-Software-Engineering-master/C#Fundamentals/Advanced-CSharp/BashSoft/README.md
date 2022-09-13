﻿# <p align="center"> BashSoft </p>

# 1.BashSoft piece: Stacks and Queues

# Part I: Creating the base functionality needed

## Problem 1.Create a Visual Studio Project

Our first task is to **create** a **project** called **BashSoft** , which we will extend until the end of the course so you might want to **save**** it **somewhere, where you can** easily ****find** it and where you can be **sure** you **won&#39;t delete** it. You can call the class with the **Main()** method, **Launcher** , because from it we will only call the specific functions we want to execute, but our execution logic will be in other classes.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/22.PNG)

Once you have created the project, you have to add a class that we will call **IOManager** and it will give us the functionality for traversing the folders and other behaviors.

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/23.PNG)

In the next menu you have to choose to create a new class with the name &quot; **IOManager**&quot;

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/24.PNG)

Next the only things we have to **change** over the **generated class** is **to** add it &quot; **public static**&quot; before the keyword **class**. The keyword &quot; **public**&quot; means we can **use** our class **everywhere** in our project. Sometimes we will leave some methods **private** , because we may want to **hide** some of the **functionality** of our class, in front of the other world. The other keyword &quot; **static**&quot; means that we can do &quot; **general/global**&quot; stuff with it. Example: &quot; **Math**&quot;, &quot; **Console**&quot;.

The **opposite**** of ****static** we can say are classes like &quot; **Stack** , **List** , **StringBuilder**&quot;  for which we have to say &quot; **new List&lt;T&gt;&quot;** in order **to**** create **a** new **list. The** static **classes** do not need to be created **like we don&#39;t say &quot;new Math&quot;, instead we just use** Math.Sqrt().**

So now your class should look something like this: 

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/26.PNG)

## Problem 2.Create a flexible interface for output to the user

So now that we have our first class we are going to have to implement some functionality that this class should have. But before that, first we have to decide **how** are we going **to**** communicate with the user efficiently**and if this is something that we have to use in many places, how can we change it or replace it easily using doing only a few changes in one place. The solution behind such a problem give us one of the [**Design Patterns**](https://en.wikipedia.org/wiki/Software_design_pattern) which are a topic of the**next course **, but the main idea of this one is that we can** hide **some** functionality**(The writing to the console, which can easily be changed for writing in a file),**by using **a** class **that only gives us** base functionality** for communication with a user.

Our new class can be called **OutputWriter** and you should make it following the steps above as described for the **IOManager**. The **new class** again has to be **public** and **static** and after you&#39;ve created it, it should look something like this:

 ```csharp
 public static class OutputWriter
 {
 
 }
 ```
So now we can add a few methods that we will use throughout our whole app that write to the currently set output.

- The first method gives us the ability to **write a message.**
- The second method to implement is a method for **writing a message on a new line**.
- The third method is to **write a new empty line**.
- The fourth method is to **write a different kind of message** which is an **error/exception**.

The class with the three methods inside it should look something like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/25.PNG)

The implementation of the first three methods is pretty common. The **first** one only **writes the message on the console** , and the **second** one **writes the message** and goes to the **next line after that**. The **third** only **writes an empty line on the console**. The **fourth** method however has some small specifics. The specifics are that we need to **get** the **current**** foreground color**(font color),**save it **,** change the foreground color to red **,** write the given message **and finally** change **the** foreground color ****to** the **one**** before**. Here is how this has to look in code:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/27.PNG)

Now that we are ready with the user output. It&#39;s time to implement the traversal of the folders and in the future, **if** we want to **change** the **output destination** , we **only** need to **change** it here in the **class** we **just made** , and not everywhere where we&#39;ve written **Console.WriteLine()**.

# Part II:  Implementing the traversal alorithm

## Traversing the folder of the project

Our next task is to learn how to **traverse folders** in order to be able to do all kinds of operations with files that are stored on the hard drive. This is our first small step into the big picture.

We will **traverse the folder** of the project **using**** queue**with a technique called [**BFS**](https://en.wikipedia.org/wiki/Breadth-first_search). [Here](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif) is a animation that can probably help you understand how**BFS** works, however this is not the main point, so you may just use it, without going into too much depth about how it works.

Shortly we will create a method **TraverseFolder (string path)**. How does it traverse a folder? **First** it **enqueues** the **folder** that we **pass as parameter** in the method signature. After that it **dequeues**** every ****folder** in the queue one at a time **until** the **queue** becomes **empty** , **while**** at the sam **e time** enqueues ****all** of its **subfolders** at the end of the queue.

For our purposes we will **use** the static class **DirectoryInfo** , which **will**** give **us all the** information **we need** for **the** directories **we work with, don&#39;t worry you&#39;ll get familiar with it in a few lectures. Here is the initialization of the method with the queue. We** enqueue **the** root ****folder** we wanted to traverse first and also **create** a **variable**** for **the** indentation **of the first path, so it can be later** used ****for**** displaying **the** levels ****of depth** we&#39;ve entered while traversing.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/28.PNG)

Next we need to make sure we will **traverse**** all **of the** subfolders **that we have** in **the** queue **so we will traverse** while **the** queue **is** not empty**(that is why we**push **the** initial ****element** in the queue).

**For each iteration**** of **the** while ****loop** we want to **dequeue** a **folder** that we are going to traverse and to **print** its **path** , but in order to know how many level in depth we have entered, we are going to **use**** another ****indentation**** variable **and** take ****the delta between the two**.

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/29.PNG)

Also **for each folder** we need to **iterate**** all **its** subfolders **and** add ****them**** to **the end of the** queue**. We can do this with a simple foreach loop:

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/30.PNG)

You can **print** the **full**** name ****of** the **directory** with the following line of code:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/31.PNG)

Now if you filled your TODOs properly when you run your code you should get some output like this if we call the method through the **Main()**

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/32.PNG)

 You are now ready with your first tool for the wanted bash. Soon you will be able to easily change your position in the file system and do different operations with other files.

## Creating a set of error messages to display if a function produces such an error:

Since we are making a **fairly**** big ****project** , we will have **different**** constant ****messages** to display **in** the whole **project** to the user, so a **good**** idea **would be to** extract ****all** these **messages**** in ****one**** place **and be able to** change **what you want** from ****1**** place **only. So now we are going to** create **such a** class **, where to** save **such** messages **that are** used ****often**.
The **class** should be **named**** ExceptionMessages **and is** public **and** static **. The only things we are going to** put **in this class are** public ****const**** strings ****with** a given **name**** and **it&#39;s corresponding** message**:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/33.PNG)

So from now on, every time we have to add a message you should follow the format described above.

## Creating a data structure for the Bashsoft

Our next task is to **create** a fast and **efficient data structure** that we can **use** in out command interpreter **to store**** data **, easily** make changes **,** find **wanted** information **or** generate **some** statistics** from the data.

**First** thing you have to do is to **open** your **project** from the previous assignment and **set**** up **a** class **in which you will store your data. You have to create** a new class **, following the steps from the previous piece of the story. This class will be called &quot;** StudentsRepository **&quot; and has to be** static **and** public**. By now you should be somewhere around here:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/34.PNG)

Now it is time to decide what **data structure** to define for our application in order to be able to make **fast operations** and have easy access to your data. Since we have to save different courses, the students in those courses have **unique** usernames and list of grades, we can save them in two nested dictionaries with one additional list. See below:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/35.PNG)
![Not fount](/C%23Fundamentals/Advanced-CSharp/images/36.PNG)

We will also **add** a **public**** boolean flag **for** whether **the** data structure **we want to have** has been initialized **. You may have noticed but we&#39;ve put** private **in front of our** data structure **and that is** because **we** do not want ****everybody** outside of this class **to see** our data structure and **change** it, **so** by making it **private** we can **only see** it in the **current**** class **and we will make some of the data** searching and filtration throughout public methods **that give to the other world the basic operations needed over the** SoftUni** system&#39;s data.

## Initializing and saving our data

In order to complete our task, we need to **initialize** our **data structure** and **fill it** , so we will **make a new method** that **initializes** the **data structure,**** if it is not initialized yet **,** reads **the** data **, if it is, we** display **a** new ****message** called **DataAlreadyInitialisedException** that we need to **add**** first ****in** the **ExceptionMessages**** class **. It&#39;s** message ****should**** be**: Data is already initialized!The implementation of the method for the initialization should look like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/37.PNG)

Now it&#39;s time to **fill** the **private ReadData** method (the data will always be valid). It is **private** because we **do not want** to be reachable out of our class.

All we are going to do, is to **read from the console until an empty line is read**. The data you need to read is in the **data.txt** file given with the current document. We also need to **extract** the **information** we need **from** the **input** and **save** it **in** our **data structure.**

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/38.PNG)

Now we need to **check**** if **our course and student** exists **in our data.** If **we** don&#39;t do this **we are sure to get an** exception **. So** if **the** course ****doesn&#39;t exist** we must **initialize the inner**** dictionary **holding the students for the given course. Also** if **the** student ****doesn&#39;t** exist we have to **initialize the inner list** with grades. Finally we **add** the mark.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/39.PNG)

Finally **after** the **while**** loop **we need to** set **the** isDataInitialized **to** true **and** print **&quot;** Data ****read**!&quot; **on** a **new**** line**!

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/40.PNG)

## Problem 4.Making security checks available before retrieving data from the data structure

Since we are going to **make**** queries ****to** the **data**** structure **in this BashSoft piece and also in some others along the track of the course, so it** would ****be** a **good**** idea ****to**** make **a** method ****for** the **security**** checks ****in**** order ****to**** retrieve **some** data **for a given course or for a given student in some course. This way we will** save ****our**** selves **the** writing **of the** checks ****each**** time **and** invoke **the** methods ****where** such a check is **needed**.

So the **first**** method **will be** called ****IsQueryForCoursePossible** and the **second** will be **called**** IsQueryForStudentPossibl ****е**. **Both** should be **private** and **static** and as you might guess their **return** type is **bool**. The **first** one take **one**** parameter**(**the course name**) and the**second **one takes** two ****parameters** ( **the course name** ) ( **the user name of the student** ). Their definition should look like the following:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/41.PNG)

Since the **second**** method **will have to do half of the checks for the course that are done in the first method we** will ****reuse** the **first**** one** and for this reason we are starting with it&#39;s implementation.

First thing we need to **check** in order to search for the given course name, is **whether** the **data**** structure ****is** actually **initialized**. **If** it **hasn&#39;t** been **initialized** we **create** a **new**** message ****in** the **ExceptionsMessages** that is **called**** DataNotInitializedExceptionMessage** and it&#39;s message is : &quot;The data structure must be initialised first in order to make any operations with it.&quot; :

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/42.PNG)
 
 We are now **returning**** true ****if** the **data**** structure **has been** initialized **, but we** haven&#39;t ****checked**** whether **the** given ****courseName exists** as a key in the data structure.
So now we have to **add** this **check**** in **the** body ****of** the **if** and **if** the **data**** structure ****contains** the **key** , we **return**** true **while in the** other ****case** we **display** an **exception** that we&#39;ll need to add in the **ExceptionsMessages** called **InexistingCourseInDataBase**** with **the following** message**: &quot;The course you are trying to get does not exist in the data base!&quot;

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/43.PNG)

Now that we’ve implemented the first method for the checks, it’s time for it’s sidekick. As we’ve said we will reuse the check from the first method and also add a check for whether the given student user name exists in the data structure of the university. If it is present, we return true, if it is not we display an exception that we’ll need to add in the ExceptionsMessages called InexistingStudentInDataBase with the following message: “The user name for the student you are trying to get does not exist!” and finally we return false : 

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/44.PNG)

## Displaying a student entry:

**Before** we continue with the **reading** of the **data** , there is just one last thing we might **add** in order to make our life easier. Since now we have **two**** methods **that are going** to ****display**** student **somehow and we might have more things that need to display student after a filter or a sorting for example, by implementing such a method** we ****do**** not ****need**** to write formatting strings in every method **that displays students on the output writer.The given** method **will be** called ****DisplayStudent**** receiving **a** KeyValuePair **of** string**(user name) and value:**List&lt;int&gt;**(scores on tasks). A good place to**put **the** print ****student**** method **may be the Student repository, but maybe an even better place is** in **the** output ****writer** since it implements the logic for how thing are displayed on the standard output. The implementation of the method should be as follows:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/45.PNG)

## Reading information from our data

The most basic operations for extracting information will be to **get all students from a given course** and **get all the scores on the tasks**. We need **define two methods**. Let&#39;s start with the **first**** one **. It should be** public ****static** with **return** type **void**. It&#39;s **parameters** are the **course**** name **and the** user ****name**** of **the** student **. So** if **the** query ****for** the **given**** student **is** possible **, we need to** print **the** him ****on** the output and so we give a new student to the **Output**** writer** in order to be printed:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/46.PNG)

The other method is analogical. It **gets all students from a given course**** if **the** query **for course is** possible**.
**First** we **write** the **course**** name **followed by two dots and after that we** foreach **the** collection **with** students **from the given course and** print ****all** of the **students**

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/47.PNG)

## Test your code

If you put the given input and **get all the students from the Unity course** ( query should look like this): ` ![](data:image/*;base64,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)

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/48.PNG)

And the result should look like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/49.PNG)

Now we want to test the functionality for **getting student&#39;s grades from a given course**. The request should look something like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/51.PNG)

And the result, something like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/50.PNG)

Now we are ready with the current piece and now we can easily keep track of the courses and students inside them and if needed, view some data that we might want. Soon we will **learn** how to make **filters** and **sort** our data so that it is in a more accurate format and moreover we will **go**** into ****depth**** about **the** constraints** for the possible course names, user names and scores on a given task.

## Problem 1.DIY Judge System

### Idea overview

Our first task is to **implement** a simple &quot; **judge**&quot; system which we will later **use**** to ****test** our **solutions**. Why not use the good old judge? Well he&#39;s taken the week off and we still need a way to test our code. The idea is simple – **create a program which will read a text file** (your output for a given problem) and **compare** its **contents** to the contents of another text file (expected output for that problem), **if** the contents are **identical** then the files are identical and your **output is correct** and everything&#39;s smooth. **If** the files **differ** in any way then an extra file called &quot; **Mismatches.txt**&quot; is **created** which **holds detailed information about the lines that do not match**. Let&#39;s start off.

### Set up our Tester Class

Create a new Visual Project Solution and a new Console Application called &quot;SimpleJudge&quot;. In the SimpleJudge project **add** a **new**** class **called &quot;** Tester **&quot;. Mark it as** public static **class and** declare **a** new ****public static void** method called **CompareContent(string userOutputPath, string expectedOutputPath)**:

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/52.PNG)

The idea here is that using **userOutputPath** and **expectedOutputPath** we can find the **files**** holding **the** user output ** and** expected output respectively **,** read **the** user output **and** the expected output **and** compare **them** line by line** to see if they are identical.

As we mentioned above, however, we will also need a path to **create** the **Mismatches.txt** text file which will **hold** the **mismatches** (if any). In order to do that efficiently we can **use** the **expectedOutputPath** and simply **create** the **Mismatches.txt in the same folder**. How can we go about this? First we need to **extract the path** to the directory **of** the **expected output file**. We achieve this by creating a helper method:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/53.PNG)

What this method does is simply **get the path**** to **the directory of the** expected ****output**** file ****by finding the index of the last &#39;\&#39;** in the path of the expected output file. For example if the path is _C:\OutputFiles\OddLinesExpectedOutput.txt_ we **find** the **index** of the second **&#39;\&#39;** (14 in our case) then we simply **get a substring of that path up until that index** and we end up with _C:\OutputFiles_ which is the path to the directory of the output file. Then we finally **append** the **name of** our **file**** and **a** slash ****&quot;\Mismatches.txt&quot;** and we finally end up with a path looking something like this &quot;_C:\OutputFiles\Mismatches.txt&quot;_. You might wonder how come we use a path to a file that does not currently exist. We&#39;ll get to that in a moment, but first let&#39;s call out helper method up in our main method.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/54.PNG)

### Read from and create files

Next up we need to **read** the **two files** – the user output and the expected output. This is done again in just one line of code. We call the **File** class and invoke the **.ReadAllLines(string path)** method. However this time around we need a variable in which we can actually store the contents of the files we read from. The **File.ReadAllLines(string path)** function **returns a string array** so our code will look something like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/55.PNG)

We end up with a variable input which holds all the **user output** , read from the user output text file line by line, and a variable called **expectedOutput** which holds the… expected output, again read from the expected output text file line by line. We are ready to start the **comparison of the two**** files **.The information we will need while comparing the files is whether there are any mismatches and also the result of the comparison of two corresponding lines.  So we can** make **one** Boolean **for the** mismatches ****and**** one ****string**** array **called** mismatches **which** gets **it&#39;s** value ****from** the **method**** GetLineWithPossibleMismatches** with it&#39;s three parameters shown in the picture below:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/56.PNG)

 We’ll get to the implementation of this method in a moment. First we need to finish the CompareContent method so that we can focus our attention on the other functionality waiting to be written. 
The last thing we can do after all the checks for mismatches is to write them on the set output writer and in the mismatches.txt file which is in the same folder as the first file given for comparison and that is done by the PrintOutput method. And finally print on the output writer that the files are read:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/57.PNG)

Finally the **CompareContent** method should look like something pretty similar to this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/58.PNG)

### Find mismatches of two files line by line

Since we are going to **compare**** two ****files** , and that is a separate task, we will use a separate **method** to do so. It&#39;s **called**** GetLinesWithPossibleMismatches **and** takes ****three**** parameters **which are the** strings ****array**** from **the** first ****file** , the **string**** array ****from** the **second**** file ****and** an **out**** parameter ****for** whether there are any **mismatches** , **so** that the following **method**** can ****change**** a ****variable**** outside ****of it&#39;s scope**. The method **returns** a **new**** string ****array** which **represents** the **result**** after **the** comparison** of each line.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/59.PNG)

Before we start the actual comparison and matching it&#39;d be a good idea to **declare**** one ****helper**** variable **which will come into play a bit later. A** string **that has an** initial ****value** of an **empty**** string **and is later** used ****for** the line by line **comparison**** of **the** two ****output**** files **that are given for comparison. Another thing we might want to** set **is the** hasMismatch ****variable** to **false** and **only**** if **on some place** two ****lines** are found **with** a **difference** between them, the **hasMismatch** variable is **set**** to ****true**** and **the one that is** outside **of the method** will ****also**** be ****set**** to ****true**.

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/60.PNG)

Now that we have that sorted out we can safely get to the actual comparison. How do we go about that? Well we will need a few things in order to do effective comparison and write down our mismatches. In order to **compare** the **lines** we can **simply**** run **a** single ****for**** loop **which iterates** through **both** user ****generated** output **and** the **expected**** output ****comparing** each **line**** at ****every**** iteration** and writes the result of each comparison in a new string array called mismatches which we create in after creating the two variable above.

  ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/61.PNG)

What&#39;s going on here is pretty straightforward. We simply **iterate**** over ****all** the **lines** from both the files by **assigning** the **current**** line ****to** the **actual line** variable **and** the **expected**** line ****to** the **expectedItem**** and ****comparing**** them **.** If **they are** not ****matching** we **mark**** mismatch **as** true**, and we willset the output to the following message:

   ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/62.PNG)

And after that append a new line like shown in the else clause in the code above

. **If** however we **don&#39;t**** get **a** mismatch **,** if **the** lines **are** identical **then we simply** write ****down** the **line** in **Mismatches.txt**. Why? Well because **if** we get an eventual **mismatch** down the line or if we&#39;ve gotten one already, it&#39;ll be **easier**** to ****see**** where ****it**** occurred ****if** we also **have** the **rest**** of **the** text **written down. Finally, on** each ****iteration** you **put** the **output**** in **the** corresponding ****cell**** in **the** mismatches ****array**** and ****after** the **for**** loop **we should** return **the** mismatches ****array** and now we are sure to have the mismatches and also the **hasMismatch**** variable ****to**** be ****changed**** to **the** corresponding ****value** , because it&#39;s an out parameter.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/63.PNG)

  Here is a final version of the GetLinesWithPossibleMismatches method:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/64.PNG)

### Printing the data from the comparison to the output writer and to a mismatch file created.

We&#39;ve gotten to the place where we need to **implement** the **PrintOutput**** method **. It** has ****3**** parameters ****in** it&#39;s **declaration**. The **first**** one **is the** array **that we just generated** with **the** mismatches **from the previous method. The** second ****parameter** is whether there are **any**** mismatches ****and** the **third**** one **is the** path ****to** the **mismatches**** file **. All we have to do is** write ****all**** the ****lines**** from **the** mismatches ****on** the **output**** writer ****if** there **has** a **mismatch** , **append** all the **lines**** to **the** mismatch ****file** using the given path **and**** return **so that we exit the method.** If **the** hasMismatch **is** not ****true** , we do not enter in the body of the if and all we do is **write** a **message**** on **a** new ****line** which is the following:
&quot;Files are identical. There are no mismatches.&quot;
Here is a how the implementation of what we just described above, should look:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/65.PNG)

Now we should be ready for testing. You are given three files with the current story piece called **test1.txt, test2.txt, test3.txt**. **First**** compare **the** content ****of**** test1.txt **,** test2.txt**, see what log is written in the mismatches file (mismatch file should not be existing, because there are no mismatches) and**then **compare** test2.txt and test3.txt** and again see the mismatches file to see what has changed.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/66.PNG)
![Not fount](/C%23Fundamentals/Advanced-CSharp/images/67.PNG)

## Saving some data for our current session

The story doesn&#39;t end here. We have to make some modifications to some existing classes and also add some new.

The first new class we are going to write will hold the data for the current session. For now our only purpose is to have a place where we can save out current location and then move using only relative paths.

So we make our public static class called **SessionData** and our only variable in it will be the **currentPath** , which starts with a value of, the application&#39;s directory in the file system.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/68.PNG)

This variable can be very useful in the **IOManager** , because we can use it for different operations like **traversing the current folder** , **creating files** in the current folder, **moving up and down in the folder tree** and also as a starting point in order to navigate to the &quot;resources&quot; folder and **read the**** Database **from a** file **and not from the** console**…

We are going to go through each of these steps in big details so you would be able to understand how each component works.

So enough chit chat, let&#39;s start extending the current classes we have.

## Making directories

First we are going to stop in the **IOManager** and make a method for making a directory. Since we have our **currentPath** in the **SessionData** class al we need is the name of the folder we are going to create.

Our method can be called **CreateDirectoryInCurrentFolder** (string &lt;the name of the folder&gt;) and it&#39;s implementation should look like this.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/69.PNG)

 We use the method given fro the directory class, which takes an absolute an creates.

So now if we call it from the main method like this

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/70.PNG)

And since the folder that our application is currently running in the bin\Debug  debug folder of the application, there a folder with a name &quot;pesho&quot; should be added.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/71.PNG)

## Modifying the traversal

Now that we are done with that and since we now have some space where we can save the current folder, we are going to start our traversal method, using the current folder. All we have to do is **remove** the **string**** path ****argument** and also change it with **Session.currentPath**

Your traverse method should now start like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/72.PNG)

Try testing the functionality now!

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/73.PNG)

If this is your result you&#39;ve done your job well.

Another thing we might want to add to the current implementation of the traversal, the display of the files in the current folder. It is pretty similar to the adding of the subfolders. All we need is a **foreach**** loop **and to** use **the** Directory **.** GetFiles**(**path**) to get all the files and display them. The display of the files should be**between **the** display ****of** the **current**** path ****and** the **adding**** of **the** subfolders**.

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/74.PNG)

In order **to**** display **the** file **, we will** change **the** path ****to** the **given**** file **with** dashes**, because we can see the folder we are in on the line before the display of the files and this way we can focus on the file names.
To get the whole path, we will get the index of the last &#39;\&#39;(backslash) and print a string with such a length of dashes, followed by the file name like shown below:

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/75.PNG)

and the output of  traversal with depth 0 should now be similar to the given:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/76.PNG)

There is just one final piece of code we need to add to this method and it should be tip top. Bearing in mind that we added a parameter for the depth of the traversal, maybe we should **include** it as some kind of a **condition** in our code **so** that **it**** would ****be**** easier ****to**** know ****when**** to ****stop**** traversing** if we&#39;ve gone deep enough and in order to check how deep we&#39;ve gone, we can use the indentation variable that gives us exactly this. So after the assigning of a value to this variable, you can add the following line of code:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/77.PNG)

This way we are sure to **stop** the **traversal**** before **we** print **the** current ****folder** , **if** we&#39;ve gone **deep**** enough**.

Now the question remains, how do we change the starting folder and can we do it with relative and absolute paths. Well we should be able to implement it and the only thing we should probably keep in mind is whether the given path exists.

## Changing directories

So again using the **IOManager** , we make two functions. One that moves forwards and backwards in the folders and one that gets an absolute path and goes directly there( **Note** : there are many machine specific things in the path if it is absolute).

**In** the **relative**** change **of** folder ****method** , we may won&#39;t to check **if** the **user** would like to **go**** one ****folder**** back **, and the** command **for this** is **&quot;** cdRel ****..&quot;** in the command prompt, so we will use **&quot;..&quot;** for a string that **indicates**** that ****the**** user ****wants**** to ****go**** one ****folder**** up ****the**** file ****tree**. **If** he **wants**** to ****go**** into **one** folder **, the** string **for** path **should be  the** current ****session**** path ****+****&#39;\&#39; + the name of the folder **we want to enter.** Using **the** relative ****path** and the current path of the traverser, we can easily **create** an **absolute**** path **an by** using **the** method change for absolute path **, we can** reuse **the** check** whether the given path exists or not.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/78.PNG)

Note that for going to the previous path, we **take** the **last**** index ****of** the **backslash** which is right after the previous folder and after that we **take** a **substring**** from ****0** with the given **index** representing the **number**** of ****elements** before the backslash, so if we take that substring, we have the absolute path to the parent folder of the current one, so we take it as a current folder.
However **if** the **command**** is ****not**&quot; **..**&quot;, but a path, we add **make** a **new**** absolute ****path** and **reuse**** some ****code** by calling the other method. This way we have less code duplicates in the two methods.

The change directory with absolute path method is actually not very complicated. All we do is **using** the **API** from the **Directory**** class **,** check ****whether** such a **path**** exists **in the operating system.** If **it** does ****not** , we **display** an **error**** message **for** invalid ****Path** which we should first add in the ExceptiionMessages class, called **InvalidPath**** and **a** message **containing the following text: &quot;The folder/file you are trying to access at the current address, does not exist.&quot; and after that** return **so that it can exit the method.** If **the** device ****has** a **folder**** with ****such** a **path** , it is **set**** to **the** currentPath** at the end of the method.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/79.PNG)

By now we should be ready with everything in the **IOManager**** class **, so we can test the whole functionality. Now you can** test **the** functionality **of everything we&#39;ve written today and more specific the part with the** IOManager** and if there is something wrong with the whole picture, you may want to fix it, so that everything it according to the documents, for the next exercise.

## Lab: Exception Handling

The piece from this lecture is **not**** going ****to**** add **any** additional ****functionality** to what the final user can see, **only**** handle **some** possible ****errors** that may appear for some corner cases. These cases are not so much, because

1. We haven&#39;t got so much code, in order to have many error prone places.
2. We are taking safety precautions and check much of the input information, so that such unexpected events can&#39;t happen.

So let&#39;s get started with filling out some holes in our application.

## Cover Possible Unexpected Behavior in Traversal Method in the IOManager

The first thing you might want to think about is whether your user can access all the folders and files in the file system and if there are some that you may not, what happens. Well, let&#39;s try.

**Try**** traversing **the** windows ****directory** on your PC, but before that you should go to that directory using the absolute change of directory.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/80.png)

The result should be something like the following lines:

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/81.png)

As you&#39;ve probably noticed, trying to access folders for which we do not have rights, **throws** an **UnauthorizedAccessException** , and it **ruins** the **user**** experience ****and**** breaks **the** functionality ****of** our **application**.

In order for our program to **catch** such an **exceptional**** event **,** handle ****it**** and ****continue**** working **, we have to** add **the** try **-** catch ****block** to **put** the **reading**** of **the** data ****in** the **try**** block **and** if **an** exception **is** catch **we** display **a** message **suitable** for **the** current ****event** , but **in** a more **user**** friendly ****way**.

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/82.png)

This type of exception message is not yet in the **ExceptionMessages** , so you should **add**** it ****and**** put **the** following ****message** : &quot;The folder/file you are trying to get access needs a higher level of rights than you currently have.&quot;.

Now the possible problems with the traversal are solved. And we can proceed with the next thing.

## Reading Two Files for Comparison in the Tester Class

We need to take care of one more thing before we finally leave our main logic and move onto printing the results. What **if**** one ****of** the **files** is **smaller**** than **the** other ****one**? **Try**** comparing **the** two ****files** given to you, called **expected**** and ****actual** from the current piece and you may **see** the **result**. It should be something like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/83.png)

The **outputs** are definitely **not**** identical **, but we still would like a match/mismatch report. There are many ways to achieve this but maybe to catch the exception here would not be the best choice. For that reason, we are going to** add ****one**** variable **, the** minimal ****number**** of ****lines**** of **the** two ****files**. We **check**** if **the** arrays **that hold all the lines from the files,** are ****with** the **same**** length **and** if **they** are ****not** , **set** the **minimal**** number ****of**** lines ****to** the **shorter**** length **,** set **the** hasMismatch **variable to** true **and finally** display **an** error ****.** However, we first need to **add**** it to **the** Exception ****messages**** class **, named** ComparisonOfFilesWithDifferentSizes** and with the following message &quot;Files not of equal size, certain mismatch.&quot; All what we&#39;ve just talked about is displayed below in the piece of code that you should insert before the for loop that compares line by line.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/84.png)

After that we should only **replace** the **variable**** in **the** for ****loop** for the **upped**** boundary** of the index.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/85.png)

Finally, we should also **move** the **initialization** of the **mismatch**** array **,** under **the** if ****statement** and also **change** the **capacity**** of **the** array ****to** the **value**** of ****minOutputLines**.

Now that we&#39;ve fixed the situation here, we should **proceed**** to **the** next ****step**.

## Reading two files for comparison from invalid path

We took safety precautions about the number of rows in each file, but what we didn&#39;t think of, **what**** could ****happen**** if **the** path ****given** to the file is **not** a **valid** path. Let&#39;s try it:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/88.png)

Results in the following:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/89.png)

If we are **making** any kind of **user**** interface **, the** application ****should** always **presume** that the **user**** is **a** two **-year-old and** can ****probably**** do ****or**** enter **just about** everything **you can imagine** and **even** more**.

So the thing we are going to **change** in the **Tester class** is to **put** the **reading**** from **the** files ****in** a **try**** block **and** catch **the** file ****not**** found ****exception** and **display** a **related** to the **error**** message**. Now your code should be looking like this:

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/90.png)

This should change to:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/91.png)

We are reusing the message for the invalid path in the current action, so we do not need to make a new one.
Alright, now that we are done, let&#39;s proceed to what is considered forbidden and what is consider allowed when talking about creating names of files and folders.

## Making a Directory with Illegal Symbols

I don&#39;t know if you&#39;ve noticed but not every symbol is permitted to be used when giving a name to a folder or a file. This is why we must **consider**** listening ****for**** exceptions ****when** the **user**** creates **a** new ****folder**** using **the** public ****method**** CreateDirectoryInCurrentFolder ****,** because the **user**** can ****always**** make **some** mistakes **and** enter **an** invalid ****folder** / **file**** name **… Let&#39;s see what happens now if we** try ****to**** create **a** new ****folder**** called ****\*2**.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/92.png)

And the result of the current operation will give us the following horrible screen:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/93.png)

Our task now is to **catch** that **argument**** exception **and** display **an** understandable ****user**** message ****on** the **output**** writer**

The **operation** that **throws** the **exception**** in **the** creation **of** directory ****method** is clearly the **Directory.CreateDirectory(path)** and since we know that fact, we can easily **put**** it ****in** a **try**** block **, to** catch **the** raised exception**.

The modified implementation of the method should look pretty similar to the following piece of code:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/94.png)

As you can see we are **displaying on** the **output** a **message called**  **ForbiddenSymbolsContainedInName** , however it is **no yet added in** the **ExceptionMessages class** , **so** it is your job to **do it** now. The **message** it has **is**&quot;The given name contains symbols that are not allowed to be used in names of files and folders.&quot;.

Now you can **try**** starting **the** program ****again**** and **the** output ****should** be the **user**** styled ****message**.

## Printing to a Non-Existing Path

Since we generate the path for the mismatches from the expected output path, if it is wrong, the program shouldn&#39;t even arrive to the point in the PrintOutput in the Tester class, however we can never be sure whether some event might trigger such an exception, so that&#39;s why we&#39;ll double check and put the File.WriteAllLines in a try block with a DirectoryNotFoundException catch block watching whether such an exception is raised. After this change the print output should look like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/95.png)

## Going One Folder up the Hierarchy

As we know, the logic for the changing of the folders works correctly, but have you tried to go one folder up when you are in the root folder of the partition.

Let&#39;s **call** the **ChangeCurrentDirectoryRelative**** enough ****times**** with **the parameter**&quot;..&quot;, ****so** that we are **sure**** to ****go**** up ****until** the **root**** folder ****of** the **current**** partition ****and** then **one**** folder ****above**.

In my case that&#39;s 7 calls of the following line of code:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/96.png)

And that results in the following situation:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/97.png)

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/98.png)

These are surely not all the exceptional cases in our program, but these are some of them. You may use the techniques that we used in order to find these holes in the functionality and try to find some other errors that might occur.

Congratulations! You&#39;ve completed the lab exercises for Exception Handling.

# Lab: Manual String Processing
# Implementing the command interpreter of our Bash

Now is probably the key moment in the application we are building. Currently our app is a stack of different functionalities that are coupled to the class with the Main methodand to be more specific to the commands we have written there. However, our application has no predefined order of the commands and the main aim is to provide interpretation of these commands at runtime. So now our job is to **build** an **interpreter**** that ****calls** the **functionalities** we already have.

We are going to need **two**** public ****static**** classes **that** handle **the** input **and the** commands **. The** first ****one** is called **InputReader** and the **second**** one **is called** CommandInterpreter.**

Now that you have created these classes we are going to write some code so that they could get their jobs done.

## Implement InputReader class

First we are going to start with the **InputReader** because it **uses** the **command**** interpreter ****to**** do ****some** of its **job.**

The only method for now will be called from the main one that starts to **listen**** for ****commands** and **executes**** them ****if** the **syntax** is **correct**. We will name this **method**** StartReadingCommands()** and it&#39;s return type will be void.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/99.png)

You&#39;ve probably opened the Command Prompt before and you&#39;ve seen that you do not write your commands on empty lines. Instead the folder that you are currently in is the beginning of the line.

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/100.png)

In order to add this functionality so that our bash **looks**** like **the** command ****prompt** , we will **write** a **message**** on **the** OutputWriter **which will be the** current ****path**** from **the** SessionData **class** followed ****by****&#39;&gt;**&#39;.

Now it&#39;s time to read an input and trim it from all white spaces.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/101.png)

However, **once** we&#39;ve **interpreted** the **current**** command **we want to** continue reading **the next commands so maybe here will be a good time to** add **a** while ****loop** and **read** a **new**** input ****at** the **end**** of **the** loop **. Note that we** repeat **the** code ****above**** in **our** while ****loop** but we **do** the **first**** read ****out**** of **the** loop**, because even the first command can be the command for terminating the BashSoft.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/102.png)

Now we have only two things left to do in the while loop, to finish with its implementation. Firstly, we should **set** some **condition**** for **which the** while ****loop** has to be true. A good way of doing this is to **make** a **constant**** for **the** command ****for**** termination**(which is &quot;quit&quot;) and**then ****check**** in **the** condition ****of** the **loop** whether the input is different from the termination command.

The declaration of a constant looks like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/103.png)

and it is **private** because **we**** do ****not**** want ****other**** classes ****to** be able to **see**** it ****or**** use ****it**. Your task now is to **implement** the **check**** between **the** end ****command**** and **the** input**.

## Interpreting commands

Once you&#39;ve done that it is time to move on to the **interpreting** of a **command**. Before substituting the comment with some code, we have to **write** the **functionality**** for ****interpreting** a **command**. This functionality is somewhat a **different**** task **from reading input and for this reason we will** use ****another**** class **you&#39;ve already made and** write **the** method ****that**** interprets **a** command**.

It can be called exactly as its purpose and its declaration should be similar to this: ![](data:image/*;base64,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)

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/104.png)

However, in order **to**** write **an** implementation ****for** this **method** we need to **know**** all **the** commands **that our** interpreter ****is able to understand**.

The declaration of a command will be given in the following format:

**Description of the command – actual command and possible parameters**

Here is a list of all of them:

Commands list:

- **mkdir**** directoryName** – create a directory in the current directory
- **ls (depth)** – traverse the current directory to the given depth
- **cmp**** absolutePath1 ****absolutePath2** – comparing two files by given two absolute paths
- **changeDirRel**** relativePath** – change the current directory by a relative path
- **changeDirAbs**** absolutePath** – change the current directory by an absolute path
- **readDb**** dataBaseFileName** – read students database by a given name of the database file which is placed in the current folder
- **filter**** courseName ****poor/average/excellent take 2/10/42/all** – filter students from а given course by a given filteroption and add quantity for the number of students to take or all if you want to take all the students matching the current filter option
- **order**** courseName ****ascending/descending take 3/26/52/all** – order student from a given course by ascending or descending order and then taking some quantity of the filter or all that match it
- **download (path of file)** – download a file
- **downloadAsynch: (path of file)** – download file asinchronously
- **help** – get help
- **open** – opens a file

An easy approach is to **check**** if **the** input ****command** corresponds to the ones given in the **commands**** set **. And** if **the given command** exists **, to** check **for the** input ****parameters**. The primary check you may need to perform over the input parameters in each command could be whether the **number**** of ****parameters**** corresponds ****to** the **number**** of ****parameters required by the respective command**. So you&#39;ll probably need this piece of code in each method for calling the given command (data is all the parameters given on the current line, split by a space):

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/105.png)

An approach to **check**** whether **the** command ****is** one of the **possible** can be achieved if we **split** the **input** by a **space** and **check** the **element** with index **0** in a **switch** - **case.**** If **it** enters **one of the cases, we** call **the** corresponding ****method** that **executes** the **given**** command **.** If ****no**** command ****matches** the input, then the default action is a method that **displays** a **message** for an **invalid**** command **.** InterpretCommand ****method** should look something like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/106.png)

In all the cases we have a lot of methods that we call which are not yet known and we haven&#39;t talked about. However almost **every**** single ****one** of them **contains** the **check**** for **the** number **of** parameters **. First we are going to** look ****at** the **implementation**** of **the** method **that** displays **an** invalid ****command**** message **. Actually the only thing that we do** in **this** function **is to** display **an** exception **in the** following ****format** : $&quot; **The command &#39;**** {input} ****&#39; is invalid**&quot; ( **Display**** exception ****using** _the_ **OutputWriter** ). We are going to call this method every time when something with the commands or parameters is not ok and notify the user that something went wrong.

Now we have to look at the implementations of the other methods and follow the order in which they were given above.

 **1.**** Open file **– all we need to know here is the name of the file that we have to open and then we** use **the** current ****path** from the **Session Data** to **generate** the **absolute**** path **of the** file **. The** length **of the** data ****must**** be ****2** elements. Finally, we need to know how to open files with their default program, using C# and this is done using the following code:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/107.png)

**2.**** Make directory **– when making a directory, again we need to check if the length of the data array equals 2 and then take the folder name and create such a folder using the functionality in the** IOManager**:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/108.png)

**3.**** Traverse current folder**– here it is not necessary to have any parameters (only**ls **will display** the files and subfolders in the current folder**) or you can have just one parameter (the depth to go in [ls 4]). If the number of elements in the data array is 1, we call the**TraverseDirectory **from the** IOManager **with depth of 0 and if the elements are 2, then the second element should be the depth and we try to parse it. In case of success pass it to the method for traversal.** If the parameter can&#39;t be parsed**, we print an exception message on the output writer using its method Display exception. We should first add the exception we talked about to the ExceptionsMessages class with the name UnableToParseNumber and a message: &quot;The sequence you&#39;ve written is not a valid number.&quot; The code inside the check for whether the elements are two looks something like this:

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/109.png)


**4.**** Compare content of two files **** – **if the input corresponds to this command, two parameters are expected,** which are the absolute path of the first and the absolute path of the second file **and if there are any mismatches, a new log file is created in the same folder as the second file path. The way we compare two files is already implemented in the** Tester** class, so we just need to call it if all conditions are true:
 
![Not fount](/C%23Fundamentals/Advanced-CSharp/images/110.png)

**5.**** Change directory relative **** – **here the path given should be appended to the current path in the** SessionData **and then it is passed to the** change directory absolute **, because an actual absolute path is generated, but we have all of this implemented in the** IOManager** so we are going to use it to change the current directory by a relative path…

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/111.png)

**6.**** Change directory absolute** – the approach now is pretty much the same as in the previous command.
 
 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/112.png)

 **7.**** Read database**– the parameter needed here for the initialization of the database is a file name from which to read the database of SoftUni. Note that only the name is wanted, which should mean that the file will be searched in the current folder. So maybe we can use the StudentRepository and make a few changes so that our new input comes from a file and not from the console.

First thing you might want to add is a parameter for the public method **InitializeData()** from the student repo so it should look something like this :

public static void InitializeData(string fileName)

However **InitializeData** is just a **façade**** for **the** method ****that**** does **the** actual ****reading** of the data, **so** we need to **add** the **same**** parameter ****in** this **method**** and **then** pass **the** filename ****to** the **ReadData** call:

private static void ReadData(string fileName)

Now it&#39;s time for only a little change in the read data method. First we need to remove the while loop and all the places where we read from the console and finally the input variable. After that you can make a new variable to generate the absolute path and instead checking the Direcotry we will check if the file exists.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/113.png)

If the path exists we are going to do all the processing of the input, so you may **copy all the code that was in the while loop and paste it in the body of the if statement**. Now that you know that there is such a file, you may read it. And after that **wrap everything that was in the while loop in a for loop** , **iterating through all the lines of the file and processing them one by one**. Your code in the if should begin with something like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/114.png)

If the path does not exist however, an exception with the name InvalidPath from the ExceptionsMessages is displayed on the OutputWriter. Now that we&#39;ve done all these changes, we can easily call the method from the command interpreter like this.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/115.png)

**8.**** Get help**– does not need any parameters. Displays some information about all of the commands, so that we can use them easily. We&#39;ve given the whole code for the get help method in the file appended with this lecture. Use it to copy all the printing and not lose time in doing such things. The file is called getHelp.txt.
**9.**** For the rest of the commands ****–** you may leave the body empty, because we do not have the functionality implemented yet.

So now that we&#39;ve written the functionality for the command interpreter, we can link it to the **InputReader** and we should be finally done. All we have to do is to go back to the input reader and **change** the **comment**** for ****interpreting** the command **with** the **method** that interprets a command from the command interpreter.

CommandInterpreter.InterpredCommand(input);

Now we should be done with the functionality for interpreting commands and we will only extend it further on in future pieces in order to implement the full functionality of our BashSoft.And we should also be ready with the whole piece. The only thing left is to call the StartReadingCommands from the main method, and test all the functionality that we have by now. We&#39;ll leave the part with the testing to you, but we&#39;ll show a few pictures of the current state of the program:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/116.png)

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/117.png)

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/118.png)

In the next piece we are going to learn how to make more restricted, pattern following data and

filter it easily.

Congratulations! You&#39;ve successfully completed the lab for Manual String Processing.

# Lab: Regular Expressions

In the current lab we are going to introduce some restrictions in the data for our database. Below you can see the constraints to validate the input entry before adding it to the data structure.

**Input format** – the format for the input should be the following:

**{Course Name}\_{Course Instance}{One or more white spaces}{Username}{One or more white spaces}{Score}**

Our task now is to write a regular expression that matches only valid entries, so we can add them to our data structure safely. Here is some example input data that may be given:

_C#\_Feb\_2015 Kiko23\_4144 69_

_JSApps\_Dec\_2014 Ivo42\_230 17_

_C#\_Jul\_2016 Kiko23\_4144 94_

_JSApps\_Dec\_2014 Sten16\_96 41_

_C#\_Feb\_2015 Desi12\_2001 77_

_WebFundamentals\_Oct\_2015 Ivo42\_230 238_

_DataStructures\_Apr\_2016 Ivan23\_923 94_

_C#\_July\_2016 Rdsauja16\_23 71_

_JSApps\_Dec\_2014 NiK68\_0192 1_

_Unity\_Jan\_2016 Sten16\_96 56_

_unity\_Jan\_2016 Sten16\_96 53_

_JSApps\_Dec\_2014 Stan21\_23 46_

_C#\_Feb\_2015 NiK68\_0192 53_

_DataStructures\_Apr\_2016 Stan21\_23 93_

_WebFundamentals\_Oct\_2015 Desi12\_2001 81_

_Java\_May\_2015 Ivo12\_2341 77_

_C#\_Feb\_15 Sten16\_96 12_

_C#\_Feb\_2015 Desi12\_2001 93_

_WebFundamentals\_Oct\_2015 Kiko23\_4144 87_

**Course name –** starts with a capital letter and may contain only small and capital English letters, plus &#39;+&#39; or hashtag &#39;#&#39;.

**Course instance –** should be in the format &#39;Feb\_2015&#39;, e.g. containing the first three letters of the month, starting with a capital letter, followed by an underscore and the year. The year should be between 2014 and the current year.

**Username** – starts with a capital letter and should be followed by at most 3 small letters after that. Then it should have 2 digits, followed by an underscore, followed by two to four digits. **Correct:** Ivan23\_234, Nas12\_4215, Re14\_203. **Incorrect:** Ivana33\_123, Stan\_12, Мари31\_421

**Score** – should be in the range from 0 to 100.

We are going to write a regular expressing for validating the input and implement it in the method for reading data from a file for the database of the university.

## Start Using a Regex Editor

First we want to open some regex editor that will help us to complete our task. You can use whatever editor you like but you should be already familiar with [https://regex101.com/](https://regex101.com/) so we give you its link here. Next you may want to paste the sample data given above in the TEST STRING box:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/119.png)

Next you need to include the global modifier by simply adding a &#39;g&#39; in the upper right corner:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/120.png)

 Ok, that was pretty easy. Let&#39;s proceed with the next task.

## Using Groups

We are going to have three groups, which are as follows:

1: Course name and instance

2: Student user name

3: Student score on task

First we will start with the first one and to be more specific with the course name. It should **start** with a **capital letter** so this is the first thing to add and you will be able to see as we go, how some data does not meet the conditions of the regex. So our regular expression so far should look like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/121.png)

And the matches are still quite unclear:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/122.png)

As you can see even from the first condition we don&#39;t catch the **unity** course written with small letters.

The next thing our regular expression should include is that the course name may contain small and capital letters as well as the symbols &#39;+&#39; and &#39;#&#39;:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/123.png)

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/124.png)

Now it&#39;s time to add an underscore and the condition for the month name that follows, followed by an underscore:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/125.png)

Here the condition after the range should be exactly two letters, because the total number of letters for the name of the month is 3 and the first one should be capital. The result after this addition clearly shows where we are headed:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/126.png)

As you can see, now the C# course in July is no longer valid because the month is written with four letters.

Finally, it is time to add the year to the matching regular expression:

 ![Not fount](/C%23Fundamentals/Advanced-CSharp/images/127.png)

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/128.png)

As you can see, now we don&#39;t catch the C#\_Feb\_15, because the year is not in the valid format.

Now it is time to write the next group for the user name which is really similar to the one we just wrote.
We have to put a separator for one or more spaces followed by the group starting with a first capital letter:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/129.png)

The result after this filter is pretty much the same for the input we&#39;ve chosen, but there could have been a person whose name starts with lower letter or an entry where there is no space between the course and the user name:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/130.png)

Now we should finish the regex for the rest of the name before the two numbers that follow. We should keep in mind that the we can have **at most** 3 letters after the first capital letter. This means that we may have 3 letters but there may be no letters after the first one. So this may be expressed as follows in the regular expression:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/131.png)

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/132.png)

After this addition you can note that even if C#\_July\_2016 was written following the conditions, the user name would still be incorrect and of course the whole entry would be invalid.

So the only thing left for the username is the **two digits** that follow after the letters, followed by an **underscore** , which is also followed by **two to four digits:**

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/133.png)

You may see below that 2 more matches are now invalid, because they don&#39;t match the required format for the user name and more specifically for the numbers that are in the user name:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/134.png)

The final group we need to catch is the group for the task &#39;s score for the given person and the given course:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/135.png)

The result with the given matches from the example should now look like this:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/136.png)

We&#39;ve finally written the whole regular expression and it is time to implement it in C# in the method that reads all the students from the &quot;database&quot; file, but now you will be given a new file that will contain entries that do not match the given format.

We are going to refactor some code in the **ReadData** method in the **StudentRepository** class because we will now have to get the data from the groups of the current match.

The first thing is to copy the pattern of the match for the entries and also create a newRegexwith the given pattern:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/137.png)

Now that we have this instance of the Regex class, we can use it to check if there is a match with the current input line and if there is such, to get the data that we need from it in order to insert it in the data structure:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/138.png)

So the only thing left is to check if the score has been parsed and whether it is in the range between 0 and 100 and if all the three conditions are true, we can insert the data that we have extracted.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/139.png)

By now we should be ready with the **implementation** of the **regular**** expressions**.

## Adding Features to the Command Interpreter

Just **before**** testing **our new functionality there is one little thing we can** add ****to the**** Command ****Interpreter** , because obviously we forgot adding it in the previous piece. We are going to add a new command which has the following format:

**show courseName (username) – user name may be omitted**

It&#39;s purpose is to show information for the given course or the given username for a course from the database.

In the switch of the **Command Interpreter** the case looks like as follows:

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/140.png)

Now it&#39;s time to add the **TryShowWantedData** method and implement its functionality.We should only check for the number of parameters and depending on this, call the corresponding method.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/141.png)

## Testing Your Code

Finally, we should be done with the corrections and now it&#39;s time for testing. Тhe only thing we should call in the **main**** method **is** InputReader.StartReadingCommands();**

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/142.png)

Since I&#39;ve put the dataNew.txt in the Debug folder, I only read it, but you &#39;ve put it elsewhere, you&#39;ll have to navigate to the folder first.

![Not fount](/C%23Fundamentals/Advanced-CSharp/images/143.png)

You should be ready with the testing! Next time expect to filter and order the data we have just read by some criteria using functional programming.

Congratulations! You&#39;ve completed the lab exercise for Regular Expressions.