﻿using System;

public class Program
{
    public static void Main()
    {

        int num;
        while (true)
        {
            Console.Write("Enter even number: ");

            try
            {
                num = int.Parse(Console.ReadLine());

                if (num % 2 == 0)
                {
                    Console.WriteLine("Even number entered: {0}", num);
                    break;
                }
                else
                {
                    Console.WriteLine("The number is not even.");
                }
            }
            catch (Exception)
            {
                Console.WriteLine("Invalid number!");
            }
        }
    }
}