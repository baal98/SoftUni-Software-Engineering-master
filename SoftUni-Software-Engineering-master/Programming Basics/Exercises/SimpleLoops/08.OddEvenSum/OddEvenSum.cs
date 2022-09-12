﻿using System;

public class OddEvenSum
{
    public static void Main()
    {
        int numbers = int.Parse(Console.ReadLine());
        int oddSum = 0;
        int evenSum = 0;

        for (int i = 0; i < numbers; i++)
        {
            int num = int.Parse(Console.ReadLine());
            if (i % 2 == 0)
            {
                evenSum += num;
            }
            else
            {
                oddSum += num;
            }
        }

        if (evenSum == oddSum)
        {
            Console.WriteLine("Yes sum = {0}", evenSum);
        }
        else
        {
            Console.WriteLine("No diff = {0}", Math.Abs(oddSum - evenSum));
        }
    }
}